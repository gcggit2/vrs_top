
with open('app/reviews/data.ts', 'r', encoding='utf-8') as f:
    full_content = f.read()

# Replace section from review84 to review75.
# review84 starts at "    id: 'review84',"
# review74 starts at "    id: 'review74'," (Start of Page 4)

start_marker = "    id: 'review84',"
end_marker = "    id: 'review74',"

idx_start = full_content.find(start_marker)
if idx_start == -1:
    print("Error: review84 not found")
    exit(1)

# Find brace before
brace_idx = full_content.rfind("{", 0, idx_start)

idx_end = full_content.find(end_marker)
if idx_end == -1:
    print("Error: review74 not found")
    # Maybe it's the last page? But total 104 reviews, so 74 should exist.
    exit(1)

brace_end_idx = full_content.rfind("{", 0, idx_end)

with open('page3_snippet.ts', 'r', encoding='utf-8') as f:
    snippet = f.read()

# Snippet is already formatted correctly as list of objects.
new_content = full_content[:brace_idx] + snippet + full_content[brace_end_idx:]

with open('app/reviews/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated review84-75 successfully.")



