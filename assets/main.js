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

// Portada: círculo aleatorio, giro con inercia, arrastre y vista grande de cada obra.
(() => {
  const ring = document.querySelector('.ring');
  const track = ring?.querySelector('.ring__track');
  if (!track) return;
  const peek = document.querySelector('.peek');
  const pImg = peek?.querySelector('.peek__img');
  const pTitle = peek?.querySelector('.peek__title');
  const pGo = peek?.querySelector('.peek__go');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ── orden aleatorio ──
  const place = (items) => {
    ring.style.setProperty('--n', items.length);
    items.forEach((el, i) => { el.style.setProperty('--i', i); track.appendChild(el); });
  };
  let items = shuffle([...track.querySelectorAll('.ring__item')]);
  place(items);

  // ── giro (lo maneja JS; con "reducir movimiento" no gira solo) ──
  track.style.animation = 'none';
  const AUTO = reduce ? 0 : 360 / 160;      // grados por segundo
  let angle = Math.random() * 360, vel = AUTO, hover = false, drag = null, last = performance.now();
  const tick = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!drag) {
      const target = hover ? 0 : AUTO;
      vel += (target - vel) * Math.min(1, dt * (Math.abs(vel) > Math.abs(AUTO) + 1 ? 1.6 : 3));
      angle += vel * dt;
    }
    track.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  // ── arrastrar con dedo o cursor ──
  const center = () => { const r = ring.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
  const ang = (x, y) => { const [cx, cy] = center(); return Math.atan2(y - cy, x - cx) * 180 / Math.PI; };
  let moved = false;
  ring.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    drag = { a: ang(e.clientX, e.clientY), x: e.clientX, y: e.clientY, t: performance.now(), v: 0, id: e.pointerId };
    moved = false;
  });
  addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    if (!moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 6) {
      moved = true; ring.classList.add('is-dragging'); closePeek();
      try { ring.setPointerCapture(e.pointerId); } catch {}
    }
    if (!moved) return;
    const a = ang(e.clientX, e.clientY);
    let d = a - drag.a; if (d > 180) d -= 360; if (d < -180) d += 360;
    const now = performance.now(), dt = Math.max(1, now - drag.t) / 1000;
    angle += d; drag.v = drag.v * 0.6 + (d / dt) * 0.4; drag.a = a; drag.t = now;
  });
  const end = (e) => {
    if (!drag || (e && e.pointerId !== drag.id)) return;
    if (moved) vel = Math.max(-720, Math.min(720, drag.v));
    drag = null; ring.classList.remove('is-dragging');
  };
  addEventListener('pointerup', end); addEventListener('pointercancel', end);
  ring.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);

  // ── vista grande ──
  let hot = null, lastType = 'mouse';
  const openPeek = (el, touch) => {
    if (!peek) return;
    hot?.classList.remove('is-hot'); hot = el; el.classList.add('is-hot');
    const thumb = el.querySelector('img')?.currentSrc || '';
    pImg.src = thumb; pImg.alt = el.dataset.cap || '';
    const full = new Image(); full.onload = () => { if (hot === el) pImg.src = full.src; }; full.src = el.dataset.full || thumb;
    pTitle.textContent = el.dataset.cap || '';
    pGo.href = el.href;
    peek.classList.toggle('is-touch', !!touch);
    peek.classList.add('is-open');
  };
  function closePeek() { hot?.classList.remove('is-hot'); hot = null; peek?.classList.remove('is-open', 'is-touch'); hover = false; }
  track.addEventListener('pointerover', (e) => {
    lastType = e.pointerType;
    const el = e.target.closest('.ring__item');
    if (!el || e.pointerType !== 'mouse' || drag) return;
    hover = true; openPeek(el, false);
  });
  track.addEventListener('pointerout', (e) => {
    const el = e.target.closest('.ring__item');
    if (!el || e.pointerType !== 'mouse' || el.contains(e.relatedTarget)) return;
    closePeek();
  });
  track.addEventListener('pointerdown', (e) => { lastType = e.pointerType; });
  track.addEventListener('click', (e) => {
    const el = e.target.closest('.ring__item');
    if (!el || lastType === 'mouse') return;
    e.preventDefault(); hover = true; openPeek(el, true);
  });
  peek?.addEventListener('click', (e) => { if (!e.target.closest('.peek__go')) closePeek(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closePeek(); });

  // ── piezas de _máquinas ──
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
        a.dataset.full = `${base}/${p.grande || p.imagen || p.mini}`;
        a.dataset.cap = [p.titulo, `_máquinas · ${p.maquina}`].filter(Boolean).join(' — ');
        a.innerHTML = `<span class="media is-loaded"><img src="${base}/${p.mini || p.imagen}" alt="" loading="lazy" decoding="async"></span>`;
        return a;
      });
      if (!nuevas.length) return;
      items = shuffle(items.concat(nuevas));
      place(items);
    })
    .catch(() => {});
})();
