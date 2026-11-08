// ─────────────────────────────────────────────────────────────
//  CONTENIDO DEL SITIO  ·  edita este archivo y corre:
//      node _src/build.mjs
//  Todos los textos están en español (es) e inglés (en).
// ─────────────────────────────────────────────────────────────

export const site = {
  // Google Analytics 4 (ID de medición). Vacío = sin Analytics.
  analytics: 'G-3723CCM15P',
  // Descripción para buscadores (portada), por idioma.
  seo: {
    es: 'Diego Deshuesado (1993), artista visual contemporáneo de Querétaro y Apaseo el Alto, Guanajuato. Collage, cerámica, grabado, imagen digital, escritura asémica y _máquinas.',
    en: 'Diego Deshuesado (b. 1993), contemporary visual artist from Querétaro and Apaseo el Alto, Guanajuato, Mexico. Collage, ceramics, printmaking, digital image, asemic writing and _máquinas.',
  },
  knowsAbout: ['Collage', 'Cerámica', 'Grabado', 'Arte digital', 'Escritura asémica', 'Performance', 'Arte contemporáneo'],
  name: 'Diego Deshuesado',
  // URL pública del sitio (GitHub Pages). Cámbiala si usas otro dominio.
  url: 'https://diegodeshuesado.com',
  // Correo público. Déjalo vacío ('') para no mostrarlo.
  email: 'hello@diegodeshuesado.com',
  social: [
    { label: 'Twitter / X', handle: '@DiegoDeshuesado', url: 'https://twitter.com/DiegoDeshuesado' },
    { label: 'Instagram', handle: '@diegodeshuesado', url: 'https://www.instagram.com/diegodeshuesado/' },
  ],
  // CV en PDF: si existe este archivo, aparece el botón de descarga.
  cvPdf: 'files/cv-diego-deshuesado.pdf',
  // Imagen para compartir en redes (1200 × 630 px).
  ogImage: 'images/og-diego-deshuesado.jpg',
  portrait: { file: 'retrato/autorretrato-collage.jpg', ratio: '1480/2048' },
};

