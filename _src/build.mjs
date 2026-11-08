// Genera el sitio estático a partir de _src/content.mjs.
// Uso:  node _src/build.mjs      (sin dependencias, Node 18+)
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, routes, ui, statement, bio, cv, series, maquinas } from './content.mjs';

// Una página por cada máquina activa: obra/maquinas/<id>/
const activas = maquinas.items.filter((m) => m.activa);
for (const m of activas) routes[`maq_${m.id}`] = { es: `obra/maquinas/${m.id}/`, en: `en/work/maquinas/${m.id}/` };

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['es', 'en'];
const BASE_PATH = new URL(site.url + '/').pathname; // p. ej. "/portafolio/"
const YEAR = new Date().getFullYear();
// Huella de cada archivo: cambia la URL cuando cambia el archivo, así el CDN y el navegador no sirven versiones viejas.
const v = (f) => createHash('sha1').update(readFileSync(join(ROOT, 'assets', f))).digest('hex').slice(0, 8);
const VER = { css: v('style.css'), js: v('main.js'), maq: v('maquinas.js') };

// ── utilidades ────────────────────────────────────────────────
const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const depthPrefix = (route) => '../'.repeat(route.split('/').filter(Boolean).length);
const abs = (route) => `${site.url}/${route}`;
const has = (p) => existsSync(join(ROOT, p));
const ratioLabel = (r) => r.replace('/', ':');

