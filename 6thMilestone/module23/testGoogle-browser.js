// Browser-friendly version of printGrid
// Fetches a published Google Doc and renders its character grid into #grid-output

window.printGrid = async function () {
  const output = document.getElementById("grid-output");
  const btn = document.getElementById("btn-google-grid");
  output.textContent = "Loading...";
  if (btn) btn.disabled = true;

  try {
    const urlEl = document.getElementById("googleUrl");
    if (!urlEl || !urlEl.href) throw new Error("Google Doc link not found.");
    const url = urlEl.href;

    const resp = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
    const html = await resp.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const table = doc.querySelector("table");
    if (!table) throw new Error("No table found in the document. (CORS may block access.)");

    const rows = Array.from(table.querySelectorAll("tr"));
    if (rows.length === 0) throw new Error("Table has no rows.");

    const headers = Array.from(rows[0].querySelectorAll("th, td")).map((el) =>
      el.textContent.trim().toLowerCase()
    );

    const xIdx = headers.indexOf("x-coordinate");
    const charIdx = headers.indexOf("character");
    const yIdx = headers.indexOf("y-coordinate");

    if (xIdx === -1 || charIdx === -1 || yIdx === -1) {
      throw new Error(`Expected columns not found. Headers found: ${headers.join(", ")}`);
    }

    const cells = new Map();
    let maxX = 0;
    let maxY = 0;

    for (const row of rows.slice(1)) {
      const cols = Array.from(row.querySelectorAll("td"));
      if (cols.length <= Math.max(xIdx, charIdx, yIdx)) continue;

      const x = parseInt(cols[xIdx].textContent.trim(), 10);
      const y = parseInt(cols[yIdx].textContent.trim(), 10);
      const ch = cols[charIdx].textContent.trim();

      if (Number.isNaN(x) || Number.isNaN(y) || !ch) continue;

      cells.set(`${x},${y}`, ch);
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }

    if (cells.size === 0) {
      output.textContent = "(empty grid)";
      return;
    }

    const lines = [];
    for (let r = 0; r <= maxY; r++) {
      let line = "";
      for (let c = 0; c <= maxX; c++) {
        line += cells.get(`${c},${r}`) ?? " ";
      }
      lines.push(line);
    }

    output.textContent = lines.join("\n");
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  } finally {
    if (btn) btn.disabled = false;
  }
};
