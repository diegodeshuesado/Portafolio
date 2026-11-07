// ─────────────────────────────────────────────────────────────
//  CONTENIDO DEL SITIO  ·  edita este archivo y corre:
//      node _src/build.mjs
//  Todos los textos están en español (es) e inglés (en).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Diego Deshuesado',
  // URL pública del sitio (GitHub Pages). Cámbiala si usas otro dominio.
  url: 'https://diegodeshuesado.github.io/Portafolio',
  // Correo público. Déjalo vacío ('') para no mostrarlo.
  email: '',
  social: [
    { label: 'Twitter / X', handle: '@DiegoDeshuesado', url: 'https://twitter.com/DiegoDeshuesado' },
    // { label: 'Instagram', handle: '@usuario', url: 'https://instagram.com/usuario' },
  ],
  // CV en PDF: si existe este archivo, aparece el botón de descarga.
  cvPdf: 'files/cv-diego-deshuesado.pdf',
  // Imagen para compartir en redes (1200 × 630 px).
  ogImage: 'images/og-image.jpg',
  portrait: { file: 'retrato/autorretrato-collage.jpg', ratio: '1480/2048' },
};

// Rutas de cada página por idioma (la URL final termina en "/").
export const routes = {
  home:     { es: '',               en: 'en/' },
  collage:  { es: 'obra/collage/',  en: 'en/work/collage/' },
  ceramica: { es: 'obra/ceramica/', en: 'en/work/ceramics/' },
  digital:  { es: 'obra/digital/',  en: 'en/work/digital/' },
  about:    { es: 'sobre/',         en: 'en/about/' },
  cv:       { es: 'cv/',            en: 'en/cv/' },
  contact:  { es: 'contacto/',      en: 'en/contact/' },
};

export const ui = {
  es: {
    langName: 'Español', otherLang: 'EN', otherLangLabel: 'English version',
    role: 'Artista visual',
    location: 'Querétaro y Apaseo el Alto, México',
    tagline: 'Collage, cerámica, grabado e imagen digital.',
    nav: { work: 'Obra', about: 'Statement / Bio', cv: 'CV', contact: 'Contacto' },
    skip: 'Saltar al contenido',
    index: 'Índice de obra',
    works: (n) => `${n} ${n === 1 ? 'obra' : 'obras'}`,
    images: (n) => `${n} imágenes`,
    readMore: 'Leer statement completo',
    statement: 'Statement',
    bio: 'Semblanza',
    prev: 'Anterior', next: 'Siguiente', close: 'Cerrar',
    allWork: 'Todo el índice',
    nextSeries: 'Siguiente serie',
    downloadCv: 'Descargar CV (PDF)',
    printCv: 'Imprimir / guardar CV',
    contactIntro: 'Para consultas sobre obra, exposiciones, convocatorias y colaboraciones.',
    emailLabel: 'Correo',
    socialLabel: 'Redes',
    basedIn: 'Vive y trabaja en',
    notFound: 'Página no encontrada',
    notFoundText: 'La página que buscas no existe o cambió de lugar.',
    backHome: 'Volver al inicio',
    rights: 'Todas las imágenes © Diego Deshuesado.',
    missing: 'imagen pendiente',
  },
  en: {
    langName: 'English', otherLang: 'ES', otherLangLabel: 'Versión en español',
    role: 'Visual artist',
    location: 'Querétaro and Apaseo el Alto, Mexico',
    tagline: 'Collage, ceramics, printmaking and digital image.',
    nav: { work: 'Work', about: 'Statement / Bio', cv: 'CV', contact: 'Contact' },
    skip: 'Skip to content',
    index: 'Index of work',
    works: (n) => `${n} ${n === 1 ? 'work' : 'works'}`,
    images: (n) => `${n} images`,
    readMore: 'Read full statement',
    statement: 'Statement',
    bio: 'Biography',
    prev: 'Previous', next: 'Next', close: 'Close',
    allWork: 'Full index',
    nextSeries: 'Next series',
    downloadCv: 'Download CV (PDF)',
    printCv: 'Print / save CV',
    contactIntro: 'For enquiries about work, exhibitions, open calls and collaborations.',
    emailLabel: 'Email',
    socialLabel: 'Social',
    basedIn: 'Lives and works in',
    notFound: 'Page not found',
    notFoundText: 'The page you are looking for does not exist or has moved.',
    backHome: 'Back to home',
    rights: 'All images © Diego Deshuesado.',
    missing: 'image pending',
  },
};

