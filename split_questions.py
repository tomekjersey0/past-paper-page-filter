# Requires: pip install pymupdf
# Usage: python split_questions.py "June 2023 QP.pdf"

import sys
import re
import fitz

if len(sys.argv) < 2:
    print("Usage: python split_questions.py file.pdf")
    sys.exit()

doc = fitz.open(sys.argv[1])

print_pages = []

for i, page in enumerate(doc):
    text = page.get_text().lower()
    text = " ".join(text.split())

    # skip non-question pages
    if re.search(r"question\s*\d+\s*continued", text):
        continue

    # everything else = print
    print_pages.append(str(i + 1))

# output as a,b,c...
print(",".join(print_pages))