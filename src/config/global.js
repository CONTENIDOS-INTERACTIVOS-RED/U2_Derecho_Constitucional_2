export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'La Justicia especial para la paz',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos constitucionales de la JEP',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Origen y naturaleza jurídica de la JEP',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios constitucionales e internacionales aplicables',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios constitucionales e internacionales aplicables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Salas y secciones de la JEP',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Procedimientos y sanciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bouvier, V. M. (2014). <em>Colombia: la construcción de la paz en tiempos de guerra</em>. Editorial Universidad del Rosario.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69654',
    },
    {
      referencia:
        'Fjeld, A., Paredes, D. & Paredes, D. (2016). <em>Intervenciones filosóficas en medio del conflicto: debates sobre la construcción de paz en Colombia hoy</em>. Universidad de los Andes.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70617?page=78',
    },
    {
      referencia:
        'Cepeda Ulloa, F. (2012). <em>Proceso de paz en Colombia: participación de actores internacionales</em>. Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69245?page=41',
    },
    {
      referencia:
        'Soleto, H. (2019). <em>La reparación económica a la víctima en el sistema de justicia</em>. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/118402',
    },
    {
      referencia:
        'Gómez, G. I. (2020). <em>Las disputas por la Jurisdicción Especial para la Paz (JEP): una reflexión crítica sobre su sentido político y jurídico</em>. Vniversitas, 69, 1–16.',
      link: 'https://doi.org/10.11144/Javeriana.vj69.djep',
    },
    {
      referencia:
        'Acosta-López, J., & Espitia Murcia, C. V. (2020). <em>Justicia restaurativa y reparación: desafíos de la JEP frente a una relación en construcción</em>. Vniversitas, 69, 1–31.',
      link: 'https://doi.org/10.11144/Javeriana.vj69.jrrd',
    },
    {
      referencia:
        'Hernández Jiménez, N. (2020). <em>De la privación a la restricción de la libertad y otras sanciones penales: ¿hacia un paradigma restaurativo en la justicia especial para la paz colombiana?</em>. Vniversitas, 69, 1–23.',
      link: 'https://doi.org/10.11144/Javeriana.vj69.prls',
    },
    {
      referencia:
        'Córdova Vianello, L. (2007). <em>Constitución, democracia y elecciones: la reforma que viene</em>. Instituto de Investigaciones Jurídicas – UNAM.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/74581',
    },
    {
      referencia:
        'Arenas Ávila, R. (2022). <em>Límites implícitos a las reformas constitucionales y la “Doctrina de la Estructura Básica”</em>. Universidad Externado de Colombia.',
      link:
        'https://cifd.uexternado.edu.co/limites-implicitos-a-las-reformas-constitucionales-y-la-doctrina-de-la-estructura-basica/',
    },
    {
      referencia:
        'Sogamoso Elizalde, Y. S. (2023). <em>Límites al poder de reforma constitucional: límites formales y sustantivos del poder de reforma constitucional en Colombia</em>. Estudios Socio-Jurídicos, 25(2).',
      link:
        'https://doi.org/10.12804/revistas.urosario.edu.co/sociojuridicos/a.12380',
    },
    {
      referencia:
        'Jaramillo Giraldo, J. E. (2013). <em>La problemática de los límites al poder de reforma de la Constitución Política de 1991</em>. Revista de la Facultad de Derecho y Ciencias Políticas, 43(118), 309–348.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-38862013000100010',
    },
  ],
  glosario: [
    {
      termino: 'Asamblea Nacional Constituyente',
      significado:
        'Órgano extraordinario encargado de reformar o redactar una nueva Constitución.',
    },
    {
      termino: 'Reforma constitucional',
      significado:
        'Proceso mediante el cual se introducen cambios al texto de la Constitución vigente.',
    },
    {
      termino: 'Acto legislativo',
      significado:
        'Mecanismo formal que permite modificar la Constitución mediante un trámite legislativo especial.',
    },
    {
      termino: 'Plebiscito',
      significado:
        'Mecanismo de participación mediante el cual el pueblo se pronuncia sobre decisiones del poder ejecutivo.',
    },
    {
      termino: 'Referendo',
      significado:
        'Mecanismo de participación mediante el cual se aprueba o rechaza un texto normativo.',
    },
    {
      termino: 'Consulta popular',
      significado:
        'Pregunta de carácter general formulada al pueblo sobre un asunto de trascendencia nacional.',
    },
    {
      termino: 'Iniciativa popular legislativa',
      significado:
        'Derecho de los ciudadanos para presentar proyectos de ley ante el Congreso.',
    },
    {
      termino: 'Constitución Política de 1991',
      significado:
        'Norma fundamental vigente en Colombia, aprobada por la Asamblea Nacional Constituyente.',
    },
    {
      termino: 'Bloque de constitucionalidad',
      significado:
        'Conjunto de normas que integran la Constitución aunque no estén expresamente en su texto.',
    },
    {
      termino: 'Control de constitucionalidad',
      significado:
        'Facultad de la Corte Constitucional para verificar la conformidad de las normas con la Constitución.',
    },
    {
      termino: 'Democracia participativa',
      significado:
        'Modelo democrático en el que los ciudadanos cuentan con mecanismos directos de intervención en las decisiones públicas.',
    },
    {
      termino: 'Mecanismos de participación ciudadana',
      significado:
        'Instrumentos mediante los cuales los ciudadanos intervienen en asuntos públicos.',
    },
    {
      termino: 'Control político',
      significado:
        'Facultad del Congreso para ejercer vigilancia sobre el gobierno y la administración pública.',
    },
    {
      termino: 'Estado social de derecho',
      significado:
        'Modelo de Estado que garantiza derechos fundamentales y promueve la justicia social.',
    },
    {
      termino: 'Principio de soberanía popular',
      significado:
        'Reconocimiento de que el poder político emana del pueblo y debe ejercerse en su nombre.',
    },
  ],
}
