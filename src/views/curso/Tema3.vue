<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Límites y control de las reformas constitucionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") En una democracia constitucional como la colombiana, la posibilidad de reformar la Constitución refleja la naturaleza dinámica del derecho constitucional. La Carta Política no es un texto inmutable: debe responder a transformaciones históricas, sociales, económicas y culturales. Sin embargo, esta apertura al cambio no significa ausencia de restricciones. Existen límites formales y materiales que regulan el ejercicio del poder de reforma, con el fin de preservar la identidad esencial de la Constitución y garantizar la continuidad de los principios fundacionales del Estado (Jaramillo Giraldo, 2013).
    
    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 El poder de reforma: entre lo permitido y lo prohibido
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El poder de reforma constitucional, aunque reconocido por la misma Constitución, no es soberano ni ilimitado. Se trata de un poder constituido, es decir, un poder derivado y subordinado al orden constitucional vigente. Así, tanto el Congreso (a través de actos legislativos), como el pueblo (mediante referendos) o una asamblea constituyente (convocada legítimamente), deben actuar respetando los límites establecidos. De lo contrario, las reformas pueden degenerar en rupturas encubiertas del orden constitucional.
    
        .bg-color-2.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta tensión entre reforma y sustitución ha sido uno de los ejes más importantes del constitucionalismo colombiano contemporáneo, especialmente a través de la jurisprudencia de la Corte Constitucional.

    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Límites formales y materiales
    
    p.mb-5 El análisis de los límites a la reforma se divide en dos grandes categorías:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-lg-1
              h5 Límites formales:
              p Se refieren al cumplimiento riguroso del procedimiento previsto en la Constitución para tramitar una reforma. Incluyen:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 o	La aprobación en los tiempos y por las mayorías exigidas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 o	Las reglas específicas para cada mecanismo (acto legislativo, referendo, asamblea constituyente).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 o	La deliberación legislativa y la publicidad del proceso.
              p Estos no son simples requisitos técnicos: constituyen garantías de legalidad, transparencia y deliberación democrática.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-lg-1
              h5 Límites materiales
              p Aluden al contenido de la reforma. Aunque Colombia no cuenta con una cláusula de intangibilidad explícita, la Corte Constitucional ha desarrollado la doctrina de los elementos esenciales de la Constitución: principios como la dignidad humana, la separación de poderes, la democracia participativa, el Estado Social de Derecho y los derechos fundamentales son considerados irrenunciables e insustituibles mediante mecanismos de reforma ordinaria (Jaramillo Giraldo, 2013).
    
    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 La teoría de la sustitución de la Constitución
      
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8
        p La teoría de la sustitución constituye uno de los mayores aportes de la jurisprudencia constitucional colombiana al derecho público latinoamericano. Según esta doctrina:
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Una reforma que altere sustancialmente los pilares fundamentales del orden constitucional no es válida.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Tal reforma equivale a una sustitución de la Constitución, la cual solo puede realizarse mediante el poder constituyente originario, es decir, a través de una asamblea constituyente legítima.
        p Por ejemplo, intentar eliminar la independencia judicial, suprimir el principio de separación de poderes o restringir de forma severa derechos fundamentales no puede hacerse por vía de un acto legislativo, aunque cumpla las formalidades procedimentales.
    
    .row.align-items-center.mb-3.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Rol de la Corte Constitucional
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El control de constitucionalidad de las reformas corresponde a la Corte Constitucional, que ha asumido un rol activo como guardiana de la integridad del texto constitucional. Su jurisprudencia ha dejado claro que:
    
        .bg-color-7.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 No basta con cumplir los procedimientos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 También es necesario respetar el contenido esencial de la Constitución.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 El juez constitucional no solo protege la forma, sino también el proyecto ético y político de la Constitución de 1991.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este control es indispensable para evitar el uso abusivo del poder de reforma por actores políticos que buscan concentrar el poder, debilitar los contrapesos o perpetuarse en el cargo. El estudio de los límites y el control de las reformas constitucionales permite comprender cómo el derecho constitucional colombiano equilibra cambio y continuidad institucional. La reforma constitucional es una herramienta necesaria, pero también peligrosa si se utiliza sin restricciones. De allí la importancia de:
    
        .bg-color-4.p-5(data-aos="fade-left").mb-3
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Garantizar que el poder de reforma se ejerza dentro de los marcos normativos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Fortalecer el rol de la Corte Constitucional como árbitro de legitimidad.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Promover una ciudadanía vigilante, capaz de identificar cuándo se pretende desnaturalizar el pacto democrático.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Límites materiales a la reforma
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.order-2
          figure
            img(src='@/assets/curso/tema3/10.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Aunque la Constitución de 1991 permite introducir reformas mediante diversos mecanismos —acto legislativo, referendo o Asamblea Nacional Constituyente—, existe una zona de protección normativa que no puede ser modificada por vías ordinarias sin desnaturalizar el orden constitucional. Esta zona no está descrita mediante cláusulas pétreas explícitas, pero ha sido delimitada por la Corte Constitucional a través de la doctrina de la sustitución de la Constitución, establecida en la sentencia C-551 de 2003 (Córdova Vianello, 2007).
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .row.align-items-center.mb-5.justify-content-center
          .col-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
          .col
            h2.mb-0 La doctrina de la sustitución constitucional
        p(data-aos="fade-left") La doctrina de la sustitución afirma que el Congreso y los demás órganos reformadores pueden modificar la Constitución, pero no pueden sustituirla. Es decir, no pueden alterar los pilares esenciales del orden constitucional, aunque cumplan los requisitos procedimentales. Esta doctrina protege el contenido fundamental de la Constitución frente al riesgo de que una reforma encubierta intente cambiar su identidad estructural sin acudir al poder constituyente originario.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Ejes materiales protegidos
    
    p.mb-5 Los límites materiales se proyectan sobre dimensiones sustantivas que constituyen el núcleo del sistema constitucional colombiano. Entre ellas se destacan:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Dignidad humana") Es la base del Estado Social de Derecho y sustento de los derechos fundamentales como la vida, igualdad, salud, libertad e integridad. Cualquier reforma que restrinja estos derechos resulta inválida.
          p(numero="2" titulo="Modelo democrático participativo y plural") Exige alternancia en el poder, participación ciudadana y pluralismo. Las reformas que pretendan perpetuar a un gobernante, como en el caso de la segunda reelección presidencial en 2010 (sentencia C-141 de 2010), son inconstitucionales.
          p(numero="3" titulo="Separación de poderes y frenos y contrapesos") Debilitar funciones como el control constitucional o la independencia judicial rompe el equilibrio institucional y equivale a una sustitución de la Constitución.
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="4" titulo="Estado Social de Derecho") El Estado no solo debe garantizar el orden, sino también promover la equidad y la justicia social. Una reforma que elimine estas funciones o reduzca la protección social vulnera este principio esencial.
          p(numero="5" titulo="Interés general sobre el particular") Toda reforma que anteponga intereses privados o de grupo al bien común contradice los fundamentos del pacto constitucional.
          p(numero="6" titulo="Jurisdicción constitucional y sus instituciones") Órganos como la Corte Constitucional, la acción de tutela, el bloque de constitucionalidad y la Defensoría del Pueblo son esenciales. Su eliminación o debilitamiento compromete la estructura del Estado.

    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Jurisprudencia relevante
    
    p.mb-5 La Corte ha desarrollado esta doctrina a través de múltiples sentencias, entre las que destacan:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/14.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="0%" y="67.5%" numero="+")
                h5 C-551 de 2003
                p Establece la base de la teoría de la sustitución constitucional. Determina que el Congreso no puede redefinir los principios esenciales de la Constitución.
    
              .bg-color-white.box-shadow.p-3(x="1%" y="43%" numero="+")
                h5 C-588 de 2009
                p Advierte sobre los intentos de alterar el equilibrio de poderes y resalta la importancia de proteger la función legislativa del Congreso..
    
              .bg-color-white.box-shadow.p-3(x="80%" y="43%" numero="+")
                h5 C-1040 de 2005
                p Autoriza la primera reelección presidencial, pero aclara que la reelección indefinida no es admisible, ya que modificaría la esencia del sistema democrático.
    
              .bg-color-white.box-shadow.p-3(x="81%" y="68%" numero="+")
                h5 C-141 de 2010
                p Declara inexequible el referendo que buscaba una segunda reelección presidencial, al considerar que vulnera el principio de alternancia en el ejercicio del poder.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Control judicial y participación ciudadana
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El control de estos límites está en manos de la Corte Constitucional, que actúa tras la aprobación de la reforma por parte del Congreso u otro órgano reformador. Cualquier ciudadano, organización o entidad pública (como la Procuraduría) puede presentar una demanda de inconstitucionalidad o una acción de tutela.
    
        .bg-color-4.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este sistema no solo protege el orden jurídico actual, sino que blinda el futuro democrático del país. Evita que una mayoría con poder coyuntural desmonte instituciones fundamentales sin pasar por el canal adecuado: una Asamblea Nacional Constituyente, que es el único órgano legítimo para redefinir la identidad constitucional.

    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Comparación con derecho comparado
    
      .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Colombia no posee cláusulas pétreas expresas como Alemania (art. 79 de la Ley Fundamental) o Sudáfrica (prohibición de reformas racistas). Sin embargo, ha desarrollado una solución flexible y eficaz: limitaciones implícitas con eficacia real, construidas desde la jurisprudencia.
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 Esta doctrina ofrece un equilibrio entre flexibilidad constitucional y protección estructural, garantizando que las reformas sean posibles, pero no destruyan el fundamento normativo que sostiene el sistema.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Límites formales y control de constitucionalidad
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Límites formales y control de constitucionalidad, donde se aborda el análisis detallado de los requisitos procedimentales que deben cumplirse para llevar a cabo reformas constitucionales en Colombia, así como el papel del control jurisdiccional en su garantía.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Límites formales y control de constitucionalidad
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/18.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/61003?page=25 " target="_blank" rel="noopener noreferrer") Rodríguez Gaona, R. (2006). El control constitucional de la reforma a la constitución: ( ed.). Dykinson. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.ucc.edu.co/server/api/core/bitstreams/eb85940d-6f7f-4102-b475-01608ce58992/content  " target="_blank" rel="noopener noreferrer") Baena Álvarez, J. H. (2021). La legitimidad del control constitucionalidad sobre las leyes y las reformas constitucionales [Trabajo de grado, Universidad Cooperativa de Colombia]. Repositorio Institucional UCC. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.21017/rev.repub.2023.v35.a157 " target="_blank" rel="noopener noreferrer") Palacios Valencia, Yennesit, Cruz Mahecha, Diego Enrique, & Valencia-Jiménez, Walter Gerardo. (2023). EL CONTROL DE LAS REFORMAS CONSTITUCIONALES EN COLOMBIA: RETOS Y OPORTUNIDADES EN LA CONSOLIDACIÓN DEMOCRÁTICA. Revista republicana, (35), 227-248. Publicación electrónica del 9 de noviembre de 2023. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.icesi.edu.co/items/5f9b8cea-31ce-7785-e053-2cc003c84dc5   " target="_blank" rel="noopener noreferrer") Cajas, M. A. (2008). El control judicial a la reforma constitucional. Colombia (1910-2007). 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=r6hLEu7htyg" target="_blank" rel="noopener noreferrer") La biblioteca de Gero. (2025b, 21 de marzo). Reforma constitucional límites y controles [Vídeo]. YouTube. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-0blJR3-np8 " target="_blank" rel="noopener noreferrer") Facultad de Derecho. (2020, 18 de marzo). Luis Fernando Angulo   Constitucional colombiano   Clase 1 [Vídeo]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el principal fundamento normativo que dio origen a la Jurisdicción Especial para la Paz (JEP)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ley 1957 de 2019',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ley 1448 de 2011',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Acto legislativo 01 de 2017',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Sentencia C-674 de 2017',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué principio constitucional es importante para el funcionamiento de la JEP, pues sitúa a las víctimas en el centro del proceso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Proporcionalidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dignidad humana',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Legalidad penal',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Separación de poderes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes salas de la JEP tiene como función priorizar macro casos y determinar hechos y responsabilidades?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Sala de reconocimiento de verdad, responsabilidad y determinación de los hechos y conductas',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Sala de definición de situaciones jurídicas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sala de amnistía o indulto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Sección de primera instancia sin reconocimiento de responsabilidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es una característica fundamental de la JEP que la diferencia de la justicia ordinaria?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Su naturaleza consultiva',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Su dependencia de la Corte Constitucional',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Su carácter autónomo y transitorio',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Su enfoque retributivo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el tipo de sanción impuesta por la JEP a quienes reconocen tempranamente su responsabilidad y contribuyen a la verdad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sanción penal ordinaria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sanción privativa de libertad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sanción propia de carácter restaurativo',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Sanción económica retroactiva',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
