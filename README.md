# Diego Deshuesado — portafolio

Sitio de artista bilingüe (español / inglés), estático y sin dependencias.
Publicado en **https://diegodeshuesado.com** (hosting Hostinger, despliegue automático desde la rama `main` vía Git de hPanel).

## Estructura

```
_src/content.mjs   ← TODOS los textos, obras, CV y contacto (lo único que editas)
_src/build.mjs     ← genera las páginas HTML a partir del contenido
assets/            ← estilos (style.css), visor de imágenes (main.js), favicon
images/            ← fotos de obra (ver images/LEEME.md: nombres de archivo)
files/             ← CV en PDF (opcional)
index.html, obra/, sobre/, cv/, contacto/   ← páginas en español (generadas)
en/                                         ← páginas en inglés (generadas)
404.html, sitemap.xml, robots.txt           ← generados
```

> Las páginas HTML se generan solas: **no las edites a mano**, cambia `_src/content.mjs`
> y vuelve a generar.

## Tareas comunes

**Subir imágenes de obra** — arrastra cada archivo a su carpeta dentro de `images/`
con el nombre indicado en [`images/LEEME.md`](images/LEEME.md). Se puede hacer desde
la web de GitHub (*Add file → Upload files*). Aparecen solas en el sitio.

**Cambiar textos, medidas, CV o correo** — edita `_src/content.mjs` y luego:

```bash
node _src/build.mjs
```

Haz commit de todo (incluidas las páginas generadas) y súbelo. Requiere Node 18 o más.

- Medidas de una obra: campo `size`, p. ej. `size: '30 × 30 cm'`.
- Correo público: `site.email`.
- Otra red social: agrega una línea en `site.social`.
- Nueva exposición: agrega un elemento en la sección correspondiente de `cv`.
- Nueva serie: copia un bloque de `series`, dale un `id` nuevo y añade su ruta en `routes`.

**Ver el sitio en tu computadora**

```bash
python3 -m http.server 8000
```

Luego abre http://localhost:8000

## Publicación

El sitio vive en Hostinger. hPanel → Sitios web → diegodeshuesado.com → Avanzado → Git
está conectado a este repo (rama `main`, carpeta `public_html`) con auto-deploy: cada push a
`main` se publica solo. `.htaccess` fuerza HTTPS, quita el `www` y usa `404.html`.

Si cambias de dominio, cambia `site.url` en `_src/content.mjs` y vuelve a generar.

## Pendientes de contenido

- [x] Imágenes de obra (exportadas desde los originales, 2000 px).
- [ ] Revisar el **statement** (es un borrador escrito a partir de los textos del Wix).
- [ ] Revisar las traducciones al inglés.
- [x] Semblanza y CV actualizados (incluye Banff 2020).
- [x] Galería Oscar Odín: 2017–2019.
- [ ] Medidas de las obras y fechas de las piezas digitales sin año.
- [x] Correo de contacto (cambiar al comprar dominio).
- [x] `images/og-image.jpg`.
- [x] `files/cv-diego-deshuesado.pdf` (regenerarlo si cambia el CV).
