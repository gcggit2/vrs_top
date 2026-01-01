import re
import json

def parse_reviews(html_content):
    reviews = []
    # Split by the h2 heading which marks the start of each review block in the HTML
    parts = html_content.split('<h2 class="wp-block-heading">')
    
    # Known question patterns to split by
    known_questions = [
        "今日の感想はどうでしたか？",
        "特に「役立った」「印象に残った」点を簡単に教えてください。",
        "逆に「もっと知りたかった」「わかりにくかった」点があれば教えてください",
        "今回学んだ AI の知識やスキルは、あなたの現在の業務にどのように活用できそうですか？",
        "「こうすれば、もっと講座が良くなると思う」という改善ポイントがあれば教えてください。",
        "どのような業務でAIを活用したいですか？",
        "ご自分の会社の業務でAIが役立ちそうだと感じた業務はありますか？",
        "感想"
    ]

    raw_reviews = []
    
    for i, part in enumerate(parts[1:], 1):
        heading_match = re.search(r'(.*?)</h2>', part, re.DOTALL)
        heading = heading_match.group(1).strip() if heading_match else ""
        
        body_content = part[heading_match.end():] if heading_match else part
        
        # Remove HTML tags but keep structure somewhat
        # Replace <br> with newlines
        body_text = body_content.replace('<br>', '\n').replace('<br/>', '\n').replace('<br />', '\n')
        # Remove other tags
        body_text = re.sub(r'<[^>]+>', '', body_text)
        
        # Normalize newlines
        lines = [line.strip() for line in body_text.split('\n') if line.strip()]
        
        qa_list = []
        current_q = "感想" # Default question
        current_a_lines = []
        
        # Check if this review uses the "↓" format (newer reviews)
        use_arrow_format = '↓' in body_text
        
        if use_arrow_format:
            temp_q = None
            temp_a = []
            
            for line in lines:
                if '↓' in line:
                    if temp_q and temp_a:
                        qa_list.append({'question': temp_q, 'answer': "\n".join(temp_a)})
                        temp_a = []
                    
                    parts = line.split('↓')
                    temp_q = parts[0].strip()
                    if len(parts) > 1 and parts[1].strip():
                        temp_a.append(parts[1].strip())
                else:
                    if temp_q:
                        temp_a.append(line)
                    else:
                        pass
            
            if temp_q and temp_a:
                qa_list.append({'question': temp_q, 'answer': "\n".join(temp_a)})
                
        else:
            # Logic for older reviews (no arrows)
            for line in lines:
                is_question = False
                matched_q = ""
                
                for kq in known_questions:
                    clean_line = line.replace('*', '').strip()
                    if kq in clean_line:
                        is_question = True
                        matched_q = kq
                        break
                
                if is_question:
                    if current_a_lines:
                        qa_list.append({'question': current_q, 'answer': "\n".join(current_a_lines)})
                    current_q = matched_q
                    current_a_lines = []
                else:
                    current_a_lines.append(line)
            
            if current_a_lines:
                qa_list.append({'question': current_q, 'answer': "\n".join(current_a_lines)})

        if not qa_list and heading:
             qa_list.append({'question': '感想', 'answer': heading})
             
        if qa_list:
            raw_reviews.append(qa_list)
            
    return raw_reviews

with open('temp_reviews.html', 'r', encoding='utf-8') as f:
    content = f.read()
    
raw_reviews = parse_reviews(content)
total_count = len(raw_reviews)

ts_output = "export interface ReviewItem {\n  id: string;\n  image: string;\n  qa: { question: string; answer: string }[];\n}\n\nexport const reviewsData: ReviewItem[] = [\n"

for i, qa_list in enumerate(raw_reviews):
    current_number = total_count - i
    
    ts_output += "  {\n"
    ts_output += f"    id: 'review{current_number}',\n"
    ts_output += f"    image: '/reviews/review{current_number}.png',\n"
    ts_output += "    qa: [\n"
    for qa in qa_list:
        q_json = json.dumps(qa['question'], ensure_ascii=False)
        a_json = json.dumps(qa['answer'], ensure_ascii=False)
        ts_output += "      {\n"
        ts_output += f"        question: {q_json},\n"
        ts_output += f"        answer: {a_json}\n"
        ts_output += "      },\n"
    ts_output += "    ]\n"
    ts_output += "  },\n"

ts_output += "];\n\n"
ts_output += "export const ITEMS_PER_PAGE = 10;\n\n"
ts_output += "export function getLatestReviewPage(): number {\n"
ts_output += "  return Math.ceil(reviewsData.length / ITEMS_PER_PAGE);\n"
ts_output += "}\n"

with open('app/reviews/data_full.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)
    
print(f"Generated {total_count} reviews to data_full.ts.")



