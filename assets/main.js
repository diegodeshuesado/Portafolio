// Visor de imágenes y botón de imprimir CV. Sin dependencias.
(() => {
  const dlg = document.querySelector('.lightbox');
  const links = () => [...document.querySelectorAll('[data-lightbox]')].filter((a) => !a.classList.contains('is-missing'));

  if (dlg && typeof dlg.showModal === 'function') {
    const img = dlg.querySelector('img');
    const cap = dlg.querySelector('figcaption');
    let list = [];
    let i = 0;

    const show = (n) => {
      i = (n + list.length) % list.length;
      const a = list[i];
      img.src = a.getAttribute('href');
      img.alt = a.querySelector('img')?.alt || '';
      cap.textContent = a.dataset.caption || '';
      const multi = list.length > 1;
      dlg.querySelector('.lightbox__prev').hidden = !multi;
      dlg.querySelector('.lightbox__next').hidden = !multi;
    };

    document.addEventListener('click', (e) => {
      const a = e.target.closest('[data-lightbox]');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      if (a.classList.contains('is-missing')) return;
      list = links();
      show(list.indexOf(a));
      dlg.showModal();
    });

    dlg.querySelector('.lightbox__prev').addEventListener('click', () => show(i - 1));
    dlg.querySelector('.lightbox__next').addEventListener('click', () => show(i + 1));
    dlg.querySelector('.lightbox__close').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => { img.removeAttribute('src'); });
    dlg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(i - 1);
      if (e.key === 'ArrowRight') show(i + 1);
    });

    // deslizar en pantallas táctiles
    let x0 = null;
    dlg.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    dlg.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(dx < 0 ? i + 1 : i - 1);
      x0 = null;
    });
  }

  document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));
})();

// Portada: el círculo se muestra en orden aleatorio y suma piezas de la galería de _máquinas.
(() => {
  const ring = document.querySelector('.ring');
  const track = ring?.querySelector('.ring__track');
  if (!track) return;
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const place = (items) => {
    ring.style.setProperty('--n', items.length);
    items.forEach((el, i) => { el.style.setProperty('--i', i); track.appendChild(el); });
  };
  let items = shuffle([...track.querySelectorAll('.ring__item')]);
  place(items);

  const { maqBase: base, maqHref: href, maqMax } = ring.dataset;
  if (!base) return;
  fetch(`${base}/envios/index.json`, { cache: 'no-cache' })
    .then((r) => (r.ok ? r.json() : []))
    .then((piezas) => {
      const nuevas = shuffle(piezas.filter((p) => p.mini || p.imagen)).slice(0, Number(maqMax) || 8).map((p) => {
        const a = document.createElement('a');
        a.className = 'ring__item ring__item--maq';
        a.href = `${href}${p.maquina}/`;
        a.tabIndex = -1;
        a.setAttribute('aria-hidden', 'true');
        a.innerHTML = `<span class="media is-loaded"><img src="${base}/${p.mini || p.imagen}" alt="" loading="lazy" decoding="async"></span>`;
        return a;
      });
      if (!nuevas.length) return;
      items = shuffle(items.concat(nuevas));
      place(items);
    })
    .catch(() => {});
})();