function write(route, html) {
  const out = join(ROOT, route, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

// ── piezas compartidas ────────────────────────────────────────
function head({ lang, key, title, description, prefix, jsonld }) {
  const r = routes[key];
  const ogImg = has(site.ogImage) ? `${site.url}/${site.ogImage}` : '';
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="${esc(site.name)}">
<link rel="canonical" href="${abs(r[lang])}">
<link rel="alternate" hreflang="es" href="${abs(r.es)}">
<link rel="alternate" hreflang="en" href="${abs(r.en)}">
<link rel="alternate" hreflang="x-default" href="${abs(r.es)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(r[lang])}">
<meta property="og:locale" content="${lang === 'es' ? 'es_MX' : 'en_US'}">
${ogImg ? `<meta property="og:image" content="${ogImg}">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="${esc(site.name)}">\n<meta name="twitter:card" content="summary_large_image">` : '<meta name="twitter:card" content="summary">'}
<meta name="theme-color" content="#f3f2ee">
<link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&family=Instrument+Serif:ital@0;1&display=swap">
<link rel="stylesheet" href="${prefix}assets/style.css?v=${VER.css}">
<script src="${prefix}assets/main.js?v=${VER.js}" defer></script>
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}
</head>`;
}

function header({ lang, key, prefix }) {
  const t = ui[lang];
  const other = lang === 'es' ? 'en' : 'es';
  const link = (k, label, hash = '') => {
    const cur = k === key || (k === 'home' && hash && series.some((s) => s.id === key)) || (k === 'maquinas' && key.startsWith('maq_'));
    return `<a href="${prefix}${routes[k][lang]}${hash}"${cur ? ' aria-current="page"' : ''}>${label}</a>`;
  };
  return `<a class="skip" href="#main">${t.skip}</a>
<header class="site-header">
  <a class="brand" href="${prefix}${routes.home[lang]}">${esc(site.name)}</a>
  <nav class="site-nav" aria-label="${lang === 'es' ? 'Principal' : 'Main'}">
    ${link('home', t.nav.work, '#obra')}
    ${link('maquinas', t.nav.maquinas)}
    ${link('about', t.nav.about)}
    ${link('cv', t.nav.cv)}
    ${link('contact', t.nav.contact)}
  </nav>
  <a class="lang" href="${prefix}${routes[key][other]}" hreflang="${other}" lang="${other}" title="${t.otherLangLabel}">${t.otherLang}</a>
</header>`;
}

function footer({ lang, key, prefix }) {
  const t = ui[lang];
  const other = lang === 'es' ? 'en' : 'es';
  return `<footer class="site-footer">
  <span>© ${YEAR} ${esc(site.name)}</span>
  <span>${t.rights}</span>
  <a href="${prefix}${routes[key][other]}" hreflang="${other}" lang="${other}">${ui[other].langName}</a>
</footer>
<dialog class="lightbox" aria-label="${lang === 'es' ? 'Visor de imagen' : 'Image viewer'}">
  <figure class="lightbox__fig"><img alt=""><figcaption></figcaption></figure>
  <button class="lightbox__btn lightbox__prev" type="button" aria-label="${t.prev}">←</button>
  <button class="lightbox__btn lightbox__next" type="button" aria-label="${t.next}">→</button>
  <button class="lightbox__btn lightbox__close" type="button" autofocus aria-label="${t.close}">✕</button>
</dialog>
</body>
</html>
`;
}

function page({ lang, key, title, description, body, jsonld, bodyClass = '' }) {
  const prefix = depthPrefix(routes[key][lang]);
  return `${head({ lang, key, title, description, prefix, jsonld })}
<body class="${bodyClass}">
${header({ lang, key, prefix })}
<main id="main">
${body(prefix)}
</main>
${footer({ lang, key, prefix })}`;
}

// Imagen con espacio reservado. Si el archivo no existe todavía,
// se ve un recuadro con el nombre sugerido (ver images/LEEME.md).
function media(file, ratio, alt, prefix, lang) {
  const src = `${prefix}images/${file}`;
  return `<img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async" onload="this.parentNode.classList.add('is-loaded')" onerror="this.parentNode.classList.add('is-missing')">
      <span class="ph" aria-hidden="true"><span class="ph__file">images/${file}</span><span class="ph__ratio">${ratioLabel(ratio)} · ${ui[lang].missing}</span></span>`;
}

const caption = (w, lang) => {
  const meta = [w.medium?.[lang], w.size].filter(Boolean).join(' · ');
  return { title: w.title[lang], year: w.year, meta };
};
const captionText = (c) => [c.title + (c.year ? `, ${c.year}` : ''), c.meta].filter(Boolean).join(' — ');

function workFigure(w, lang, prefix) {
  const c = caption(w, lang);
  return `<figure class="work" style="--r:${w.ratio}">
    <a class="media" href="${prefix}images/${w.file}" data-lightbox data-caption="${esc(captionText(c))}">
      ${media(w.file, w.ratio, `${c.title}${c.year ? `, ${c.year}` : ''}. ${c.meta}. ${site.name}`, prefix, lang)}
    </a>
    <figcaption><span class="work__title">${esc(c.title)}</span>${c.year ? `, ${esc(c.year)}` : ''}${c.meta ? `<span class="work__meta">${esc(c.meta)}</span>` : ''}</figcaption>
  </figure>`;
}

const personLd = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: abs(routes.home[lang]),
  jobTitle: ui[lang].role,
  birthDate: '1993',
  birthPlace: 'Nezahualcóyotl, Estado de México, México',
  homeLocation: ui[lang].location,
  sameAs: site.social.map((s) => s.url),
  description: site.seo[lang],
  knowsAbout: site.knowsAbout,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma de Querétaro' },
  ...(has(`images/${site.portrait.file}`) ? { image: `${site.url}/images/${site.portrait.file}` } : {}),
  ...(site.email ? { email: `mailto:${site.email}` } : {}),
});

// Datos estructurados de una serie: lista de obras (VisualArtwork).
const seriesLd = (s, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: `${s.title[lang]} — ${site.name}`,
  url: abs(routes[s.id][lang]),
  inLanguage: lang,
  author: { '@type': 'Person', name: site.name, url: abs(routes.home[lang]) },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: s.works.filter((w) => has(`images/${w.file}`)).map((w, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VisualArtwork',
        name: w.title[lang],
        ...(w.year ? { dateCreated: w.year } : {}),
        ...(w.medium?.[lang] ? { artMedium: w.medium[lang] } : {}),
        image: `${site.url}/images/${w.file}`,
        creator: { '@type': 'Person', name: site.name },
      },
    })),
  },
});

// ── páginas ───────────────────────────────────────────────────
function home(lang) {
  const t = ui[lang];
  const all = series.flatMap((s) => s.works.map((w) => ({ ...w, s })));
  return page({
    lang, key: 'home', bodyClass: 'is-home',
    title: site.name,
    description: site.seo[lang],
    jsonld: personLd(lang),
    body: (prefix) => `
<section class="hero" aria-label="${esc(site.name)}">
  <div class="ring" style="--n:${all.length}" data-maq-base="${maquinas.url}" data-maq-href="${prefix}${routes.maquinas[lang]}" data-maq-max="8">
    <div class="ring__track">
      ${all.map((w, i) => {
        const thumb = has(`images/miniaturas/${w.file}`) ? `miniaturas/${w.file}` : w.file;
        return `<a class="ring__item" style="--i:${i}" href="${prefix}${routes[w.s.id][lang]}" tabindex="-1" aria-hidden="true">
        <span class="media">${media(thumb, '1/1', '', prefix, lang).replace(/<span class="ph__file">.*?<\/span>/, `<span class="ph__file">${String(i + 1).padStart(2, '0')}</span>`)}</span>
      </a>`;
      }).join('\n      ')}
    </div>
    <div class="hero__text">
      <h1 class="hero__name">Diego<br>Deshuesado</h1>
    </div>
  </div>
</section>

<section class="index" id="obra" aria-labelledby="index-title">
  <h2 class="label" id="index-title">${t.index}</h2>
  <ol class="index__list">
    <li>
      <a class="index__row" href="${prefix}${routes.maquinas[lang]}">
        <span class="index__num">${maquinas.num}</span>
        <span class="index__title">${maquinas.title[lang]}</span>
        <span class="index__meta"><span>${maquinas.subtitle[lang]}</span><span>${maquinas.years}</span><span>${t.maq.machines(maquinas.items.length)}</span></span>
        <span class="index__peek index__peek--folder" aria-hidden="true">${FOLDER}</span>
      </a>
    </li>
    ${series.map((s) => `<li>
      <a class="index__row" href="${prefix}${routes[s.id][lang]}">
        <span class="index__num">${s.num}</span>
        <span class="index__title">${s.title[lang]}</span>
        <span class="index__meta"><span>${s.subtitle[lang]}</span><span>${s.years}</span><span>${t.works(s.works.length)}</span></span>
        <span class="index__peek media" style="--r:${s.works[0].ratio}">${media(s.works[0].file, s.works[0].ratio, '', prefix, lang)}</span>
      </a>
    </li>`).join('\n    ')}
  </ol>
</section>

<section class="intro" aria-labelledby="intro-title">
  <h2 class="label" id="intro-title">${t.statement}</h2>
  <p class="intro__text">${statement[lang][0]}</p>
  <a class="arrow-link" href="${prefix}${routes.about[lang]}">${t.readMore} →</a>
</section>`,
  });
}

function seriesPage(s, lang) {
  const t = ui[lang];
  const idx = series.indexOf(s);
  const next = series[(idx + 1) % series.length];
  return page({
    lang, key: s.id,
    title: `${s.title[lang]} (${s.years}) — ${site.name}`,
    description: `${s.title[lang]}, ${s.years}. ${s.text[lang][0]}`.slice(0, 158),
    jsonld: seriesLd(s, lang),
    body: (prefix) => `
<article class="series">
  <header class="series__head">
    <p class="series__num">${s.num}</p>
    <h1 class="series__title">${s.title[lang]}</h1>
    <dl class="series__meta">
      <div><dt class="sr">${lang === 'es' ? 'Serie' : 'Series'}</dt><dd>${s.subtitle[lang]}</dd></div>
      <div><dt class="sr">${lang === 'es' ? 'Año' : 'Year'}</dt><dd>${s.years}</dd></div>
      <div><dt class="sr">${lang === 'es' ? 'Obras' : 'Works'}</dt><dd>${t.works(s.works.length)}</dd></div>
    </dl>
    <div class="series__text">${s.text[lang].map((p) => `<p>${p}</p>`).join('')}</div>
  </header>
  <div class="gallery">
    ${s.works.map((w) => workFigure(w, lang, prefix)).join('\n    ')}
  </div>
  <nav class="series__next" aria-label="${t.nextSeries}">
    <a href="${prefix}${routes.home[lang]}#obra">← ${t.allWork}</a>
    <a class="series__next-link" href="${prefix}${routes[next.id][lang]}"><span class="label">${t.nextSeries}</span><span class="series__next-title">${next.num} ${next.title[lang]} →</span></a>
  </nav>
</article>`,
  });
}

function about(lang) {
  const t = ui[lang];
  return page({
    lang, key: 'about',
    title: `${t.statement} / ${t.bio} — ${site.name}`,
    description: statement[lang][0].slice(0, 158),
    jsonld: personLd(lang),
    body: (prefix) => `
<article class="about">
  <section class="about__statement" aria-labelledby="st">
    <h1 class="label" id="st">${t.statement}</h1>
    ${statement[lang].map((p) => `<p>${p}</p>`).join('\n    ')}
  </section>
  <section class="about__bio" aria-labelledby="bio">
    <h2 class="label" id="bio">${t.bio}</h2>
    <div class="about__cols">
      <figure class="about__portrait" style="--r:${site.portrait.ratio}">
        <span class="media">${media(site.portrait.file, site.portrait.ratio, lang === 'es' ? `Autorretrato (collage), ${site.name}` : `Self-portrait (collage), ${site.name}`, prefix, lang)}</span>
      </figure>
      <div class="about__text">${bio[lang].map((p) => `<p>${p}</p>`).join('')}
        <p><a class="arrow-link" href="${prefix}${routes.cv[lang]}">CV →</a></p>
      </div>
    </div>
  </section>
</article>`,
  });
}

function cvPage(lang) {
  const t = ui[lang];
  const pdf = has(site.cvPdf);
  return page({
    lang, key: 'cv',
    title: `CV — ${site.name}`,
    description: lang === 'es'
      ? `Currículum de ${site.name}: formación, experiencia, exposiciones colectivas y prensa.`
      : `CV of ${site.name}: education, experience, group exhibitions and press.`,
    body: (prefix) => `
<article class="cv">
  <header class="cv__head">
    <h1 class="page-title">CV</h1>
    <p class="cv__who">${esc(site.name)} · Nezahualcóyotl, ${lang === 'es' ? 'México' : 'Mexico'}, 1993<br>${t.basedIn} ${t.location}</p>
    <p class="cv__actions">
      ${pdf ? `<a class="btn" href="${prefix}${site.cvPdf}" download>${t.downloadCv}</a>` : ''}
      <button class="btn btn--ghost" type="button" data-print>${t.printCv}</button>
    </p>
  </header>
  ${cv.map((sec) => `<section class="cv__sec">
    <h2 class="label">${sec.title[lang]}</h2>
    <ul class="cv__list">
      ${sec.items.map((it) => `<li><span class="cv__year">${lang === 'en' && it.yearEn ? it.yearEn : it.year}</span><span>${it.url ? `<a href="${it.url}" rel="noopener" target="_blank">${it[lang]} ↗</a>` : it[lang]}</span></li>`).join('\n      ')}
    </ul>
  </section>`).join('\n  ')}
</article>`,
  });
}

function contact(lang) {
  const t = ui[lang];
  return page({
    lang, key: 'contact',
    title: `${t.nav.contact} — ${site.name}`,
    description: `${t.nav.contact}: ${site.name}. ${t.contactIntro}`,
    body: () => `
<article class="contact">
  <h1 class="page-title">${t.nav.contact}</h1>
  <p class="contact__intro">${t.contactIntro}</p>
  <dl class="contact__list">
    ${site.email ? `<div><dt class="label">${t.emailLabel}</dt><dd><a class="contact__big" href="mailto:${site.email}">${site.email}</a></dd></div>` : ''}
    <div><dt class="label">${t.socialLabel}</dt><dd>${site.social.map((s) => `<a class="contact__big" href="${s.url}" rel="noopener me" target="_blank">${esc(s.handle)} <small>${esc(s.label)} ↗</small></a>`).join('<br>')}</dd></div>
  </dl>
</article>`,
  });
}

function notFound() {
  const p = BASE_PATH;
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>404 — ${esc(site.name)}</title>
<meta name="robots" content="noindex">
<link rel="icon" href="${p}assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;700;800&display=swap">
<link rel="stylesheet" href="${p}assets/style.css?v=${VER.css}">
</head>
<body>
<header class="site-header"><a class="brand" href="${p}">${esc(site.name)}</a></header>
<main id="main" class="notfound">
  <h1 class="page-title">404</h1>
  <p>${ui.es.notFoundText}<br><span lang="en">${ui.en.notFoundText}</span></p>
  <p><a class="arrow-link" href="${p}">${ui.es.backHome} →</a> &nbsp; <a class="arrow-link" lang="en" href="${p}en/">${ui.en.backHome} →</a></p>
</main>
</body>
</html>
`;
}

// ── _máquinas ─────────────────────────────────────────────────
const FOLDER = `<svg class="folder" viewBox="0 0 150 104" aria-hidden="true"><path d="M2 16 V102 H148 V16 H62 L50 2 H2 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M2 16 H62" stroke="currentColor" stroke-width="2.2"/></svg>`;
const plain = (h) => h.replace(/<br>/g, '').replace(/-(?=_|$)|-(?=[a-záéíóú])/g, '');

function folders(lang, prefix) {
  const t = ui[lang].maq;
  return `<div class="carpetas">
    ${maquinas.items.map((m) => {
      const tag = m.activa ? 'a' : 'div';
      const href = m.activa ? ` href="${prefix}${routes[`maq_${m.id}`][lang]}"` : '';
      return `<${tag} class="carpeta${m.activa ? '' : ' carpeta--off'}"${href}>
      ${FOLDER}<span class="carpeta__nombre">${m.nombre}</span>
      <span class="carpeta__cedula">${lang === 'es' ? 'operación' : 'operation'}:/&lt; ${m.op[lang]}</span>
      <span class="carpeta__estado">${m.activa ? t.open : t.soon}</span>
    </${tag}>`;
    }).join('\n    ')}
  </div>`;
}

const maquinasLd = (lang) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: '_máquinas',
  url: abs(routes.maquinas[lang]),
  inLanguage: lang,
  dateCreated: '2019',
  description: maquinas.text[lang][0],
  creator: { '@type': 'Person', name: site.name, url: abs(routes.home[lang]) },
  license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  hasPart: activas.map((m) => ({ '@type': 'CreativeWork', name: plain(m.nombre), url: abs(routes[`maq_${m.id}`][lang]), description: m.op[lang] })),
});

