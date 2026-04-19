# past-paper-page-filter

Tiny Python utility that removes **"Question X continued"** answer-space pages from past paper PDFs and outputs a custom print page range.

Built for one purpose: print past papers faster.

---

## What It Does

Many exam PDFs contain pages like:

Question 3 continued

These pages are often mostly blank writing space. Useful in an exam, useless when revising with a slow printer.

This script:

* Scans every page in a PDF
* Detects pages containing `Question X continued`
* Excludes them
* Outputs all remaining page numbers in this format:

```text
1,2,4,6,8,10
```

Paste directly into your printer's custom page range box.

---

## Example

### Input PDF

44-page past paper with many continuation pages.

### Output

```text
1,2,4,6,8,10,12,14,16,18...
```

---

## Installation

Install dependency:

```bash
pip install pymupdf
```

---

## Usage

```bash
python split_questions.py "June 2023 QP.pdf"
```

---

## Example Terminal Output

```bash
$ python split_questions.py "June 2023 QP.pdf"
1,2,4,6,8,10,12,14,16
```

---

## Why This Exists

Because some printers are painfully slow.

If each wasted page costs 5–10 seconds, removing 20+ junk pages saves real time.

---

## Requirements

* Python 3
* PyMuPDF

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
* CIE (some formats)

---

## Future Ideas

* Auto-generate reduced PDF instead of page list
* Detect formula/data booklets
* GUI drag-and-drop version
* Batch process folders

---

## License

MIT
