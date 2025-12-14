<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Estructura, competencias y procedimientos de la JEP'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Comprender el funcionamiento de la Jurisdicción Especial para la Paz (JEP) exige conocer en detalle tanto su organización interna como el alcance de sus competencias judiciales. La arquitectura institucional de la JEP no es una copia de la justicia ordinaria ni una creación arbitraria. Por el contrario, fue diseñada de forma intencionada para atender las particularidades del conflicto armado colombiano y para dar cumplimiento a los principios de verdad, justicia, reparación y no repetición.
        p(data-aos="fade-left") La estructura de esta jurisdicción responde a un enfoque funcional y restaurativo, centrado en las víctimas. Busca conjugar la solidez técnica del derecho con una sensibilidad ética frente al daño histórico sufrido por millones de personas. Su diseño institucional pretende garantizar una justicia eficaz, legítima y sintonizada con los estándares del derecho nacional e internacional. A lo largo de este tema se abordarán los siguientes aspectos: 
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-4.p-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Los órganos que componen la JEP</b> y su respectiva distribución de funciones.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Las competencias asignadas a cada órgano</b>, con base en el marco constitucional, legal y reglamentario.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Los procedimientos diferenciados</b> que caracterizan esta jurisdicción frente a la justicia penal ordinaria.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>El sistema de sanciones</b>, adaptado al modelo de justicia transicional y fundamentado en el nivel de responsabilidad y colaboración de los comparecientes.
        
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Estas dinámicas procesales representan una innovación dentro del sistema jurídico colombiano, ya que integran elementos formales con mecanismos restaurativos. Se privilegia el reconocimiento del daño, el esclarecimiento de los hechos y la participación activa de las víctimas, en concordancia con los postulados de justicia transicional (Soleto, 2019).
    
        .bg-color-7.p-5(data-aos="fade-left")
          p.mb-0 El análisis de la estructura y procedimientos de la JEP permite reflexionar críticamente sobre la capacidad del derecho para adaptarse a contextos de posconflicto. También invita a evaluar su eficacia para satisfacer las demandas sociales de justicia, sin cerrar la puerta a la reconciliación y consolidación de la paz. Esta exploración va más allá de identificar instancias y funciones; implica examinar su funcionamiento real, sus avances, dificultades y su impacto en la construcción de confianza institucional, en la garantía de derechos y en la reparación del tejido social (Soleto, 2019).
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Salas y secciones de la JEP

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/5.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La Jurisdicción Especial para la Paz fue concebida como una estructura judicial innovadora dentro del constitucionalismo colombiano. A diferencia del esquema tradicional de una corte penal, su diseño funcional distingue fases, roles y procedimientos específicos, enmarcados en un enfoque de justicia transicional. Este diseño incluye tres Salas de Justicia y un Tribunal para la Paz, cuya labor articulada busca avanzar en la verdad, la justicia, la reparación y la no repetición. Su objetivo no es solo garantizar eficiencia judicial, sino también legitimidad social y participación de las víctimas (Gómez, 2020).
    
    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Las tres salas de justicia
    
    p.mb-5 Las Salas de Justicia son el punto de entrada del proceso en la JEP. Cada una cumple una función específica para clasificar y abordar los casos según su gravedad y contexto, bajo un enfoque restaurativo y centrado en las víctimas.

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Sala de Reconocimiento de Verdad, de Responsabilidad y de Determinación de los Hechos y Conductas") Constituye el punto de partida del proceso. Identifica patrones de macrocriminalidad mediante el análisis de informes oficiales, versiones voluntarias, documentación institucional y aportes de víctimas. Su objetivo es reconstruir estructuras criminales, jerarquías y ciclos de violencia sistemáticos. Ejemplo: el macro caso 03 sobre los “falsos positivos”, en el que se reveló una política institucional de ejecuciones extrajudiciales.
          p(numero="2" titulo="Sala de Amnistía o Indulto") Evalúa la posibilidad de conceder beneficios jurídicos por conductas amnistiables, siempre que no se trate de crímenes de guerra, de lesa humanidad, genocidio o violencia sexual. Requiere reconocimiento de responsabilidad y colaboración con la verdad. Las medidas otorgadas se condicionan a la participación en actividades restaurativas y el compromiso de no repetición.
          p(numero="3" titulo="Sala de Definición de Situaciones Jurídicas") Atiende casos que no están relacionados con macrocriminalidad ni con violaciones graves. Su objetivo es evitar la criminalización de personas con roles secundarios o marginales. Puede aplicar soluciones alternas al proceso penal, sanciones simbólicas o no privativas de libertad, con un enfoque de proporcionalidad y eficiencia judicial.

    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 El Tribunal para la Paz y sus secciones
    
    p.mb-5 El Tribunal para la Paz es el órgano decisorio final de la JEP. Imparte justicia teniendo en cuenta los reconocimientos voluntarios, el grado de colaboración y la evidencia disponible. Está conformado por distintas secciones, cada una con funciones específicas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Primera Instancia con Reconocimiento de Responsabilidad
              p Impone sanciones propias, no privativas de libertad, dirigidas a quienes reconocen responsabilidad. Estas sanciones incluyen actos de reparación, participación comunitaria, reconstrucción de memoria histórica y perdón público.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Primera Instancia sin Reconocimiento de Responsabilidad
              p Atiende casos en los que no hay reconocimiento o este es contradictorio. Puede imponer sanciones alternativas u ordinarias, incluida la prisión. Reafirma que la falta de colaboración conlleva consecuencias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Revisión y Apelación
              p Resuelve recursos, conflictos entre salas y verifica el cumplimiento del debido proceso. Garantiza la coherencia interna del sistema y actúa como órgano de control jurídico.

    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Coordinación, nombramientos y articulación interinstitucional
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La relación entre salas y secciones no es jerárquica, sino funcional y articulada. Cada órgano actúa con independencia técnica, pero dentro de una lógica colaborativa. Las audiencias públicas, los recursos de apelación y los mecanismos de seguimiento refuerzan esta estructura como un sistema judicial vivo, conectado con la memoria colectiva y las comunidades.
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El proceso de selección de magistrados fue innovador, con una convocatoria nacional e internacional, criterios de diversidad étnica, regional, de género y profesional, y evaluación por comisiones independientes. Esta pluralidad fortaleció la legitimidad de la JEP y su percepción como un tribunal imparcial e incluyente.
        p Además, la JEP articula su trabajo con la Comisión de la Verdad, la Unidad de Búsqueda de Personas Desaparecidas y los programas de reparación colectiva e individual, generando una sinergia institucional que ha sido reconocida internacionalmente como un modelo sistémico de justicia transicional (Gómez, 2020).

    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Retos y evaluación
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La JEP ha enfrentado presiones políticas orientadas a limitar su competencia, independencia presupuestal o funcionamiento administrativo. No obstante, la Corte Constitucional ha respaldado su autonomía, y la comunidad internacional ha ofrecido apoyo técnico y simbólico. Evaluar su efectividad exige revisar tanto su diseño institucional como su capacidad real de funcionar con independencia, operatividad y fidelidad a los principios de justicia transicional.
    
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 Comprender la interacción entre salas y secciones es fundamental para valorar el modelo de justicia adoptado. Cada instancia tiene un propósito especializado, un público específico y una responsabilidad institucional. La articulación permite una jurisprudencia estratégica y una narrativa jurídica que pone en primer plano la dignidad humana, la reparación y la construcción de paz.
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Procedimientos y sanciones
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La Jurisdicción Especial para la Paz (JEP) ha transformado profundamente la manera en que se concibe y aplica la justicia penal en Colombia. Esta transformación no solo radica en su estructura y finalidad transicional, sino también en su sistema de procedimientos y sanciones, basado en principios restaurativos, generadores de verdad y centrados en las víctimas.
    
        .bg-color-4.p-5(data-aos="fade-left")
          p.mb-0 Lo que distingue a la JEP no es únicamente el tipo de crímenes que investiga, sino el modo como los aborda, prioriza, juzga y sanciona. Este enfoque busca comprender el conflicto armado como una violencia sistemática, no como una serie de hechos aislados.

    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Activación del procedimiento
    
    .bg-full-width.bg-color-6
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-5 El proceso se inicia con el ingreso de informes provenientes de diversas fuentes: la Fiscalía General de la Nación, comparecientes (como exmiembros de las FARC o del Ejército Nacional), víctimas, organizaciones de la sociedad civil y organismos internacionales. Estos documentos permiten a la Sala de Reconocimiento de Verdad, Responsabilidad y Determinación de los Hechos y Conductas priorizar macro casos, es decir, situaciones que revelan patrones históricos y estructuras de violencia organizadas (Acosta-López & Espitia Murcia, 2020).
        
            .bg-color-2.p-5(data-aos="fade-left")
              h5 Una vez priorizado un caso, la Sala convoca a audiencias en las que los comparecientes pueden:
              ul.lista-ul--color.mb-0
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Aceptar su responsabilidad</b>, lo cual activa el camino restaurativo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Negar o presentar versiones contradictorias</b>, lo cual abre una ruta litigiosa con procedimientos similares al sistema penal tradicional.

        .row.align-items-center.mb-3.justify-content-center
          .col-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
          .col
            h2.mb-0 Rol activo de las víctimas

        p.mb-5 Durante todo el proceso, las víctimas no son simples testigos. Se convierten en actores centrales del procedimiento, con derecho a:

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 01
                  p.mb-0 Formular preguntas.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 02
                  p.mb-0 Proponer reparaciones simbólicas o colectivas.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 03
                  p.mb-0 Presentar pruebas y testimonios.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 03
                  p.mb-0 Participar activamente en audiencias públicas.

        .bg-full-width.bg-color-3.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 Este modelo rompe con la lógica pasiva de la justicia penal ordinaria y reafirma la centralidad de las víctimas.
        
    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Estructura del procedimiento

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema2/21.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") El modelo procesal de la JEP es bifurcado. Si el compareciente reconoce responsabilidad, el caso se transfiere al Tribunal para la Paz para definir una sanción restaurativa. Si no hay reconocimiento, se abre un camino más formal con investigación, presentación de cargos, prueba y eventual condena (Acosta-López & Espitia Murcia, 2020).
    
    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Tipos de sanciones
    
    p.mb-5 El sistema sancionatorio se divide en tres categorías, determinadas por el nivel de verdad, responsabilidad y colaboración del compareciente:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/22.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="44.5%" y="14.5%" numero="+")
                h5 Sanciones propias
                p Requieren reconocimiento temprano, verdad plena y compromiso con las víctimas. No implican cárcel, pero sí obligaciones restaurativas: reparación simbólica, reconstrucción comunitaria, narración pública, memoria histórica. Ejemplo: En el macro caso 01, excomandantes de las FARC participaron en proyectos comunitarios en el Pacífico (Hernández Jiménez, 2020).
    
              .bg-color-white.box-shadow.p-3(x="65%" y="14.5%" numero="+")
                h5 Sanciones alternativas
                p Aplicadas ante reconocimiento tardío o parcial y colaboración limitada. Combinan prisión moderada (5 a 8 años) en centros especiales con trabajo comunitario o actividades restaurativas. Mantienen un componente penal con enfoque proporcional.
    
              .bg-color-white.box-shadow.p-3(x="86%" y="14.5%" numero="+")
                h5 Sanciones ordinarias
                p Se imponen cuando no hay reconocimiento de responsabilidad ni colaboración. El proceso sigue el modelo penal tradicional: investigación formal, acusación, juicio y posible condena de hasta 20 años. Se garantizan todas las garantías procesales.
    
    .bg-full-width.bg-color-6
      .px-4.px-md-5
        .row.align-items-center.mb-3.justify-content-center
          .col-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
          .col
            h2.mb-0 Supervisión del cumplimiento
        
        p.mb-5 La Unidad de Seguimiento, Monitoreo y Verificación del Cumplimiento de Sanciones, órgano autónomo de la JEP, tiene la responsabilidad de verificar el cumplimiento efectivo de las sanciones propias y alternativas. Evalúa:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/23.svg" alt="" style="width: 90px")
              h5.text-center 01
              p.mb-0.text-center Asistencia a actividades restaurativas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/24.svg" alt="" style="width: 90px")
              h5.text-center 02
              p.mb-0.text-center Ejecución de proyectos comunitarios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/25.svg" alt="" style="width: 90px")
              h5.text-center 03
              p.mb-0.text-center Relación con las víctimas.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/26.svg" alt="" style="width: 90px")
              h5.text-center 04
              p.mb-0.text-center Calidad y efectividad de las acciones realizadas.

        .bg-full-width.bg-color-3.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 El incumplimiento puede llevar a la recalificación de la sanción, convirtiendo una restaurativa en una sanción ordinaria, lo cual fortalece la credibilidad del sistema.

    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 constitucionales 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/27.png", data-aos="zoom-in")
      .col-lg-8
        p La Corte Constitucional ha avalado este sistema al considerar que, bien regulado, no equivale a impunidad. Siempre que:
        .bg-color-1.p-5(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Se respete el derecho a la verdad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Las víctimas participen activamente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Las sanciones sean proporcionales.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Exista un seguimiento estricto.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Entonces el modelo cumple con los principios de justicia, legalidad y dignidad humana. Así lo han reconocido también la Comisión Interamericana de Derechos Humanos y la Fiscalía de la Corte Penal Internacional.
    
        .bg-color-7.p-5(data-aos="fade-left").mb-3
          p.mb-0 Además, el procedimiento de la JEP es dialógico y adaptable. Las sentencias pueden revisarse si aparecen nuevas pruebas, si hay incumplimiento de medidas o si las víctimas lo solicitan. La transparencia también es clave: las audiencias son públicas, grabadas, transmitidas y las decisiones se difunden oficialmente (Acosta-López & Espitia Murcia, 2020).
        p El modelo de procedimientos y sanciones de la JEP trasciende la lógica punitiva clásica. Su objetivo no es solo castigar, sino transformar el daño en reparación social. Al permitir que quienes participaron en el conflicto reparen con acciones y no solo con encierro, se avanza hacia una justicia transicional con sentido restaurativo, simbólico y colectivo.
        p Estudiar este modelo permite comprender que no se trata únicamente de una reforma legal, sino de una propuesta de justicia integral. Esta busca articular la verdad, participación y reparación en un marco de dignidad humana, respeto a las víctimas y compromiso con la paz.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dx.doi.org/10.4067/S0718-00122022000300022 " target="_blank" rel="noopener noreferrer") Marín Ordoñez, Jennifer Stella, Aragón Mora, Fernando Aníbal, Escarria Parra, Daniela Melissa, Erazo Reyes, Hugo Leonardo, Pabón Sanchez, Marly katherine, Calero Cano, Andrés Fernando, & Silva Riaño, Fabio Arturo. (2022). La cuestión de la competencia para juzgar la conducta de agentes estatales en el marco de la Jurisdicción Especial para la Paz. Ius et Praxis , 28 (3), 22-40. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-86972019000200164&lng=en&tlng=es." target="_blank" rel="noopener noreferrer") BLANCO CORTINA, DAVID. (2019). Proporcionalidad y sanciones transicionales Análisis del modelo de castigo de la Jurisdicción Especial para la Paz (JEP). Revista de Derecho , (52), 164-192.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.11144/Javeriana.vj69.spcj " target="_blank" rel="noopener noreferrer") Sánchez León, N. C., & Jiménez Ospina, A. (2020). La selección y priorización de casos en la Jurisdicción Especial para la Paz. Vniversitas, 69, 1-26. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.22395/ojum.v17n35a12 " target="_blank" rel="noopener noreferrer") Agudelo Posada, Juan José. (2018). Jurisdicción Especial para la Paz vs. jurisdicción ordinaria: ámbitos de competencia. Opinión Jurídica, 17 (spe35), 281-297. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.11144/Javeriana.vj69.tpsj  " target="_blank" rel="noopener noreferrer") Tarapués Sandino, D. F. (2020). El Tribunal para la Paz y las Salas de Justicia de la JEP como órganos jurisdiccionales sui generis. Vniversitas, 69, 1-20. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.unal.edu.co/handle/unal/80845   " target="_blank" rel="noopener noreferrer") Oliveros Coral, J. (2022). ¿Es posible la caracterización de sanciones en Justicia Transicional? Justicia y Paz, una experiencia por revisar. Universidad Nacional de Colombia. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=qnB0PpAaBw8 " target="_blank" rel="noopener noreferrer") NED - Internacional. (2022, 30 de noviembre). 8 AÑOS DE IMPUNIDAD. Las absurdas sanciones de la JEP [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.youtube.com/watch?v=_HyMGCce0g0  " target="_blank" rel="noopener noreferrer") Universidad EIA -canal de apoyo académico-, NTE. (2016, 21 de septiembre). EIA - Acuerdo Final. 5. Víctimas. Jurisdicción Especial para la Paz III (6/9) [Vídeo]. YouTube.

 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
