
with open('app/reviews/data.ts', 'r', encoding='utf-8') as f:
    full_content = f.read()

# Replace everything from review74 to the end of array.
start_marker = "    id: 'review74',"

idx_start = full_content.find(start_marker)
if idx_start == -1:
    print("Error: review74 not found")
    exit(1)

# Find brace before
brace_idx = full_content.rfind("{", 0, idx_start)

# We want to keep everything before review74.
# And replace the rest until the end of the array.
# The array ends with "];".

end_marker = "];"
idx_end = full_content.rfind(end_marker)

if idx_end == -1:
    print("Error: End of array not found")
    exit(1)

with open('remaining_snippet.ts', 'r', encoding='utf-8') as f:
    snippet = f.read()

# Snippet ends with "  },\n"
# New content = [preamble] + [snippet] + "];" + [postamble]

# Note: preamble ends with "  },\n" (from review75)
# snippet starts with "  {\n"

new_content = full_content[:brace_idx] + snippet + full_content[idx_end:]

with open('app/reviews/data.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated review74-end successfully.")



