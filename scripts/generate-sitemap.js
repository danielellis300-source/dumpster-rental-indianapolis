// Generates sitemap.xml covering all root pages + blog index + blog articles.
// Run: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');
const { articles } = require('./blog-data.js');

const ROOT = path.join(__dirname, '..');
const DOMAIN = 'https://dumpsterrentalindianapolis.org';

// Clean, root-relative paths — matches what the host (Cloudflare) actually
// serves as 200 for every page (it 308-redirects the .html form to these).
const ROOT_PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/carmel', priority: '0.8', changefreq: 'monthly' },
  { path: '/fishers', priority: '0.8', changefreq: 'monthly' },
  { path: '/zionsville', priority: '0.8', changefreq: 'monthly' },
  { path: '/westfield', priority: '0.8', changefreq: 'monthly' },
  { path: '/noblesville', priority: '0.8', changefreq: 'monthly' },
  { path: '/avon', priority: '0.8', changefreq: 'monthly' },
  { path: '/greenwood', priority: '0.8', changefreq: 'monthly' },
  { path: '/brownsburg', priority: '0.8', changefreq: 'monthly' },
  { path: '/plainfield', priority: '0.8', changefreq: 'monthly' },
  { path: '/lawrence', priority: '0.8', changefreq: 'monthly' },
  { path: '/beech-grove', priority: '0.8', changefreq: 'monthly' },
  { path: '/speedway', priority: '0.8', changefreq: 'monthly' },
  { path: '/lebanon', priority: '0.8', changefreq: 'monthly' },
];

function url(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [];

  for (const p of ROOT_PAGES) {
    entries.push(url(`${DOMAIN}${p.path}`, today, p.changefreq, p.priority));
  }

  entries.push(url(`${DOMAIN}/blog/`, today, 'weekly', '0.7'));

  for (const a of articles) {
    entries.push(url(`${DOMAIN}/blog/${a.slug}`, a.publishDate, 'monthly', '0.6'));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
  console.log(`sitemap.xml written with ${ROOT_PAGES.length + 1 + articles.length} URLs.`);

  const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots, 'utf8');
  console.log('robots.txt written.');
}

main();
