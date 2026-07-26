// Generates blog/index.html + one HTML file per article from scripts/blog-data.js.
// Run: node scripts/generate-blog.js

const fs = require('fs');
const path = require('path');
const { articles, CATEGORIES } = require('./blog-data.js');

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

const SITE = {
  businessName: 'Indianapolis Dumpster Rental Co',
  phone: '(317) 537-0940',
  tel: '3175370940',
  email: 'crossroadleads@gmail.com',
  domain: 'https://dumpsterrentalindianapolis.org',
};

const CITIES = [
  { file: 'index.html', name: 'Indianapolis' },
  { file: 'carmel.html', name: 'Carmel' },
  { file: 'fishers.html', name: 'Fishers' },
  { file: 'zionsville.html', name: 'Zionsville' },
  { file: 'westfield.html', name: 'Westfield' },
  { file: 'noblesville.html', name: 'Noblesville' },
  { file: 'avon.html', name: 'Avon' },
  { file: 'greenwood.html', name: 'Greenwood' },
  { file: 'brownsburg.html', name: 'Brownsburg' },
  { file: 'plainfield.html', name: 'Plainfield' },
  { file: 'lawrence.html', name: 'Lawrence' },
  { file: 'beech-grove.html', name: 'Beech Grove' },
  { file: 'speedway.html', name: 'Speedway' },
  { file: 'lebanon.html', name: 'Lebanon' },
];

const byslug = new Map(articles.map(a => [a.slug, a]));

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function fmtDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

function applyTokens(html) {
  return html
    .replace(/\{\{PHONE\}\}/g, SITE.phone)
    .replace(/\{\{TEL\}\}/g, SITE.tel)
    .replace(/\{\{BIZ\}\}/g, SITE.businessName);
}

function header(depth) {
  const prefix = depth === 'blog' ? '../' : '';
  return `  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">Indianapolis<span>Dumpster</span> Rental Co</div>
      <div class="header-right">
        <div class="header-phone">Call us: <a href="tel:{{TEL}}">{{PHONE}}</a></div>
        <a href="${prefix}index.html#quote" class="btn btn-primary">Free Quote</a>
        <div class="menu-wrap">
          <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="menuDropdown">&#9776; Menu</button>
          <div class="menu-dropdown" id="menuDropdown" role="menu">
            <a href="${prefix}index.html">Home</a>
            <a href="${prefix}index.html#services">Services</a>
            <a href="${prefix}index.html#areas">Service Areas</a>
            <a href="${prefix}blog/index.html">Blog</a>
            <a href="${prefix}index.html#quote">Get a Quote</a>
          </div>
        </div>
      </div>
    </div>
  </header>`;
}

function breadcrumb(items) {
  // items: [{label, href?}] last item has no href (current)
  const parts = items.map((it, i) => {
    if (it.href) return `<a href="${it.href}">${escapeHtml(it.label)}</a><span class="sep">›</span>`;
    return `<span class="current">${escapeHtml(it.label)}</span>`;
  }).join('\n      ');
  return `  <div class="breadcrumb">
    <div class="container breadcrumb-inner">
      ${parts}
    </div>
  </div>`;
}