function maquinasPage(lang) {
  const t = ui[lang];
  const M = maquinas;
  return page({
    lang, key: 'maquinas',
    title: `_máquinas (${M.years}) — ${site.name}`,
    description: M.text[lang][0].slice(0, 158),
    jsonld: maquinasLd(lang),
    body: (prefix) => `
<article class="series series--maq">
  <header class="series__head">
    <p class="series__num">${M.num}</p>
    <h1 class="series__title">${M.title[lang]}</h1>
    <dl class="series__meta">
      <div><dt class="sr">${lang === 'es' ? 'Serie' : 'Series'}</dt><dd>${M.subtitle[lang]}</dd></div>
      <div><dt class="sr">${lang === 'es' ? 'Año' : 'Year'}</dt><dd>${M.years}</dd></div>
      <div><dt class="sr">${lang === 'es' ? 'Máquinas' : 'Machines'}</dt><dd>${t.maq.machines(M.items.length)}</dd></div>
    </dl>
    <div class="series__text">
      ${M.text[lang].map((p) => `<p>${p}</p>`).join('\n      ')}
      <p class="maq__ficha">${M.ficha[lang].join('<br>')}</p>
      <a class="btn" href="${M.url}/">${t.maq.participate} →</a>
    </div>
  </header>
  ${folders(lang, prefix)}
  <nav class="series__next" aria-label="${t.nextSeries}">
    <a href="${prefix}${routes.home[lang]}#obra">← ${t.allWork}</a>
    <a class="series__next-link" href="${prefix}${routes[series[0].id][lang]}"><span class="label">${t.nextSeries}</span><span class="series__next-title">${series[0].num} ${series[0].title[lang]} →</span></a>
  </nav>
</article>`,
  });
}

