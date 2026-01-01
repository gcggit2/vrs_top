
# Read the current broken file (contains updated top 10 items)
with open('app/reviews/data.ts', 'r', encoding='utf-8') as f:
    current_content = f.read()

# Read the full recovered file (contains all 104 items but old text)
with open('app/reviews/data_full.ts', 'r', encoding='utf-8') as f:
    full_content = f.read()

# Parse or split to extract parts
# current_content has the correct preamble and first 10 items.
# It ends at review95.
# We want to find where review94 starts in data_full.ts

# In data_full.ts:
#   {
#     id: 'review94',
# ...

split_marker = "    id: 'review94',"

if split_marker in full_content:
    parts = full_content.split(split_marker)
    # parts[0] is everything before review94
    # parts[1] is 'review94' onwards... (excluding the marker itself if split removes it, actually split consumes it)
    
    # We want everything starting from the object containing review94.
    # The structure is:
    #   {
    #     id: 'review94',
    
    # So we need to reconstruct the marker.
    rest_of_items = "    " + split_marker + parts[1]
    
    # Now look at current_content. It ends around review95's closing brace.
    # It looks like:
    # ...
    #   },
    # 
    
    # We should make sure we append correctly.
    # Let's clean up current_content trailing whitespace/newlines
    current_content = current_content.strip()
    
    # If it ends with a comma, great. If it ends with }, add a comma.
    if current_content.endswith('}'):
        current_content += ","
    elif current_content.endswith(']'):
         # If it ends with ], it might be accidentally closed?
         # In the previous `head` output it ended with empty lines.
         # Let's inspect the end of current_content
         pass
         
    # Actually, let's just find the end of review95 in current_content.
    # Or simpler: we know current_content has the top 10 items.
    # We can just take the text until "id: 'review95'," block ends.
    
    # Let's rely on string concatenation
    # data.ts (broken)
    # ...
    #   {
    #     id: 'review95',
    #     ...
    #   }
    # ] <-- maybe missing or present?
    
    # Let's strip the last few lines of current_content to remove closing brackets if any
    # and just append the rest.
    
    # Better approach:
    # 1. Take full_content.
    # 2. Find start of review104 (start of array).
    # 3. Find start of review94.
    # 4. Replace the chunk between review104 and review94 with the chunk from current_content.
    
    # current_content chunk:
    # From "id: 'review104'" to end of "id: 'review95'" object.
    
    start_marker = "id: 'review104',"
    end_marker = "id: 'review94',"
    
    # Extract new top 10 from current_content
    # It starts after "export const reviewsData: ReviewItem[] = [\n  {\n" ?
    # Let's just Regex find the whole block for 104 to 95?
    
    # Simpler:
    # current_content is:
    # [preamble]
    # [review104]
    # ...
    # [review95]
    # [EOF]
    
    # We just need to append comma + [review94 to end]
    
    # Let's verify if current_content has valid closing braces for review95.
    # It should.
    
    # Remove any trailing "]" or whitespace from current_content
    current_content = current_content.rstrip().rstrip(']').rstrip()
    
    # Ensure comma
    if not current_content.endswith(','):
        current_content += ","
        
    final_combined = current_content + "\n" + rest_of_items
    
    with open('app/reviews/data.ts', 'w', encoding='utf-8') as f:
        f.write(final_combined)
        
    print("Merged successfully.")
    
else:
    print("Could not find review94 in full content")