function footer(depth) {
  const prefix = depth === 'blog' ? '../' : '';
  const cityLinks = CITIES.map(c => `            <li><a href="${prefix}${c.file}">${c.name}</a></li>`).join('\n');
  return `  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">

        <div>
          <div class="footer-brand">Indianapolis<span>Dumpster</span> Rental Co</div>
          <div class="footer-nap">
            <strong style="color:#ddd;">Indianapolis, Indiana</strong><br>
            Phone: <a href="tel:{{TEL}}">{{PHONE}}</a><br>
            Email: <a href="mailto:{{EMAIL}}">{{EMAIL}}</a><br>
            Serving Marion County, Hamilton County &amp; surrounding areas
          </div>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="${prefix}index.html#services">10-Yard Dumpster Rental</a></li>
            <li><a href="${prefix}index.html#services">20-Yard Dumpster Rental</a></li>
            <li><a href="${prefix}index.html#services">30-Yard Dumpster Rental</a></li>
            <li><a href="${prefix}index.html#services">40-Yard Dumpster Rental</a></li>
            <li><a href="${prefix}index.html#services">Yard Waste Removal</a></li>
            <li><a href="${prefix}index.html#services">Construction Debris Removal</a></li>
            <li><a href="${prefix}blog/index.html">Blog</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Service Areas</h4>
          <ul class="footer-links">
${cityLinks}
          </ul>
        </div>

      </div>
      <div class="footer-bottom" style="color:#ddd;">
        &copy; 2025 Indianapolis Dumpster Rental Co. All rights reserved.
      </div>
    </div>
  </footer>

  <script>
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    (function(){
      var btn = document.getElementById('menuBtn');
      var drop = document.getElementById('menuDropdown');
      if(!btn) return;
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var open = drop.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function(){
        drop.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    })();
  </script>`;
}

function headBoilerplate({ title, description, canonical, ogTitle, ogDescription }) {
  return `  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(ogDescription)}" />

  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="article" />
  <meta name="geo.region" content="US-IN" />
  <meta name="geo.placename" content="Indianapolis" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../assets/style.css" />`;
}

function postCard(a, prefix) {
  return `<a href="${prefix}${a.slug}.html" class="post-card">
          <span class="post-card-category">${escapeHtml(a.category)}</span>
          <h3>${escapeHtml(a.title)}</h3>
          <p>${escapeHtml(a.excerpt)}</p>
          <div class="post-card-meta"><span>${fmtDate(a.publishDate)}</span><span>&middot;</span><span>${a.readTimeMin} min read</span></div>
          <span class="post-card-readmore">Read More &rarr;</span>
        </a>`;
}

function articleCta() {
  return `<div class="article-cta">
        <h3>Ready to Book Your Dumpster?</h3>
        <p>Flat-rate pricing, same-day and next-day delivery across Indianapolis and the surrounding suburbs. No hidden fees, ever.</p>
        <div class="cta-actions">
          <a href="tel:{{TEL}}" class="btn btn-white">Call {{PHONE}}</a>
          <a href="../index.html#quote" class="btn btn-outline">Request Online Quote</a>
        </div>
      </div>`;
}

function articleBody(article) {
  let out = `<p>${article.intro}</p>\n`;
  article.sections.forEach((sec, i) => {
    out += `<h2>${sec.h2}</h2>\n`;
    out += sec.html.map(h => h).join('\n') + '\n';
    if (i === article.ctaAfterSection) {
      out += articleCta() + '\n';
    }
  });
  return out;
}

function relatedSection(article) {
  const related = article.relatedSlugs.map(s => byslug.get(s)).filter(Boolean);
  const cards = related.map(a => postCard(a, '')).join('\n        ');
  const sitePages = (article.relatedSitePages || []).map(p => `<a href="${p.href}">${escapeHtml(p.label)}</a>`).join(', ');
  return `  <section class="section related-posts">
    <div class="container">
      <h2 class="section-title" style="font-size:clamp(1.3rem,2.6vw,1.7rem)">Related Articles</h2>
      <div class="blog-grid">
        ${cards}
      </div>
      ${sitePages ? `<p style="margin-top:32px; text-align:center; font-size:.9rem; color:#718096;">Also see: ${sitePages}</p>` : ''}
    </div>
  </section>`;
}

function blogPostingSchema(article, canonical) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': { '@type': 'WebPage', '@id': canonical },
    'headline': article.title,
    'description': article.metaDescription,
    'datePublished': article.publishDate,
    'dateModified': article.publishDate,
    'author': { '@type': 'Organization', 'name': SITE.businessName, 'url': `${SITE.domain}/` },
    'publisher': {
      '@type': 'Organization',
      'name': SITE.businessName,
      'url': `${SITE.domain}/`,
    },
  };
  return JSON.stringify(schema, null, 2);
}