// ── STATEMENT (BORRADOR: revísalo y ajústalo a tu voz) ─────────
export const statement = {
  es: [
    'Mi trabajo se mueve entre lo análogo y lo digital para pensar el cuerpo y el territorio. Uso el collage, la cerámica, el grabado y la imagen digital como maneras de recortar, modelar y volver a armar aquello que me rodea: los rasgos de mi propio rostro, una ciudad en transición, la violencia que se vuelve cotidiana.',
    'Me interesa el proceso como un diálogo entre la materia, el artista y lo que la obra pretende ser; un lugar donde marcar y borrar son gestos igual de importantes. Desde Querétaro y Apaseo el Alto, Guanajuato, mi práctica se pregunta cómo construimos una imagen de nosotros mismos y de nuestro entorno a partir de fragmentos.',
  ],
  en: [
    'My work moves between the analogue and the digital to think about the body and territory. I use collage, ceramics, printmaking and digital images as ways of cutting, modelling and reassembling what surrounds me: the features of my own face, a city in transition, violence as it becomes everyday.',
    'I am interested in process as a dialogue between the material, the artist and what the work aims to be; a place where marking and erasing are equally important gestures. Working from Querétaro and Apaseo el Alto, Guanajuato, my practice asks how we build an image of ourselves and of our surroundings out of fragments.',
  ],
};

// ── SEMBLANZA (texto del Wix) ──────────────────────────────────
export const bio = {
  es: [
    'Diego Deshuesado nació en Nezahualcóyotl, Estado de México, México, en 1993. Es un artista que vive alternamente en Querétaro y Apaseo el Alto, Guanajuato. Actualmente está concluyendo la Licenciatura en Artes Plásticas con línea terminal en Artes Plásticas en la Universidad Autónoma de Querétaro. Estuvo un año estudiando en la Escuela Activa de Fotografía Querétaro. En el 2014 comenzó a trabajar con el escultor David Manzanares.',
    'Deshuesado ha expuesto en distintas galerías y museos de los estados de Querétaro y Guanajuato, entre ellos el Museo de la Ciudad, la Galería Libertad, el Centro de Arte Universitario y el Centro de Cultura de Apaseo el Alto. Durante 2018 y 2019 estuvo a cargo de la Galería Fundación Oscar Odín. En 2021 comenzó la Ingeniería en Tecnologías de la Información y Comunicación.',
  ],
  en: [
    'Diego Deshuesado was born in Nezahualcóyotl, State of Mexico, Mexico, in 1993. He is an artist who lives between Querétaro and Apaseo el Alto, Guanajuato. He is currently completing a BA in Visual Arts at the Universidad Autónoma de Querétaro, and spent a year studying at the Escuela Activa de Fotografía Querétaro. In 2014 he began working with the sculptor David Manzanares.',
    'Deshuesado has exhibited in galleries and museums in the states of Querétaro and Guanajuato, including the Museo de la Ciudad, Galería Libertad, Centro de Arte Universitario and Centro de Cultura de Apaseo el Alto. From 2018 to 2019 he ran the Galería Fundación Oscar Odín. In 2021 he began a degree in Information and Communication Technologies Engineering.',
  ],
};

