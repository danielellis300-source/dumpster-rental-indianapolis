// Generates sitemap.xml covering all root pages + blog index + blog articles.
// Run: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');
const { articles } = require('./blog-data.js');

const ROOT = path.join(__dirname, '..');
const DOMAIN = 'https://dumpsterrentalindianapolis.org';

const ROOT_PAGES = [
  { file: 'index.html', priority: '1.0', changefreq: 'weekly' },
  { file: 'carmel.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'fishers.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'zionsville.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'westfield.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'noblesville.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'avon.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'greenwood.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'brownsburg.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'plainfield.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'lawrence.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'beech-grove.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'speedway.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'lebanon.html', priority: '0.8', changefreq: 'monthly' },
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
    entries.push(url(`${DOMAIN}/${p.file}`, today, p.changefreq, p.priority));
  }

  entries.push(url(`${DOMAIN}/blog/index.html`, today, 'weekly', '0.7'));

  for (const a of articles) {
    entries.push(url(`${DOMAIN}/blog/${a.slug}.html`, a.publishDate, 'monthly', '0.6'));
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
