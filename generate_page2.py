import re
import json

def parse_reviews(html_content):
    reviews = []
    # Split by the h2 heading which marks the start of each review block in the HTML
    parts = html_content.split('<h2 class="wp-block-heading">')
    
    # Known question patterns to split by (Fallback for non-arrow format)
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
    
    # Skip the first part (before the first h2)
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
        
        # Check if this review uses the "↓" format (newer reviews)
        use_arrow_format = '↓' in body_text
        
        if use_arrow_format:
            qa_items = []
            buffer = []
            
            for line in lines:
                if '↓' in line:
                    # Split only on first arrow
                    parts = line.split('↓', 1)
                    left = parts[0].strip()
                    right = parts[1].strip() if len(parts) > 1 else ""
                    
                    if left:
                        # Pattern: "Question ↓ Answer"
                        # Flush buffer to previous answer if exists
                        if qa_items:
                             qa_items[-1]['answer'] += "\n" + "\n".join(buffer)
                        elif buffer:
                             # Buffer content before any Question? Ignore or add to "感想"
                             pass
                        buffer = []
                        
                        # Start new item
                        qa_items.append({'question': left, 'answer': right})
                    
                    else:
                        # Pattern: "↓ Answer" (Question is in buffer)
                        if buffer:
                            q_text = buffer.pop() # Take last line as Question
                            
                            # Remaining buffer belongs to previous answer
                            if qa_items:
                                prev_ans_append = "\n".join(buffer)
                                if prev_ans_append:
                                    qa_items[-1]['answer'] += "\n" + prev_ans_append
                            
                            qa_items.append({'question': q_text, 'answer': right})
                            buffer = []
                        else:
                            # Edge case: "↓" at start, no buffer.
                            pass
                else:
                    # No arrow, add to buffer
                    buffer.append(line)
            
            # End of lines. Flush buffer to last item's answer.
            if qa_items and buffer:
                qa_items[-1]['answer'] += "\n" + "\n".join(buffer)
            
            # Clean up
            for item in qa_items:
                item['answer'] = item['answer'].strip()
                item['question'] = item['question'].strip()
                
            qa_list = qa_items
                
        else:
            # Logic for older reviews (no arrows)
            current_q = "感想" # Default question
            current_a_lines = []

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

# Generate TS only for ID 94 to 85 (Page 2)
# Indices for Page 2:
# Page 1: 104 ... 95 (Index 0 ... 9)
# Page 2: 94 ... 85 (Index 10 ... 19)

page2_reviews = []
start_idx = 10
end_idx = 20 # Exclusive

if total_count >= end_idx:
    page2_raw = raw_reviews[start_idx:end_idx]
    
    ts_output = ""
    
    for i, qa_list in enumerate(page2_raw):
        current_id_num = total_count - (start_idx + i)
        
        ts_output += "  {\n"
        ts_output += f"    id: 'review{current_id_num}',\n"
        ts_output += f"    image: '/reviews/review{current_id_num}.png',\n"
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

    with open('page2_snippet.ts', 'w', encoding='utf-8') as f:
        f.write(ts_output)
    print("Generated page2_snippet.ts")
else:
    print(f"Not enough reviews for page 2. Total: {total_count}")
