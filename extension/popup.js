// popup.js

pdfjsLib.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

const runBtn = document.getElementById("run");
const copyBtn = document.getElementById("copy");

const out = document.getElementById("out");
const statusBox = document.getElementById("status");
const fileBox = document.getElementById("file");

runBtn.onclick = scanPdf;

copyBtn.onclick = async () => {
  try {
    await navigator.clipboard.writeText(out.value);
    statusBox.textContent =
      "Copied. Press Ctrl+P then Ctrl+V in Pages box.";
  } catch {
    statusBox.textContent = "Copy failed.";
  }
};

async function scanPdf() {
  out.value = "";
  statusBox.textContent = "Scanning...";
  fileBox.textContent = "";

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  const url = tab.url;
  const name = decodeURIComponent(url.split("/").pop());

  fileBox.textContent = name;

  if (!url.toLowerCase().includes(".pdf")) {
    statusBox.textContent = "Current tab is not a PDF.";
    return;
  }

  try {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;

    let keep = [];

    for (let p = 1; p <= pdf.numPages; p++) {
      const page = await pdf.getPage(p);
      const content = await page.getTextContent();

      const text = content.items
        .map(x => x.str)
        .join(" ")
        .toLowerCase();

      if (/question\s*\d+\s*continued/.test(text)) continue;

      keep.push(p);
    }

    out.value = keep.join(",");
    statusBox.textContent = `Done. ${keep.length} pages ready.`;

  } catch (err) {
    statusBox.textContent = "Error while scanning.";
    out.value = err.toString();
  }
}