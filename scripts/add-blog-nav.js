// Adds a "Blog" link into the nav dropdown and footer Services list on every
// existing root page. Find/replace only — normalizes CRLF for matching, then
// writes back with CRLF (the file's original line ending) preserved.
// Run: node scripts/add-blog-nav.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const ROOT_PAGES = [
  'index.html', 'carmel.html', 'fishers.html', 'zionsville.html', 'westfield.html',
  'noblesville.html', 'avon.html', 'greenwood.html', 'brownsburg.html', 'plainfield.html',
  'lawrence.html', 'beech-grove.html', 'speedway.html', 'lebanon.html',
];

const NAV_FIND = `<div class="menu-dropdown" id="menuDropdown" role="menu">
            <a href="index.html">Home</a>
            <a href="#services">Services</a>
            <a href="#areas">Service Areas</a>
            <a href="#quote">Get a Quote</a>
          </div>`;

const NAV_REPLACE = `<div class="menu-dropdown" id="menuDropdown" role="menu">
            <a href="index.html">Home</a>
            <a href="#services">Services</a>
            <a href="#areas">Service Areas</a>
            <a href="blog/index.html">Blog</a>
            <a href="#quote">Get a Quote</a>
          </div>`;

const FOOTER_FIND = `<div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="#services">10-Yard Dumpster Rental</a></li>
            <li><a href="#services">20-Yard Dumpster Rental</a></li>
            <li><a href="#services">30-Yard Dumpster Rental</a></li>
            <li><a href="#services">40-Yard Dumpster Rental</a></li>
            <li><a href="#services">Yard Waste Removal</a></li>
            <li><a href="#services">Construction Debris Removal</a></li>
          </ul>
        </div>`;

const FOOTER_REPLACE = `<div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="#services">10-Yard Dumpster Rental</a></li>
            <li><a href="#services">20-Yard Dumpster Rental</a></li>
            <li><a href="#services">30-Yard Dumpster Rental</a></li>
            <li><a href="#services">40-Yard Dumpster Rental</a></li>
            <li><a href="#services">Yard Waste Removal</a></li>
            <li><a href="#services">Construction Debris Removal</a></li>
            <li><a href="blog/index.html">Blog</a></li>
          </ul>
        </div>`;

function countOccurrences(haystack, needle) {
  let count = 0;
  let idx = 0;
  while ((idx = haystack.indexOf(needle, idx)) !== -1) {
    count++;
    idx += needle.length;
  }
  return count;
}

function main() {
  let failed = [];
  let modified = 0;

  for (const file of ROOT_PAGES) {
    const filePath = path.join(ROOT, file);
    const original = fs.readFileSync(filePath, 'utf8');
    const usesCRLF = original.includes('\r\n');
    const normalized = original.replace(/\r\n/g, '\n');

    const navFindN = NAV_FIND.replace(/\r\n/g, '\n');
    const navCount = countOccurrences(normalized, navFindN);
    const footerFindN = FOOTER_FIND.replace(/\r\n/g, '\n');
    const footerCount = countOccurrences(normalized, footerFindN);

    if (navCount !== 1 || footerCount !== 1) {
      failed.push(`${file}: nav matches=${navCount}, footer matches=${footerCount} (expected 1 each)`);
      continue;
    }

    let updated = normalized
      .split(navFindN).join(NAV_REPLACE.replace(/\r\n/g, '\n'))
      .split(footerFindN).join(FOOTER_REPLACE.replace(/\r\n/g, '\n'));

    if (usesCRLF) updated = updated.replace(/\n/g, '\r\n');

    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`${file}: OK — nav + footer Blog link added.`);
    modified++;
  }

  if (failed.length) {
    console.error('\nFAILED to match on the following files (no changes written to these):');
    failed.forEach(f => console.error('  ' + f));
    process.exitCode = 1;
  }

  console.log(`\n${modified}/${ROOT_PAGES.length} files updated.`);
}

main();
