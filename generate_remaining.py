import re
import json

def parse_reviews(html_content):
    parts = html_content.split('<h2 class="wp-block-heading">')
    
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
        
        body_text = body_content.replace('<br>', '\n').replace('<br/>', '\n').replace('<br />', '\n')
        body_text = re.sub(r'<[^>]+>', '', body_text)
        
        lines = [line.strip() for line in body_text.split('\n') if line.strip()]
        
        qa_list = []
        use_arrow_format = '↓' in body_text
        
        if use_arrow_format:
            qa_items = []
            buffer = []
            
            for line in lines:
                if '↓' in line:
                    parts = line.split('↓', 1)
                    left = parts[0].strip()
                    right = parts[1].strip() if len(parts) > 1 else ""
                    
                    if left:
                        if qa_items:
                             qa_items[-1]['answer'] += "\n" + "\n".join(buffer)
                        elif buffer:
                             pass
                        buffer = []
                        qa_items.append({'question': left, 'answer': right})
                    else:
                        if buffer:
                            q_text = buffer.pop()
                            if qa_items:
                                prev_ans_append = "\n".join(buffer)
                                if prev_ans_append:
                                    qa_items[-1]['answer'] += "\n" + prev_ans_append
                            qa_items.append({'question': q_text, 'answer': right})
                            buffer = []
                        else:
                            pass
                else:
                    buffer.append(line)
            
            if qa_items and buffer:
                qa_items[-1]['answer'] += "\n" + "\n".join(buffer)
            
            for item in qa_items:
                item['answer'] = item['answer'].strip()
                item['question'] = item['question'].strip()
                
            qa_list = qa_items
                
        else:
            current_q = "感想"
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

# Generate TS for ALL remaining pages (Page 4 to End)
# Page 1: 0-10
# Page 2: 10-20
# Page 3: 20-30
# Remaining: 30 onwards.

start_idx = 30 # ID 74
end_idx = total_count

if total_count >= start_idx:
    remaining_raw = raw_reviews[start_idx:end_idx]
    
    ts_output = ""
    
    for i, qa_list in enumerate(remaining_raw):
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
        
    # No trailing comma here, we will manage it in update script.
    # Actually loops add comma after each item.

    with open('remaining_snippet.ts', 'w', encoding='utf-8') as f:
        f.write(ts_output)
    print("Generated remaining_snippet.ts")
else:
    print(f"No remaining reviews. Total: {total_count}")