function maquinaPage(m, lang) {
  const t = ui[lang];
  const key = `maq_${m.id}`;
  const idx = activas.indexOf(m);
  const next = activas[(idx + 1) % activas.length];
  const name = plain(m.nombre);
  return page({
    lang, key,
    title: `${name} — _máquinas — ${site.name}`,
    description: `${name}: ${m.op[lang]} ${m.desc[lang]}`.slice(0, 158),
    jsonld: {
      '@context': 'https://schema.org', '@type': 'CreativeWork', name, url: abs(routes[key][lang]), inLanguage: lang,
      description: m.op[lang], isPartOf: { '@type': 'CreativeWork', name: '_máquinas', url: abs(routes.maquinas[lang]) },
      creator: { '@type': 'Person', name: site.name }, license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    },
    body: (prefix) => `
<article class="series series--maq">
  <header class="series__head">
    <p class="series__num"><a href="${prefix}${routes.maquinas[lang]}">_máquinas</a> / ${String(maquinas.items.indexOf(m) + 1).padStart(2, '0')}</p>
    <h1 class="series__title maq__title">${name}</h1>
    <dl class="series__meta">
      <div><dt class="label">${t.maq.materials}</dt><dd>${m.materiales[lang]}</dd></div>
      <div><dt class="label">${t.maq.authors}</dt><dd>${(m.credito || { es: site.name, en: site.name })[lang]}</dd></div>
      <div><dt class="label">${lang === 'es' ? 'Licencia' : 'Licence'}</dt><dd>CC BY-NC-SA 4.0</dd></div>
    </dl>
    <div class="series__text">
      <p class="maq__op"><span class="maq__op-label">${lang === 'es' ? 'operación' : 'operation'}:/&lt;</span> ${m.op[lang]}</p>
      <p>${m.desc[lang]}</p>
      <a class="btn" href="${maquinas.url}/${m.id}.html">${t.maq.make} →</a>
    </div>
  </header>
  <section class="maq__galeria" aria-labelledby="gal-title">
    <h2 class="label" id="gal-title">${t.maq.gallery}</h2>
    <div class="gallery" data-maquina="${m.id}" data-base="${maquinas.url}" data-lang="${lang}"
      data-empty="${esc(t.maq.empty)}" data-error="${esc(t.maq.error)}" data-make="${esc(t.maq.make)}" data-gallery="${esc(t.maq.siteGallery)}">
      <p class="maq__estado">${t.maq.loading}</p>
    </div>
  </section>
  <nav class="series__next" aria-label="${t.nextSeries}">
    <a href="${prefix}${routes.maquinas[lang]}">← ${t.maq.back}</a>
    <a class="series__next-link" href="${prefix}${routes[`maq_${next.id}`][lang]}"><span class="label">${t.maq.nextMachine}</span><span class="series__next-title maq__next">${plain(next.nombre)} →</span></a>
  </nav>
</article>
<script src="${prefix}assets/maquinas.js?v=${VER.maq}" defer></script>`,
  });
}