// Rutas de cada página por idioma (la URL final termina en "/").
export const routes = {
  home:     { es: '',               en: 'en/' },
  collage:  { es: 'obra/collage/',  en: 'en/work/collage/' },
  ceramica: { es: 'obra/ceramica/', en: 'en/work/ceramics/' },
  digital:  { es: 'obra/digital/',  en: 'en/work/digital/' },
  maquinas: { es: 'obra/maquinas/', en: 'en/work/maquinas/' },
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
    maq: { machines: (n) => `${n} máquinas`, operation: 'Operación', materials: 'Materiales', authors: 'Autoría', participate: 'Participar', make: 'Hacer esta máquina', open: 'abrir galería_ →', soon: 'próximamente_', gallery: 'Piezas enviadas', loading: 'Cargando piezas…', empty: 'Aún no hay piezas aprobadas de esta máquina. Puedes hacer la primera.', error: 'No se pudo cargar la galería en este momento.', siteGallery: 'Ver la galería completa', nextMachine: 'Siguiente máquina', back: 'Todas las máquinas', ficha: 'Ficha' },
    nav: { work: 'Obra', maquinas: '_máquinas', about: 'Statement / Bio', cv: 'CV', contact: 'Contacto' },
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
    maq: { machines: (n) => `${n} machines`, operation: 'Operation', materials: 'Materials', authors: 'Authors', participate: 'Take part', make: 'Make this machine', open: 'open gallery_ →', soon: 'coming soon_', gallery: 'Submitted pieces', loading: 'Loading pieces…', empty: 'There are no approved pieces for this machine yet. You can make the first one.', error: 'The gallery could not be loaded right now.', siteGallery: 'See the full gallery', nextMachine: 'Next machine', back: 'All machines', ficha: 'Details' },
    nav: { work: 'Work', maquinas: '_máquinas', about: 'Statement / Bio', cv: 'CV', contact: 'Contact' },
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
    'En mi trabajo cuestiono las normas que regulan cómo vivimos: las reglas, a veces explícitas y a veces silenciosas, con las que aprendemos a comportarnos, a hablar y a mirar lo que nos rodea. Me interesa el lenguaje como una de esas reglas. Pienso que funciona como un código o un programa que seguimos casi sin darnos cuenta, y mi práctica busca intervenirlo: recortarlo, tacharlo, deformarlo y volver a armarlo.',
    'Este interés viene de Apaseo el Alto, Guanajuato, donde vive mi familia. Ahí la violencia se ha vuelto cotidiana y se nombra poco; aprendemos a convivir con ella evadiéndola. En la serie de collages Apaseo el Alto (2019) trabajo sobre recortes de periódico: cubro las notas letra por letra con tinta, imitando ese gesto de evadir, y sobre el texto oculto aparecen imágenes religiosas, multitudes y calles del pueblo. Para mí, marcar y borrar son gestos igual de importantes.',
    'En mis piezas digitales llevo la escritura al límite de lo legible. En obras como fuck control (2020) o alienation (2021) las palabras se repiten, se enciman y se deshacen hasta volverse trazo: una escritura asémica que conserva la forma del mensaje pero pierde su función. En la cerámica, el punto de partida fue mi propio cuerpo. Modelé mis rasgos (boca, nariz, ojo, oreja) para preguntarme cómo construimos una imagen de nosotros mismos a partir de fragmentos.',
    'Con _máquinas (2019) el lenguaje se convirtió en instrucción. Son instructivos que proponen otras reglas para relacionarse con la ciudad y con los demás: tomarse una selfie sonriendo junto a cifras reales de violencia, renombrar espacios con fragmentos de poesía o inventar historias para las calles de un barrio. Me interesa que otras personas operen estas máquinas y que la obra exista en lo que cada quien produce.',
    'No busco encajar en una sola disciplina. Trabajo con collage, grabado, cerámica, imagen digital y performance, y he buscado aprender de la dramaturgia, la poesía y la expresión corporal. Me interesa menos el objeto terminado que el proceso y el diálogo que se abre con quien participa. La fuente de mis inquietudes es deconstruir la forma en que hemos sido instruidos para vivir.',
    'Querétaro, noviembre de 2026.',
  ],
  en: [
    'In my work I question the norms that regulate how we live: the rules, sometimes explicit and sometimes silent, through which we learn how to behave, how to speak and how to look at what surrounds us. I am interested in language as one of those rules. I think it works like a code or a program that we follow almost without noticing, and my practice sets out to intervene in it: to cut it, cross it out, distort it and put it back together.',
    'This interest comes from Apaseo el Alto, Guanajuato, where my family lives. There, violence has become everyday and is rarely named; we learn to live with it by looking away. In the collage series Apaseo el Alto (2019) I work on newspaper clippings: I cover the articles letter by letter with ink, imitating that gesture of evasion, and over the hidden text appear religious images, crowds and the town’s streets. For me, marking and erasing are equally important gestures.',
    'In my digital pieces I push writing to the edge of legibility. In works such as fuck control (2020) or alienation (2021) words repeat, overlap and come apart until they become line: an asemic writing that keeps the shape of the message but loses its function. In ceramics, the starting point was my own body. I modelled my features (mouth, nose, eye, ear) to ask how we build an image of ourselves out of fragments.',
    'With _máquinas (2019) language became instruction. They are instruction manuals that propose other rules for relating to the city and to others: taking a smiling selfie next to real figures of violence, renaming places with fragments of poetry, or inventing stories for the streets of a neighbourhood. What interests me is that other people operate these machines and that the work exists in what each of them produces.',
    'I do not seek to fit into a single discipline. I work with collage, printmaking, ceramics, digital image and performance, and I have sought to learn from dramaturgy, poetry and body expression. I am less interested in the finished object than in the process and the dialogue that opens with those who take part. The source of my concerns is to deconstruct the way we have been instructed to live.',
    'Querétaro, November 2026.',
  ],
};

