// One-time migration: convert internal links + canonical/og:url + schema URLs
// on the 14 existing root pages from ".html" file paths to the clean,
// root-relative URLs the host (Cloudflare) actually serves as 200 — e.g.
// "carmel.html" -> "/carmel", "index.html" -> "/". Fixes Search Console's
// "Page with redirect" flag, which was caused by every internal link/canonical
// tag/sitemap entry pointing at a URL that 308-redirects to its clean form.
//
// Find/replace only, normalizes CRLF for matching, writes back CRLF.
// Run: node scripts/clean-urls-root-pages.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOMAIN = 'https://dumpsterrentalindianapolis.org';

const CITIES = [
  'carmel', 'fishers', 'zionsville', 'westfield', 'noblesville', 'avon',
  'greenwood', 'brownsburg', 'plainfield', 'lawrence', 'beech-grove',
  'speedway', 'lebanon',
];

const ROOT_PAGES = ['index.html', ...CITIES.map(c => `${c}.html`)];

function migrate(content) {
  let out = content;

  // Absolute domain URLs: https://…/CITY.html(#business)? -> https://…/CITY
  for (const c of CITIES) {
    out = out.split(`${DOMAIN}/${c}.html`).join(`${DOMAIN}/${c}`);
  }

  // Relative internal links: href="CITY.html" -> href="/CITY"
  for (const c of CITIES) {
    out = out.split(`"${c}.html"`).join(`"/${c}"`);
  }

  // Home link: href="index.html" -> href="/"
  out = out.split(`"index.html"`).join(`"/"`);

  // Blog link: href="blog/index.html" -> href="/blog/"
  out = out.split(`"blog/index.html"`).join(`"/blog/"`);

  return out;
}

function main() {
  let changed = 0;
  for (const file of ROOT_PAGES) {
    const filePath = path.join(ROOT, file);
    const original = fs.readFileSync(filePath, 'utf8');
    const usesCRLF = original.includes('\r\n');
    const normalized = original.replace(/\r\n/g, '\n');

    const migrated = migrate(normalized);
    if (migrated === normalized) {
      console.log(`${file}: no changes matched (unexpected — check manually)`);
      continue;
    }

    const final = usesCRLF ? migrated.replace(/\n/g, '\r\n') : migrated;
    fs.writeFileSync(filePath, final, 'utf8');
    console.log(`${file}: OK — converted to clean URLs.`);
    changed++;
  }
  console.log(`\n${changed}/${ROOT_PAGES.length} files updated.`);
}

main();
