# Imágenes pendientes

Sube cada imagen **con exactamente este nombre y en esta carpeta**. En cuanto el archivo
existe, el sitio lo muestra solo; no hace falta tocar código ni volver a generar el sitio.
Mientras falte, en su lugar se ve un recuadro rayado con el nombre del archivo.

La proporción es solo una referencia (tomada del orden y formato del Wix) para que el
espacio reservado se vea bien. Si tu foto tiene otra proporción, cambia `ratio` en
`_src/content.mjs`.

**Recomendación de exportación:** JPG, lado largo de 1600–2000 px, calidad ~80 %
(idealmente menos de 400 KB por imagen). Fondo neutro y color fiel a la obra.

## Collage · `images/collage/` (1:1)

| Archivo | Obra |
|---|---|
| `collage-01.jpg` | Collage No. 1, 2019 |
| `collage-02.jpg` | Collage No. 2, 2019 |
| `collage-03.jpg` | Collage No. 3, 2019 |
| `collage-04.jpg` | Collage No. 4, 2019 |
| `collage-05.jpg` | Collage No. 5, 2019 |
| `collage-06.jpg` | Collage No. 6, 2019 |
| `collage-07.jpg` | Collage No. 7, 2019 |

## Cerámica · `images/ceramica/`

| Archivo | Obra | Proporción |
|---|---|---|
| `ceramica-01-boca.jpg` | Boca | 3:2 horizontal |
| `ceramica-02-nariz.jpg` | Nariz | 2:3 vertical |
| `ceramica-03-ojo.jpg` | Ojo | 2:3 vertical |
| `ceramica-04-oreja.jpg` | Oreja | 2:3 vertical |
| `ceramica-05-mascara.jpg` | Máscara | 2:3 vertical |
| `ceramica-06-bong.jpg` | Bong | 2:3 vertical |
| `ceramica-07-ojo-vista-2.jpg` | Ojo (vista 2) | 2:3 vertical |
| `ceramica-08-oreja-vista-2.jpg` | Oreja (vista 2) | 2:3 vertical |
| `ceramica-09-nariz-vista-2.jpg` | Nariz (vista 2) | 3:2 horizontal |

## Digital · `images/digital/`

| Archivo | Obra | Proporción |
|---|---|---|
| `digital-01-sin-titulo.jpg` | Sin título (obra análoga digitalizada) | 2:1 horizontal |
| `digital-02-sin-titulo.jpg` | Sin título (arte digital) | ≈ 2:3 vertical |
| `digital-03-sin-titulo.jpg` | Sin título (arte digital) | ≈ 3:2 horizontal |
| `digital-04-diaspora.gif` | Diáspora (fotogramas, GIF) | 3:2 horizontal |
| `digital-05-anthrobscen.jpg` | Anthrobscen, 2019 (grabado en metal) | ≈ 3:4 vertical |
| `digital-06-b.jpg` | B), 2021 | ≈ 10:7 horizontal |
| `digital-07-a.jpg` | a, 2021 | ≈ 10:7 horizontal |

> El GIF puede pesar mucho. Si pasa de ~3 MB, conviene reducir colores o tamaño.

## Retrato · `images/retrato/`

| Archivo | Uso | Proporción |
|---|---|---|
| `autorretrato-collage.jpg` | Página Statement / Bio | 3:4 vertical |

## Otros

| Archivo | Uso |
|---|---|
| `images/og-image.jpg` | Imagen que aparece al compartir el enlace en redes (1200 × 630 px). Tras subirla, corre `node _src/build.mjs` para activarla. |
| `files/cv-diego-deshuesado.pdf` | CV descargable. Tras subirlo, corre `node _src/build.mjs` y aparece el botón “Descargar CV”. |

## Miniaturas (opcional, para que la portada cargue más rápido)

El anillo de la portada usa las 23 imágenes en tamaño pequeño. Si pones una copia de
**400 px** de cada imagen en `images/miniaturas/` con la misma ruta
(p. ej. `images/miniaturas/collage/collage-01.jpg`) y corres `node _src/build.mjs`,
la portada usará esas copias ligeras en vez de las imágenes completas.