function sitemap() {
  const urls = Object.values(routes).flatMap((r) =>
    LANGS.map((l) => `  <url>
    <loc>${abs(r[l])}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(r.es)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(r.en)}"/>
  </url>`));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
}

// ── construir ─────────────────────────────────────────────────
// Borra solo lo que este script genera (nunca images/, assets/ ni files/).
for (const p of ['obra', 'en', 'sobre', 'cv', 'contacto', 'index.html', '404.html', 'sitemap.xml', 'robots.txt']) {
  rmSync(join(ROOT, p), { recursive: true, force: true });
}

for (const lang of LANGS) {
  write(routes.home[lang], home(lang));
  write(routes.maquinas[lang], maquinasPage(lang));
  for (const m of activas) write(routes[`maq_${m.id}`][lang], maquinaPage(m, lang));
  for (const s of series) write(routes[s.id][lang], seriesPage(s, lang));
  write(routes.about[lang], about(lang));
  write(routes.cv[lang], cvPage(lang));
  write(routes.contact[lang], contact(lang));
}
writeFileSync(join(ROOT, '404.html'), notFound());
writeFileSync(join(ROOT, 'sitemap.xml'), sitemap());
writeFileSync(join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`✓ Sitio generado: ${Object.keys(routes).length * LANGS.length} páginas + 404, sitemap y robots.`);
