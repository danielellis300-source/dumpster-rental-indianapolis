// Quality checks for the blog: internal link resolution + balanced tag counts.
// Run: node scripts/quality-check.js

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

const ROOT_PAGES = [
  'index.html', 'carmel.html', 'fishers.html', 'zionsville.html', 'westfield.html',
  'noblesville.html', 'avon.html', 'greenwood.html', 'brownsburg.html', 'plainfield.html',
  'lawrence.html', 'beech-grove.html', 'speedway.html', 'lebanon.html',
];

let errors = 0;

const HAS_EXTENSION_RE = /\.[a-z0-9]{2,4}$/i;

function resolveTarget(fromFile, href) {
  // fromFile is absolute path; href is a link found in that file. The site
  // now uses clean, root-relative URLs (e.g. "/carmel", "/blog/some-slug",
  // "/blog/") that the host maps onto physical "name.html" files on disk —
  // so a clean URL has to be mapped back to its .html file to verify it
  // actually exists.
  const clean = href.split('#')[0];
  if (clean === '') return null; // pure same-page anchor, nothing to resolve

  let target;
  if (clean.startsWith('/')) {
    target = path.join(ROOT, clean);
  } else {
    target = path.resolve(path.dirname(fromFile), clean);
  }

  if (HAS_EXTENSION_RE.test(clean)) return target; // real asset (.css, .js, .xml, .txt…)
  if (clean.endsWith('/') || clean === '') return path.join(target, 'index.html');
  return `${target}.html`;
}

function checkLinks(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const hrefRe = /href="([^"]+)"/g;
  let m;
  while ((m = hrefRe.exec(html))) {
    const href = m[1];
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('tel:') || href.startsWith('mailto:')) continue;
    if (href.startsWith('#')) continue; // pure anchor on same page
    const target = resolveTarget(filePath, href);
    if (target === null) continue;
    if (!fs.existsSync(target)) {
      console.error(`BROKEN LINK: ${path.relative(ROOT, filePath)} -> "${href}" (resolved: ${path.relative(ROOT, target)})`);
      errors++;
    }
  }
}

function tagBalance(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  for (const tag of ['div', 'section', 'header', 'footer', 'ul', 'a']) {
    const openRe = new RegExp(`<${tag}(\\s[^>]*)?>`, 'g');
    const closeRe = new RegExp(`</${tag}>`, 'g');
    const opens = (html.match(openRe) || []).length;
    const closes = (html.match(closeRe) || []).length;
    if (opens !== closes) {
      console.error(`UNBALANCED <${tag}>: ${path.relative(ROOT, filePath)} — ${opens} open vs ${closes} close`);
      errors++;
    }
  }
}

function checkHonesty(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const prohibited = [
    /aggregateRating/i,
    /ratingValue/i,
    /reviewCount/i,
    /Years in Business/i,
    /Dumpsters Delivered/i,
    /Google Rating/i,
    />\s*5\+\s*</i,
    />\s*1,000\+\s*</i,
    />\s*great\s+[^<]+</i,
  ];

  for (const pattern of prohibited) {
    if (pattern.test(html)) {
      console.error(`PROHIBITED TRUST SIGNAL: ${path.relative(ROOT, filePath)} matches ${pattern}`);
      errors++;
    }
  }
}

function main() {
  const files = [
    ...ROOT_PAGES.map(f => path.join(ROOT, f)),
    ...fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.html')).map(f => path.join(BLOG_DIR, f)),
  ];

  for (const f of files) {
    checkLinks(f);
    tagBalance(f);
    if (ROOT_PAGES.some(page => path.join(ROOT, page) === f)) checkHonesty(f);
  }

  console.log(`\nChecked ${files.length} files.`);
  if (errors === 0) {
    console.log('All checks passed: no broken internal links, all tags balanced.');
  } else {
    console.error(`${errors} issue(s) found.`);
    process.exitCode = 1;
  }
}

main();
