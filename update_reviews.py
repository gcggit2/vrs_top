
# Read the original file
with open('app/reviews/data.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Read the new head part
with open('temp_reviews_head.ts', 'r', encoding='utf-8') as f:
    new_head = f.read()

# Find the start of review94 (the 11th item)
start_index = -1
for i, line in enumerate(lines):
    if "id: 'review94'" in line:
        start_index = i - 1 # Include the opening brace line before id
        break

if start_index != -1:
    # Keep everything from review94 onwards
    # Note: temp_reviews_head.ts includes the opening "export const reviewsData..."
    # So we just append the rest of the array elements
    
    rest_of_file = "".join(lines[start_index:])
    
    # Check if new_head ends with comma, if not add it
    if not new_head.strip().endswith(','):
        # It ends with }, probably
        pass
    
    # We need to make sure the syntax is valid. 
    # temp_reviews_head.ts ends with "  }," for review95.
    # rest_of_file starts with "  {\n    id: 'review94'..."
    
    final_content = new_head + ",\n" + rest_of_file
    
    with open('app/reviews/data.ts', 'w', encoding='utf-8') as f:
        f.write(final_content)
else:
    print("Could not find review94")

