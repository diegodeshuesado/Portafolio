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
  email: 'diegogut93@gmail.com',
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
