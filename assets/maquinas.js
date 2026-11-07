// Galería en vivo de una máquina: lee las piezas aprobadas del sitio de _máquinas.
(() => {
  const box = document.querySelector('[data-maquina]');
  if (!box) return;
  const { maquina, base, empty, error, make, gallery } = box.dataset;
  const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const estado = (txt, link) => {
    box.innerHTML = `<p class="maq__estado">${esc(txt)}</p>` +
      (link ? `<a class="btn" href="${link}">${esc(make)} →</a>` : '');
  };
  fetch(`${base}/envios/index.json`, { cache: 'no-cache' })
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then((todas) => {
      const piezas = todas.filter((p) => p.maquina === maquina);
      if (!piezas.length) return estado(empty, `${base}/${maquina}.html`);
      box.innerHTML = piezas.map((p) => {
        const meta = [p.alias, p.ciudad, p.fecha].filter(Boolean).join(' · ');
        const cap = [p.titulo, meta].filter(Boolean).join(' — ');
        return `<figure class="work" style="--r:4/3">
  <a class="media is-loaded" href="${base}/${p.grande || p.imagen}" data-lightbox data-caption="${esc(cap)}">
    <img src="${base}/${p.mini || p.imagen}" alt="${esc(cap)}" loading="lazy" decoding="async" style="opacity:1">
  </a>
  <figcaption><span class="work__title">${esc(p.titulo || 'sin título')}</span>${meta ? `<span class="work__meta">${esc(meta)}</span>` : ''}</figcaption>
</figure>`;
      }).join('');
    })
    .catch(() => {
      estado(error, `${base}/${maquina}.html`);
      box.querySelector('.maq__estado').insertAdjacentHTML('beforeend', ` <a href="${base}/galeria.html">${esc(gallery)} →</a>`);
    });
})();
