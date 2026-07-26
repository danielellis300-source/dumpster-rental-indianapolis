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

function resolveTarget(fromFile, href) {
  // fromFile is absolute path; href is a relative link found in that file
  const clean = href.split('#')[0];
  if (clean === '') return null; // pure same-page anchor, nothing to resolve
  const dir = path.dirname(fromFile);
  return path.resolve(dir, clean);
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

function main() {
  const files = [
    ...ROOT_PAGES.map(f => path.join(ROOT, f)),
    ...fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.html')).map(f => path.join(BLOG_DIR, f)),
  ];

  for (const f of files) {
    checkLinks(f);
    tagBalance(f);
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
