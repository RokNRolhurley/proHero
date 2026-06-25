import React from 'react';

  
const test = () => {

      const docUrl ='https://docs.google.com/document/d/e/2PACX-1vTMOmshQe8YvaRXi6gEPKKlsC6UpFJSMAk4mQjLm_u1gmHdVVTaeh7nBNFBRlui0sTZ-snGwZM4DBCT/pub'


async function printGoogleDocGrid(docUrl) {
  // Convert any Google Doc URL to plain-text export URL
  
  const docId = docUrl.match(/[-\w]{25,}/)?.[0];
  if (!docId) throw new Error("Could not extract document ID from URL");
  const exportUrl = `https://docs.google.com/document/d/${docId}/export?format=txt`;

  // Fetch the document
  const response = await fetch(exportUrl);
  if (!response.ok) throw new Error(`Failed to fetch document: ${response.status}`);
  const text = await response.text();

  // Parse lines: skip header row, extract x, char, y columns
  // Expected table format (tab or multiple spaces separated):
  // x-coordinate  Character  y-coordinate
  const lines = text.split("\n").map(l => l.trim()).filter(Boolean);

  const cells = [];
  for (const line of lines) {
    // Split on 2+ spaces or tabs to handle column separation
    const cols = line.split(/\t+|\s{2,}/).map(c => c.trim()).filter(Boolean);
    if (cols.length < 3) continue;

    const x = parseInt(cols[0], 10);
    const char = cols[1];
    const y = parseInt(cols[2], 10);

    if (isNaN(x) || isNaN(y) || !char) continue;
    cells.push({ x, y, char });
  }

  if (cells.length === 0) throw new Error("No valid grid data found in document");

  // Determine grid dimensions
  const maxX = Math.max(...cells.map(c => c.x));
  const maxY = Math.max(...cells.map(c => c.y));

  // Build the grid (indexed by [y][x]), default fill with space
  const grid = Array.from({ length: maxY + 1 }, () =>
    Array(maxX + 1).fill(" ")
  );

  for (const { x, y, char } of cells) {
    grid[y][x] = char;
  }

  // Print each row (y=0 at top)
  const output = grid.map(row => row.join("")).join("\n");
  console.log(output);
  return output;
}

// Usage:
// printGoogleDocGrid("https://docs.google.com/document/d/YOUR_DOC_ID/edit");

    return (
        <div>
           
                printGoogleDocGrid(docUrl);

        </div>
    );
};

export default test;