// ── SEMBLANZA (texto del Wix) ──────────────────────────────────
export const bio = {
  es: [
    'Diego Deshuesado (Nezahualcóyotl, Estado de México, 1993) es un artista que vive entre Querétaro y Apaseo el Alto, Guanajuato. Egresó de la Licenciatura en Artes Visuales con línea terminal en Artes Plásticas de la Universidad Autónoma de Querétaro y estudió un año en la Escuela Activa de Fotografía Querétaro. En 2014 comenzó a trabajar con el escultor David Manzanares.',
    'Ha expuesto en galerías y museos de Querétaro y Guanajuato, entre ellos el Museo de la Ciudad, la Galería Libertad, el Centro de Arte Universitario y el Centro de Cultura de Apaseo el Alto. De 2017 a 2019 estuvo a cargo de la Galería Fundación Oscar Odín. En 2020 fue seleccionado, con beca, para el programa Poetry, Politics and Embodiment del Banff Centre for Arts and Creativity (Alberta, Canadá), donde desarrollaría su pieza _máquinas; la residencia no pudo realizarse por la pandemia. Después estudió Ingeniería en Tecnologías de la Información y Comunicación.',
  ],
  en: [
    'Diego Deshuesado (Nezahualcóyotl, State of Mexico, 1993) is an artist who lives between Querétaro and Apaseo el Alto, Guanajuato. He holds a BA in Visual Arts, with a specialisation in Fine Arts, from the Universidad Autónoma de Querétaro, and spent a year at the Escuela Activa de Fotografía Querétaro. In 2014 he began working with the sculptor David Manzanares.',
    'He has exhibited in galleries and museums in Querétaro and Guanajuato, including the Museo de la Ciudad, Galería Libertad, Centro de Arte Universitario and Centro de Cultura de Apaseo el Alto. From 2017 to 2019 he ran the Galería Fundación Oscar Odín. In 2020 he was selected, with a scholarship, for the Poetry, Politics and Embodiment programme at the Banff Centre for Arts and Creativity (Alberta, Canada), where he was to develop his piece _máquinas; the residency could not take place due to the pandemic. He later studied Engineering in Information and Communication Technologies.',
  ],
};