// ── CV ──────────────────────────────────────────────────────────
// Cada sección: { title: {es, en}, items: [{ year, es, en, url? }] }
export const cv = [
  {
    title: { es: 'Formación', en: 'Education' },
    items: [
      { year: '2021–', es: 'Ingeniería en Tecnologías de la Información y Comunicación.', en: 'Engineering in Information and Communication Technologies.' },
      { year: 'En curso', yearEn: 'Ongoing', es: 'Licenciatura en Artes Plásticas, Universidad Autónoma de Querétaro.', en: 'BA in Visual Arts, Universidad Autónoma de Querétaro.' },
      { year: '2018–2019', es: 'Diplomado en línea «ABC para la creación de proyectos culturales».', en: 'Online diploma “ABC for Creating Cultural Projects”.' },
      { year: '2014–2015', es: 'Escuela Activa de Fotografía Querétaro.', en: 'Escuela Activa de Fotografía Querétaro (photography school).' },
      { year: '2012–2013', es: 'Diplomado de Arte Digital, AddDigital, Querétaro.', en: 'Diploma in Digital Art, AddDigital, Querétaro.' },
    ],
  },
  {
    title: { es: 'Experiencia', en: 'Experience' },
    items: [
      { year: '2017–2018', es: 'A cargo de la Galería Oscar Odín, Querétaro.', en: 'Director, Galería Oscar Odín, Querétaro.' },
      { year: '2014–2016', es: 'Asistente del escultor David Manzanares.', en: 'Assistant to the sculptor David Manzanares.' },
      { year: '2013–2014', es: 'Becario en «Gestión Cultural y Formación de Grupos», UAQ.', en: 'Fellow, “Cultural Management and Group Formation”, UAQ.' },
    ],
  },
  {
    title: { es: 'Exposiciones colectivas', en: 'Group exhibitions' },
    items: [
      { year: '2019', es: '«LaTA 2.0», Galería Libertad, curada por Alejandro Uribe. Querétaro, México.', en: '“LaTA 2.0”, Galería Libertad, curated by Alejandro Uribe. Querétaro, Mexico.' },
      { year: '2016', es: 'Quince Aniversario del Museo de la Ciudad, Museo de la Ciudad, curada por Gabriel Hörner García. Querétaro, México.', en: 'Fifteenth Anniversary of the Museo de la Ciudad, Museo de la Ciudad, curated by Gabriel Hörner García. Querétaro, Mexico.' },
      { year: '2015', es: '«Trazos y Retratos», Sala de Arte de la Facultad de Bellas Artes.', en: '“Trazos y Retratos”, Art Room of the Faculty of Fine Arts.' },
      { year: '2014', es: 'ART TX Arte en contención, «Prospección Contemporánea». Tequisquiapan, Querétaro, México.', en: 'ART TX Arte en contención, “Prospección Contemporánea”. Tequisquiapan, Querétaro, Mexico.' },
    ],
  },
  {
    title: { es: 'Prensa y publicaciones', en: 'Press and publications' },
    items: [
      { year: '2019', es: '«LaTA 2.0», cartelera de Asomarte.', en: '“LaTA 2.0”, Asomarte listings (in Spanish).', url: 'https://www.asomarte.com/cartelera/210/lata-20/' },
      { year: '2019', es: 'LaTA — Máquinas, publicación del proyecto.', en: 'LaTA — Máquinas, project publication.', url: 'https://cargocollective.com/LaTA/_maquinas' },
    ],
  },
];