function breadcrumbSchema(items) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((it, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': it.label,
      'item': it.url,
    })),
  };
  return JSON.stringify(schema, null, 2);
}

function articlePage(article) {
  const canonical = `${SITE.domain}/blog/${article.slug}.html`;
  const bc = [
    { label: 'Home', href: '../index.html', url: `${SITE.domain}/` },
    { label: 'Blog', href: 'index.html', url: `${SITE.domain}/blog/index.html` },
    { label: article.title, url: canonical },
  ];

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${headBoilerplate({
    title: `${article.metaTitle}`,
    description: article.metaDescription,
    canonical,
    ogTitle: article.metaTitle,
    ogDescription: article.metaDescription,
  })}

  <script type="application/ld+json">
${blogPostingSchema(article, canonical)}
  </script>
  <script type="application/ld+json">
${breadcrumbSchema(bc)}
  </script>
</head>
<body>

${header('blog')}

${breadcrumb(bc.map(b => ({ label: b.label, href: b.href })))}

  <section class="section article-header">
    <div class="container">
      <span class="post-card-category">${escapeHtml(article.category)}</span>
      <h1 class="article-title">${escapeHtml(article.title)}</h1>
      <div class="article-meta">
        <span>${fmtDate(article.publishDate)}</span>
        <span>&middot;</span>
        <span>${article.readTimeMin} min read</span>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="container">
      <div class="article-body">
${articleBody(article)}
      </div>
    </div>
  </section>

${relatedSection(article)}

${footer('blog')}

</body>
</html>
`;
  return applyTokens(html.replace(/\{\{EMAIL\}\}/g, SITE.email));
}

function blogIndexPage() {
  const canonical = `${SITE.domain}/blog/index.html`;
  const sorted = [...articles].sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
  const bc = [
    { label: 'Home', href: '../index.html', url: `${SITE.domain}/` },
    { label: 'Blog', url: canonical },
  ];
  const cards = sorted.map(a => postCard(a, '')).join('\n        ');
  const pills = CATEGORIES.map(c => `<span class="area-pill">${escapeHtml(c)}</span>`).join('\n          ');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${headBoilerplate({
    title: 'Dumpster Rental Tips & Guides | Indianapolis Dumpster Rental Co Blog',
    description: 'Pricing guides, local regulations, seasonal cleanout tips, and advice for choosing a dumpster rental company in Indianapolis and the surrounding suburbs.',
    canonical,
    ogTitle: 'Indianapolis Dumpster Rental Co Blog',
    ogDescription: 'Pricing guides, local regulations, and seasonal cleanout tips for Indianapolis and the surrounding suburbs.',
  })}
</head>
<body>

${header('blog')}

${breadcrumb(bc.map(b => ({ label: b.label, href: b.href })))}

  <section class="section blog-intro text-center">
    <div class="container">
      <h1 class="section-title">The Dumpster Rental Blog</h1>
      <p class="section-sub">Pricing guides, local regulations, seasonal tips, and straight answers for Indianapolis-area homeowners, contractors, and property managers.</p>
      <div class="category-filter-row">
        ${pills}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="blog-grid">
        ${cards}
      </div>
    </div>
  </section>

${footer('blog')}

</body>
</html>
`;
  return applyTokens(html.replace(/\{\{EMAIL\}\}/g, SITE.email));
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  let count = 0;
  for (const article of articles) {
    const html = articlePage(article);
    fs.writeFileSync(path.join(BLOG_DIR, `${article.slug}.html`), html, 'utf8');
    count++;
  }
  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), blogIndexPage(), 'utf8');
  console.log(`Generated ${count} article pages + blog/index.html (${count + 1} files total).`);
}

main();