// ── CV ──────────────────────────────────────────────────────────
// Cada sección: { title: {es, en}, items: [{ year, es, en, url? }] }
export const cv = [
  {
    title: { es: 'Formación', en: 'Education' },
    items: [
      { year: '2025–', es: 'Maestría en Tecnología Avanzada, IPN-CICATA Querétaro.', en: 'MSc in Advanced Technology, IPN-CICATA Querétaro.' },
      { year: '2021–2024', es: 'Ingeniería en Tecnologías de la Información y Comunicación.', en: 'Engineering in Information and Communication Technologies.' },
      { year: '2013–2020', es: 'Licenciatura en Artes Visuales con línea terminal en Artes Plásticas, Universidad Autónoma de Querétaro.', en: 'BA in Visual Arts, specialisation in Fine Arts, Universidad Autónoma de Querétaro.' },
      { year: '2018–2019', es: 'Diplomado en línea «ABC para la creación de proyectos culturales».', en: 'Online diploma “ABC for Creating Cultural Projects”.' },
      { year: '2014–2015', es: 'Curso técnico en fotografía, Escuela Activa de Fotografía Querétaro.', en: 'Technical course in photography, Escuela Activa de Fotografía Querétaro.' },
      { year: '2012–2013', es: 'Diplomado de Arte Digital, AddDigital, Querétaro.', en: 'Diploma in Digital Art, AddDigital, Querétaro.' },
    ],
  },
  {
    title: { es: 'Proyectos especiales', en: 'Special projects' },
    items: [
      { year: '2020', es: 'Seleccionado, con beca, para el programa «Poetry, Politics and Embodiment», Banff Centre for Arts and Creativity. Banff, Alberta, Canadá. (No realizado por la pandemia de COVID-19.)', en: 'Selected, with a scholarship, for the “Poetry, Politics and Embodiment” programme, Banff Centre for Arts and Creativity. Banff, Alberta, Canada. (Did not take place due to the COVID-19 pandemic.)' },
    ],
  },
  {
    title: { es: 'Cursos y seminarios', en: 'Courses and seminars' },
    items: [
      { year: '2019', es: 'Laboratorio de Arte y Tecnología 2.0, Galería Libertad. Querétaro, México.', en: 'Art and Technology Laboratory 2.0, Galería Libertad. Querétaro, Mexico.' },
      { year: '2019', es: 'Festival de la Joven Dramaturgia, taller «Diseño de máquinas para viajar en el tiempo», impartido por Aristeo de la Mora. Querétaro, México.', en: 'Festival de la Joven Dramaturgia, workshop “Designing Machines for Time Travel”, led by Aristeo de la Mora. Querétaro, Mexico.' },
    ],
  },
  {
    title: { es: 'Experiencia', en: 'Experience' },
    items: [
      { year: '2017–2019', es: 'A cargo de la Galería Fundación Oscar Odín, Querétaro.', en: 'Director, Galería Fundación Oscar Odín, Querétaro.' },
      { year: '2014–2016', es: 'Asistente del escultor David Manzanares.', en: 'Assistant to the sculptor David Manzanares.' },
      { year: '2013–2014', es: 'Becario en «Gestión Cultural y Formación de Grupos», UAQ.', en: 'Fellow, “Cultural Management and Group Formation”, UAQ.' },
    ],
  },
  {
    title: { es: 'Docencia', en: 'Teaching' },
    items: [
      { year: '2020–2023', es: 'Taller «Aprende a dibujar para la creatividad», encuentro cultural Somos UAQ, Universidad Autónoma de Querétaro.', en: 'Workshop “Learn to Draw for Creativity”, Somos UAQ cultural meeting, Universidad Autónoma de Querétaro.' },
      { year: '2020', es: 'Taller «Introducción a la pintura», Gestión Cultural y Creación de Grupos, UAQ.', en: 'Workshop “Introduction to Painting”, Cultural Management and Group Creation, UAQ.' },
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
    num: '02',
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
    num: '03',
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
    num: '04',
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

// ── _MÁQUINAS ──────────────────────────────────────────────────
// Proyecto participativo. La app vive en `url` (repo diegodeshuesado/maquinas);
// aquí se presenta como obra y cada máquina muestra en vivo las piezas aprobadas.
export const maquinas = {
  id: 'maquinas',
  num: '01',
  url: 'https://maquinas.diegodeshuesado.com',
  title: { es: '_máquinas', en: '_máquinas' },
  subtitle: { es: 'Instructivos participativos', en: 'Participatory instruction manuals' },
  years: '2019–2026',
  ficha: {
    es: ['Instructivos participativos; resultados fotográficos, textuales y narrativos.', 'Montaje en muro con carpetas e instructivos impresos, Galería Libertad (LaTA 2.0), Querétaro, 2019.', 'Versión en línea, 2026.'],
    en: ['Participatory instruction manuals; photographic, textual and narrative results.', 'Wall installation with folders and printed manuals, Galería Libertad (LaTA 2.0), Querétaro, 2019.', 'Online version, 2026.'],
  },
  text: {
    es: [
      '_máquinas son instructivos que reinterpretan las relaciones entre personas en los espacios. Cada máquina propone una operación —renombrar un lugar con poesía, trazar constelaciones con las luces de la ciudad, intervenir un monumento— y quien la opera produce resultados visuales, textuales y narrativos.',
      'La pieza cuestiona la respuesta del tejido social a reglas preestablecidas y piensa el lenguaje como código, algoritmo o programa: si nuestras conductas siguen instrucciones, otras instrucciones pueden producir otras formas de habitar.',
      'Se presentó en 2019 en la Galería Libertad, dentro de LaTA 2.0, como un montaje de carpetas en muro, cada una con su operación e instructivo impreso. En 2026 las máquinas se reactivaron en línea: cualquier persona puede operarlas desde su celular y enviar su pieza, que se publica en la galería bajo licencia CC BY-NC-SA 4.0.',
    ],
    en: [
      '_máquinas are instruction manuals that reinterpret the relationships between people in spaces. Each machine proposes an operation —renaming a place with poetry, tracing constellations with the city lights, intervening a monument— and whoever operates it produces visual, textual and narrative results.',
      'The piece questions how the social fabric responds to pre-established rules and thinks of language as code, algorithm or program: if our behaviour follows instructions, other instructions can produce other ways of inhabiting.',
      'It was first shown in 2019 at Galería Libertad, within LaTA 2.0, as a wall installation of folders, each holding its operation and a printed manual. In 2026 the machines were reactivated online: anyone can operate them from their phone and submit their piece, which is published in the gallery under a CC BY-NC-SA 4.0 licence.',
    ],
  },
  items: [
    {
      id: 'constelaciones_urbanas', nombre: 'constelacio-<br>nes_urbanas', activa: true,
      credito: { es: 'Diego Deshuesado y Daniel Vázquez', en: 'Diego Deshuesado and Daniel Vázquez' },
      op: { es: 'Crear un compendio mitológico de constelaciones ficticias trazadas con las luces de la ciudad.', en: 'Create a mythological compendium of fictional constellations traced with the city lights.' },
      desc: {
        es: 'El propósito es reimaginar el cielo nocturno en los espacios públicos. Se delimita una zona en el mapa, se fotografían tres o más objetos que emitan luz —en la calle o dentro de casa— y se unen con líneas para dibujar la constelación. Al final se escribe su origen como un mito o una invención, y la pieza se suma al mapa de constelaciones del área.',
        en: 'The aim is to reimagine the night sky in public spaces. You mark an area on the map, photograph three or more light-emitting objects —on the street or at home— and join them with lines to draw the constellation. Finally you write its origin as a myth or an invention, and the piece joins the map of constellations of the area.',
      },
      materiales: { es: 'Celular con cámara.', en: 'A phone with a camera.' },
    },
    {
      id: 'un_pueblo_feliz', nombre: 'un_pue-<br>blo_feliz', activa: true,
      op: { es: 'Contrarrestar el discurso de estabilidad social con selfies sonrientes acompañadas de datos reales de violencia.', en: 'Counter the discourse of social stability with smiling selfies accompanied by real data on violence.' },
      desc: {
        es: 'Se elige una cifra real de violencia en México, al azar o de la lista; las cifras se actualizan con los datos más recientes de fuentes oficiales y organizaciones civiles. Después se toma una selfie sonriendo y la cifra aparece sobre la foto como un filtro. El contraste entre la sonrisa y el dato pone en duda la imagen de un pueblo feliz.',
        en: 'You choose a real figure on violence in Mexico, at random or from the list; the figures are updated with the latest data from official sources and civil organisations. Then you take a smiling selfie and the figure appears over the photo like a filter. The contrast between the smile and the data calls into question the image of a happy people.',
      },
      materiales: { es: 'Celular con cámara.', en: 'A phone with a camera.' },
    },
    {
      id: 'poe_arqui_lecturas', nombre: 'poe_arqui_<br>lecturas', activa: true,
      op: { es: 'Renombrar espacios de un entorno mediante poesía.', en: 'Rename the spaces of an environment through poetry.' },
      desc: {
        es: 'Se delimita una zona y se consigue poesía, al gusto o al azar: en el buscador de la máquina, en libros a la mano o en la biblioteca más cercana. Al caminar se fotografían fachadas, pasillos, escaleras y calles, y se marca en el mapa dónde se tomó cada foto. A cada imagen se le pone al pie un fragmento de poema, y el conjunto se ordena como una narración foto-poética.',
        en: 'You mark an area and find some poetry, by choice or by chance: in the machine’s search engine, in books at hand or at the nearest library. While walking you photograph façades, corridors, stairs and streets, and mark on the map where each photo was taken. Each image gets a fragment of a poem as its caption, and the whole is arranged as a photo-poetic narrative.',
      },
      materiales: { es: 'Celular con cámara y poesía a la mano.', en: 'A phone with a camera and poetry at hand.' },
    },
    {
      id: 'anar_quitecturas', nombre: 'anar_quitec-<br>turas', activa: true,
      op: { es: 'Intervenir imágenes de monumentos, fachadas u objetos que representen el poder.', en: 'Intervene images of monuments, façades or objects that represent power.' },
      desc: {
        es: 'La intervención se hace con palabras, frases, imágenes y stickers: como un grafiti, una pinta o un meme. Se fotografía un monumento, una fachada o un objeto de poder —o se elige una imagen libre en el buscador de la máquina—, se interviene con trazos y texto, se nombra y, si se quiere, se acompaña de una consigna y se ubica en el mapa.',
        en: 'The intervention is made with words, phrases, images and stickers: like graffiti, a slogan painted on a wall or a meme. You photograph a monument, a façade or an object of power —or choose a free image in the machine’s search engine—, intervene it with lines and text, name it and, if you like, add a slogan and place it on the map.',
      },
      materiales: { es: 'Celular con cámara.', en: 'A phone with a camera.' },
    },
    {
      id: 'no_poesia', nombre: 'no_poe-<br>sía', activa: true,
      op: { es: 'Reescribir poesía con escritura asémica.', en: 'Rewrite poetry with asemic writing.' },
      desc: {
        es: 'Se elige un poema —al gusto, al azar o uno propio— y se escribe sin letras, verso por verso: se deja que la muñeca se mueva y el trazo se deslice mientras se medita o se dice en voz alta el verso. Esta escritura tiene un particular poder de fascinación por atípica y misteriosa, ya que invita a encontrar en ella sentidos ocultos.',
        en: 'You choose a poem —by taste, by chance or one of your own— and write it without letters, line by line: you let the wrist move and the stroke slide while meditating on or reading aloud the line being written. This writing holds a particular fascination for being unusual and mysterious, as it invites us to find hidden meanings in it.',
      },
      materiales: { es: 'Un poema y un celular (o pluma, plumón y papel).', en: 'A poem and a phone (or pen, marker and paper).' },
    },
    {
      id: 'ficciones_de_mi_barrio', nombre: 'ficciones_-<br>de_mi_barrio', activa: true,
      op: { es: 'Crear historias ficticias en calles de determinada colonia.', en: 'Create fictional stories in the streets of a given neighbourhood.' },
      desc: {
        es: 'Se elige una colonia, se hace un recorrido al azar y se fotografían fachadas, calles y paisajes urbanos que llamen la atención, marcando en el mapa dónde se tomó cada foto. A partir de esos lugares se escribe una historia ficticia: los nombres de las calles, lo que se cuenta en la colonia o la pura invención pueden ser el punto de partida.',
        en: 'You choose a neighbourhood, take a random walk and photograph façades, streets and urban landscapes that catch your eye, marking on the map where each photo was taken. From those places you write a fictional story: the street names, what people tell in the neighbourhood or pure invention can be the starting point.',
      },
      materiales: { es: 'Celular con cámara.', en: 'A phone with a camera.' },
    },
  ],
};
