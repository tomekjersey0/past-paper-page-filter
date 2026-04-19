# past-paper-page-filter

Tool that removes **"Question X continued"** answer-space pages from past paper PDFs and outputs a custom print page range.

Now available as:

* **v1:** Python CLI script
* **v2:** Browser extension for Chrome / Edge (recommended)

Built for one purpose: print past papers faster.

---

## What It Does

Many exam PDFs contain pages like:

Question 3 continued

These pages are often mostly blank writing space. Useful in an exam, useless when revising with a slow printer.

This project:

* Scans every page in a PDF
* Detects pages containing `Question X continued`
* Excludes them
* Outputs all remaining page numbers in this format:

```text
1,2,4,6,8,10
```

Paste directly into your printer's custom page range box.

---

## Versions

### v2 Browser Extension (Recommended)

Use directly inside Chrome / Edge while viewing a PDF.

1. Open past paper PDF in browser
2. Click extension icon
3. Scan Current PDF
4. Copy Range
5. Press Ctrl+P and paste pages

### v1 Python CLI

```bash
pip install pymupdf
python split_questions.py "June 2023 QP.pdf"
```

---

## Example Output

```text
1,2,4,6,8,10,12,14,16,18...
```

---

## Why This Exists

Because some printers are painfully slow.

If each wasted page costs 5–10 seconds, removing 20+ junk pages saves real time.

---

## Compatible Papers

Works best with PDFs where continuation pages contain text like:

```text
Question 5 continued
```

Common in UK exam board papers such as:

* Edexcel
* OCR
* AQA
  n- CIE (some formats)

---

## License

MIT