// ── SERIES DE OBRA ──────────────────────────────────────────────
// Cada obra: file (dentro de /images), ratio (ancho/alto, solo para
// reservar el espacio mientras carga), title, year, medium, size.
// Campos vacíos no se muestran. Pon las medidas en `size`, p. ej. '30 × 30 cm'.
export const series = [
  {
    id: 'collage',
    num: '01',
    title: { es: 'Collage', en: 'Collage' },
    subtitle: { es: 'Apaseo el Alto', en: 'Apaseo el Alto' },
    years: '2019',
    text: {
      es: ['Papel, tijeras, recortes de periódico, pegamento y plumones fueron el medio utilizado para dialogar en torno a un contexto de violencia, de inseguridad y de aquellas cosas que rodean a una ciudad en transición. Se hace uso del collage para recortar y pegar, marcar y borrar, y crear una imagen del entorno; en este caso, Apaseo el Alto.'],
      en: ['Paper, scissors, newspaper clippings, glue and markers were the means used to engage with a context of violence and insecurity, and with the things that surround a city in transition. Collage is used to cut and paste, mark and erase, and build an image of the surroundings; in this case, Apaseo el Alto.'],
    },
    // Proporción real de cada foto (ancho/alto)
    works: ['1689/2458', '2880/4104', '2641/3785', '2664/3960', '2739/3938', '1870/2662', '2712/3904'].map((ratio, i) => ({
      file: `collage/collage-0${i + 1}.jpg`,
      ratio,
      title: { es: `Collage No. ${i + 1}`, en: `Collage No. ${i + 1}` },
      year: '2019',
      medium: { es: 'Collage de impresiones con tinta china sobre papel', en: 'Collage of India ink prints on paper' },
      size: '',
    })),
  },
  {
    id: 'ceramica',
    num: '02',
    title: { es: 'Cerámica', en: 'Ceramics' },
    subtitle: { es: 'Rasgos', en: 'Features' },
    years: '2019',
    text: {
      es: ['Esculturas modeladas en pasta cerámica, esmaltadas y horneadas en horno cerámico. Estas piezas fueron trabajadas en la Universidad Autónoma de Querétaro en el año 2019. La expresión física propia y los rasgos característicos funcionaron como inspiración para estas piezas, creando un diálogo entre la materia, el artista y lo que pretende ser.'],
      en: ['Sculptures modelled in ceramic paste, glazed and kiln-fired. These pieces were made at the Universidad Autónoma de Querétaro in 2019. The artist’s own physical expression and characteristic features served as inspiration, creating a dialogue between the material, the artist and what the work aims to be.'],
    },
    works: [
      ['ceramica-01-boca', '3/2', 'Boca', 'Mouth', ''],
      ['ceramica-02-nariz', '2/3', 'Nariz', 'Nose', ''],
      ['ceramica-03-ojo', '2/3', 'Ojo', 'Eye', ''],
      ['ceramica-04-oreja', '2/3', 'Oreja', 'Ear', ''],
      ['ceramica-05-mascara', '2/3', 'Máscara', 'Mask', ''],
      ['ceramica-06-bong', '2/3', 'Bong', 'Bong', ''],
      ['ceramica-07-ojo-vista-2', '2/3', 'Ojo', 'Eye', 'view'],
      ['ceramica-08-oreja-vista-2', '2/3', 'Oreja', 'Ear', 'view'],
      ['ceramica-09-nariz-vista-2', '3/2', 'Nariz', 'Nose', 'view'],
    ].map(([file, ratio, es, en, view]) => ({
      file: `ceramica/${file}.jpg`,
      ratio,
      title: { es: view ? `${es} (vista 2)` : es, en: view ? `${en} (view 2)` : en },
      year: '2019',
      medium: { es: 'Cerámica esmaltada', en: 'Glazed ceramic' },
      size: '',
    })),
  },
  {
    id: 'digital',
    num: '03',
    title: { es: 'Digital', en: 'Digital' },
    subtitle: { es: 'Imagen, animación y obra digitalizada', en: 'Image, animation and digitised work' },
    years: '2019–2021',
    text: {
      es: ['Imagen digital, animación y obra análoga digitalizada —grabado en metal y fotograma— producidas entre 2019 y 2021 y publicadas como NFT (criptoarte).'],
      en: ['Digital images, animation and digitised analogue work (metal engraving and photogram) produced between 2019 and 2021 and released as NFTs (crypto art).'],
    },
    works: [
      { file: 'digital/digital-01-sin-titulo.jpg', ratio: '1699/852', title: { es: 'fuck control', en: 'fuck control' }, year: '2020', medium: { es: 'Obra análoga digitalizada', en: 'Digitised analogue work' }, size: '' },
      { file: 'digital/digital-02-sin-titulo.jpg', ratio: '3957/5787', title: { es: 'formtrans', en: 'formtrans' }, year: '2021', medium: { es: 'Arte digital', en: 'Digital art' }, size: '' },
      { file: 'digital/digital-03-sin-titulo.jpg', ratio: '3706/2360', title: { es: 'alienation', en: 'alienation' }, year: '2021', medium: { es: 'Arte digital', en: 'Digital art' }, size: '' },
      { file: 'digital/digital-04-diaspora.gif', ratio: '525/350', title: { es: 'Diáspora', en: 'Diáspora' }, year: '', medium: { es: 'Fotogramas, GIF animado', en: 'Photograms, animated GIF' }, size: '' },
      { file: 'digital/digital-05-anthrobscen.jpg', ratio: '1696/2333', title: { es: 'Anthrobscen', en: 'Anthrobscen' }, year: '2019', medium: { es: 'Grabado en metal, digitalizado', en: 'Metal engraving, digitised' }, size: '' },
      { file: 'digital/digital-06-b.jpg', ratio: '3507/2480', title: { es: 'B)', en: 'B)' }, year: '2021', medium: { es: 'Arte digital', en: 'Digital art' }, size: '' },
      { file: 'digital/digital-07-a.jpg', ratio: '1121/795', title: { es: 'a', en: 'a' }, year: '2021', medium: { es: 'Arte digital', en: 'Digital art' }, size: '' },
    ],
  },
];
