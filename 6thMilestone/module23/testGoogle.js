#!/usr/bin/env node
/**
 * grid_printer.js
 * ---------------
 * Fetches a published Google Doc containing a table of Unicode characters
 * with (x, y) grid coordinates and prints the resulting 2-D graphic.
 *
 * Usage:
 *   node grid_printer.js <google_doc_pub_url>
 *
 * Dependencies:
 *   npm install node-fetch cheerio
 */

import fetch from "node-fetch";
import * as cheerio from "cheerio";

/**
 * Fetches a published Google Doc at `url`, parses its character-grid table,
 * and prints the grid to stdout.
 *
 * The document must contain a table with header columns "x-coordinate",
 * "Character", and "y-coordinate" (column order is flexible).
 * Any (x, y) position not listed in the table is rendered as a space.
 * y increases downward: row 0 is the top of the grid.
 *
 * @param {string} url - The public "published" URL of the Google Doc.
 */
async function printGrid(url) {
  // --------------------------------------------------------------------
  // 1. Fetch the document
  // --------------------------------------------------------------------
  const response = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const html = await response.text();

  // --------------------------------------------------------------------
  // 2. Locate the table and identify column positions
  // --------------------------------------------------------------------
  const $ = cheerio.load(html);
  const table = $("table").first();

  if (!table.length) {
    throw new Error("No table found in the document.");
  }

  const rows = table.find("tr").toArray();
  if (rows.length === 0) {
    throw new Error("Table has no rows.");
  }

  // Header row — discover column indices dynamically (order may vary)
  const headers = $(rows[0])
    .find("th, td")
    .toArray()
    .map((el) => $(el).text().trim().toLowerCase());

  const xIdx    = headers.indexOf("x-coordinate");
  const charIdx = headers.indexOf("character");
  const yIdx    = headers.indexOf("y-coordinate");

  if (xIdx === -1 || charIdx === -1 || yIdx === -1) {
    throw new Error(
      `Expected columns not found. Headers found: ${headers.join(", ")}`
    );
  }

  // --------------------------------------------------------------------
  // 3. Parse every data row into a Map of "(x,y)" -> character
  // --------------------------------------------------------------------
  /** @type {Map<string, string>} */
  const cells = new Map();
  let maxX = 0;
  let maxY = 0;

  for (const row of rows.slice(1)) {
    const cols = $(row).find("td").toArray();
    if (cols.length <= Math.max(xIdx, charIdx, yIdx)) continue;

    const x    = parseInt($(cols[xIdx]).text().trim(), 10);
    const y    = parseInt($(cols[yIdx]).text().trim(), 10);
    const char =           $(cols[charIdx]).text().trim();

    if (isNaN(x) || isNaN(y) || !char) continue;

    cells.set(`${x},${y}`, char);
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }

  if (cells.size === 0) {
    console.log("(empty grid)");
    return;
  }

  // --------------------------------------------------------------------
  // 4. Render the grid
  // --------------------------------------------------------------------
  for (let row = 0; row <= maxY; row++) {
    let line = "";
    for (let col = 0; col <= maxX; col++) {
      line += cells.get(`${col},${row}`) ?? " ";
    }
    console.log(line);
  }
}

// ----------------------------------------------------------------------
// CLI entry-point
// ----------------------------------------------------------------------
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error(`Usage: node grid_printer.js <google_doc_pub_url>`);
  process.exit(1);
}

printGrid(args[0]).catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});