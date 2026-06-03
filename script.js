/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - FOLDER SYSTEM & HOVER SLIDESHOW (LIGHT PASTEL)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- BASE DE DATOS DE IMÁGENES POR CARPETA ---
  const folderDatabase = {
    'tfg': {
      title: 'Trabajo Fin de Grado (TFG)',
      category: 'Diseño Industrial',
      desc: 'Proyecto de investigación y desarrollo de un sistema de movilidad urbana modular sostenible, validado mediante prototipos físicos y simulación CAD.',
      cover: 'tfg/conjunto.jpg',
      images: [
        {
          src: 'tfg/conjunto.jpg',
          title: 'Sistema de Envases de Cosmética - Render de Conjunto',
          materials: 'Acero inoxidable, polímeros reciclados',
          software: '3ds Max, V-Ray',
          role: 'Ecodiseño y Modelado CAD',
          year: '2025',
          desc: 'Vista de conjunto de los envases diseñados para cosméticos desde el punto de vista del ecodiseño.'
        },
        {
          src: 'tfg/todoslosproto.jpg',
          title: 'Evolución de Modelos de Estudio y Pruebas',
          materials: 'Diversos materiales de prueba',
          software: 'Prototipado Analógico',
          role: 'Investigación Formal',
          year: '2025',
          desc: 'Modelos creados durante el proceso de pruebas para validar cierres y volumen.'
        },
        {
          src: 'tfg/protopro3.jpg',
          title: 'Prototipo de Resina de los Envases',
          materials: 'Impresión 3D de Resina',
          software: 'Fabricación Aditiva',
          role: 'Validación Funcional',
          year: '2025',
          desc: 'Modelos físicos impresos en resina de los envases finales.'
        },
        {
          src: 'tfg/protopro1.jpg',
          title: 'Prototipo Final Detalle de Cierre',
          materials: 'Resina y laca protectora',
          software: 'Impresión 3D',
          role: 'Validación de Cierre y Ensamble',
          year: '2025',
          desc: 'Detalle físico del ensamble y el sistema de apertura.'
        },
        {
          src: 'tfg/protopro2.jpg',
          title: 'Piezas Cortadas por Láser para Embalaje',
          materials: 'Cartón microondulado',
          software: 'Cortadora Láser',
          role: 'Diseño de Packaging',
          year: '2025',
          desc: 'Montaje final de las cajas de cartón cortadas mediante láser.'
        },
        {
          src: 'tfg/protocutre.jpg',
          title: 'Maqueta de Volumen Inicial',
          materials: 'Cartón y papel',
          software: 'Prototipado Rápido',
          role: 'Validación de Proporciones',
          year: '2025',
          desc: 'Primer prototipo rápido en cartón para el estudio del volumen en mano.'
        },
        {
          src: 'tfg/indice.jpg',
          title: 'Memoria Visual del Proyecto',
          materials: 'Papel mate',
          software: 'Adobe InDesign',
          role: 'Diseño Gráfico y Editorial',
          year: '2025',
          desc: 'Páginas explicativas de la memoria visual del TFG.'
        },
        {
          src: 'tfg/kikoe1.jpg',
          title: 'Render de Envase 1 - Simulación Kiko Milano',
          materials: 'Acero inoxidable cepillado',
          software: '3ds Max',
          role: 'Visualización 3D',
          year: '2025',
          desc: 'Render del envase 1 simulando su uso comercial para la marca Kiko Milano.'
        },
        {
          src: 'tfg/kikoe1caja.jpg',
          title: 'Render de Envase 1 con Caja - Kiko Milano',
          materials: 'Cartón impreso',
          software: '3ds Max, Illustrator',
          role: 'Diseño de Packaging',
          year: '2025',
          desc: 'Render del envase 1 junto a su caja específica con simulación de marca.'
        },
        {
          src: 'tfg/kikoe2.jpg',
          title: 'Render de Envase 2 - Simulación Kiko Milano',
          materials: 'Acero inoxidable',
          software: '3ds Max',
          role: 'Visualización 3D',
          year: '2025',
          desc: 'Render del envase 2 con diseño gráfico simulado de Kiko Milano.'
        },
        {
          src: 'tfg/kikoe2caja.jpg',
          title: 'Render de Envase 2 con Caja - Kiko Milano',
          materials: 'Cartón impreso',
          software: '3ds Max, Illustrator',
          role: 'Diseño de Packaging',
          year: '2025',
          desc: 'Render del envase 2 junto con su packaging y recambio.'
        },
        {
          src: 'tfg/partese1.png',
          title: 'Planos Técnicos del Envase 1',
          materials: 'Diseño Técnico',
          software: 'SolidWorks',
          role: 'Ingeniería de Detalle',
          year: '2025',
          desc: 'Explosión de las partes que componen el primer envase cosmético.'
        },
        {
          src: 'tfg/partese2.png',
          title: 'Planos Técnicos del Envase 2',
          materials: 'Diseño Técnico',
          software: 'SolidWorks',
          role: 'Ingeniería de Detalle',
          year: '2025',
          desc: 'Explosión de las partes que componen el segundo envase cosmético.'
        },
        {
          src: 'tfg/e2-kiko-1.jpg',
          title: 'Simulación de Acabados Envase 2',
          materials: 'Acero inoxidable pulido',
          software: '3ds Max',
          role: 'Renderizado de Producto',
          year: '2025',
          desc: 'Vista de detalle del envase 2 y sus reflejos metálicos.'
        }
      ]
    },
    'carrera': {
      title: 'Proyectos del grado',
      category: 'Diseño Industrial',
      desc: '',
      cover: 'carrera/proyectos-diseno/hab1.jpg',
      images: [
        {
          src: 'carrera/proyectos-diseno/hab1.jpg',
          title: 'EcoRack - Separador de Ambientes 1',
          materials: 'Materiales sostenibles',
          software: '3ds Max',
          role: 'Ecodiseño de Mobiliario',
          year: '2025',
          desc: 'Render del mueble EcoRack funcionando como separador en dormitorio.'
        },
        {
          src: 'carrera/proyectos-diseno/hab2.jpg',
          title: 'EcoRack - Separador de Ambientes 2',
          materials: 'Materiales sostenibles',
          software: '3ds Max',
          role: 'Ecodiseño de Mobiliario',
          year: '2025',
          desc: 'Render de EcoRack en una distribución de salón.'
        },
        {
          src: 'carrera/proyectos-diseno/hab3.jpg',
          title: 'EcoRack - Separador de Ambientes 3',
          materials: 'Materiales sostenibles',
          software: '3ds Max',
          role: 'Ecodiseño de Mobiliario',
          year: '2025',
          desc: 'Render de EcoRack adaptado a una esquina de lectura.'
        },
        {
          src: 'carrera/proyectos-diseno/zapatero.jpg',
          title: 'EcoRack - Detalle Zapatero',
          materials: 'Materiales sostenibles',
          software: '3ds Max',
          role: 'Ecodiseño de Mobiliario',
          year: '2025',
          desc: 'Vista de detalle de las baldas inferiores utilizadas como zapatero.'
        },
        {
          src: 'carrera/proyectos-diseno/est1.jpg',
          title: 'EcoRack - Configuración Estantería 1',
          materials: 'Materiales sostenibles',
          software: '3ds Max',
          role: 'Ecodiseño de Mobiliario',
          year: '2025',
          desc: 'Módulo de estantería vertical con baldas personalizables.'
        },
        {
          src: 'carrera/proyectos-diseno/est2.jpg',
          title: 'EcoRack - Configuración Estantería 2',
          materials: 'Materiales sostenibles',
          software: '3ds Max',
          role: 'Ecodiseño de Mobiliario',
          year: '2025',
          desc: 'Otra variante de configuración de las láminas para estantería.'
        },
        {
          src: 'carrera/proyectos-diseno/echo1.png',
          title: 'EchoStation - Altavoz y Estación de Carga',
          materials: 'ABS, componentes electrónicos',
          software: 'SolidWorks, KeyShot',
          role: 'Diseño de Producto y Estructura',
          year: '2025',
          desc: 'Render del altavoz y base de carga EchoStation.'
        },
        {
          src: 'carrera/proyectos-diseno/echo2.png',
          title: 'EchoStation - Auriculares Plegables',
          materials: 'Polímeros y almohadillas textiles',
          software: 'SolidWorks, KeyShot',
          role: 'Diseño de Auriculares',
          year: '2025',
          desc: 'Render de los auriculares Headphones plegables acoplados en su base.'
        },
        {
          src: 'carrera/proyectos-diseno/mar1.jpg',
          title: 'Marquesina Bus Málaga - Render General',
          materials: 'Vidrio, acero, paneles electrónicos',
          software: '3ds Max, KeyShot',
          role: 'Ergonomía y Diseño Urbano',
          year: '2025',
          desc: 'Render de conjunto de la marquesina inteligente con aparcamiento para patinetes.'
        },
        {
          src: 'carrera/proyectos-diseno/mar2.jpg',
          title: 'Marquesina Bus Málaga - Detalle Aparcamiento',
          materials: 'Acero templado',
          software: '3ds Max',
          role: 'Ergonomía de Uso',
          year: '2025',
          desc: 'Detalle de los racks de seguridad integrados para vehículos de movilidad personal.'
        },
        {
          src: 'carrera/proyectos-diseno/mar3.jpg',
          title: 'Marquesina Bus Málaga - Detalle Asiento',
          materials: 'Madera tratada y acero',
          software: '3ds Max',
          role: 'Ergonomía y Confort',
          year: '2025',
          desc: 'Estudio ergonómico del asiento corrido de madera para la espera de pasajeros.'
        },
        {
          src: 'carrera/proyectos-diseno/imagen-prototipo.png',
          title: 'Dreamy - Prototipo Funcional Real',
          materials: 'Filamento PLA, electrónica básica, sensor de sonido',
          software: 'Impresión 3D FDM',
          role: 'Prototipado Físico y Ensamblado',
          year: '2025',
          desc: 'Fotografía del prototipo funcional impreso en 3D para pruebas de luz y sonido.'
        }
      ]
    },
    'procarton': {
      title: 'Proyectos ProCarton',
      category: 'Diseño Industrial',
      desc: 'Desarrollos de embalajes y estructuras sostenibles empleando cartón corrugado, presentados a los premios ProCarton.',
      cover: 'procarton/pal4.png',
      images: [
        {
          src: 'procarton/cartel-procarton.png',
          title: 'Cartel de Comunicación Sostenible',
          materials: 'Cartón reciclable, tintas flexográficas digitales',
          software: 'Adobe Illustrator, Photoshop',
          role: 'Branding y Comunicación Visual',
          year: '2026',
          desc: 'Diseño gráfico conceptual destinado a promover la sustitución de plásticos de un solo uso por embalajes biodegradables.'
        },
        {
          src: 'procarton/pal1.png',
          title: 'Diseño de Palet de Cartón - Isometría',
          materials: 'Cartón corrugado de doble onda',
          software: 'SolidWorks',
          role: 'Diseño Estructural e Ingeniería',
          year: '2026',
          desc: 'Propuesta estructural que sustituye palets de madera por palets ligeros de cartón capaces de soportar 800 kg de carga estática.'
        },
        {
          src: 'procarton/pal2.png',
          title: 'Detalle de Columnas de Soporte',
          materials: 'Cartón laminado en espiral',
          software: 'SolidWorks, KeyShot',
          role: 'Ensayos Mecánicos Virtuales',
          year: '2026',
          desc: 'Estudio de resistencia al aplastamiento vertical de las columnas modulares de cartón.'
        },
        {
          src: 'procarton/pal3.png',
          title: 'Diseño Desplegado de Plancha',
          materials: 'Cartón corrugado de alta densidad',
          software: 'Adobe Illustrator (Dielines)',
          role: 'Desarrollo de Troquel',
          year: '2026',
          desc: 'Plano del troquel plano y líneas de hendido optimizadas para el montaje rápido del palet sin adhesivos.'
        },
        {
          src: 'procarton/pal4.png',
          title: 'Distribución de Cargas Estáticas',
          materials: 'Visualización estructural',
          software: 'SolidWorks Simulation',
          role: 'Análisis FEA (Elementos Finitos)',
          year: '2026',
          desc: 'Simulación cromática del reparto de esfuerzos sobre la base del palet bajo carga estándar de transporte.'
        },
        {
          src: 'procarton/charla.jpg',
          title: 'Presentación Técnica del Proyecto',
          materials: 'Ponencia y diapositivas de diseño',
          software: 'Adobe InDesign',
          role: 'Expositora y Diseñadora principal',
          year: '2026',
          desc: 'Fotografía durante la defensa pública del proyecto de embalajes sostenibles ante el jurado.'
        },
        {
          src: 'procarton/premio.jpg',
          title: 'Ceremonia de Entrega de Premios',
          materials: 'Galardón del certamen',
          software: 'Relaciones Públicas',
          role: 'Co-creadora del proyecto galardonado',
          year: '2026',
          desc: 'Recepción del premio en el certamen europeo ProCarton por la propuesta innovadora de paletización sostenible.'
        }
      ]
    },
    'personajes': {
      title: 'Diseño de Personajes & Dear Cucú',
      category: 'Producción Artística',
      desc: 'Colección de ilustraciones y bocetos para la creación de personajes digitales, editoriales y el diseño del autómata de madera Dear Cucú.',
      cover: 'dibujos/diseno-personajes/personaje-cucu.png',
      images: [
        {
          src: 'dibujos/diseno-personajes/personaje-cucu.png',
          title: 'Robot Dear Cucú - Ficha de Personaje',
          materials: 'Ilustración digital',
          software: 'Procreate, Photoshop',
          role: 'Concept Art e Ilustración',
          year: '2026',
          desc: 'Diseño de proporciones y paleta cromática para el personaje de juguete autómata.'
        },
        {
          src: 'dibujos/diseno-personajes/dear-cucu.png',
          title: 'Exploración de Color - Robot Cucú',
          materials: 'Pintura digital texturizada',
          software: 'Procreate',
          role: 'Diseño de Texturas',
          year: '2026',
          desc: 'Estudio de acabados sobre madera veteada en tonos pastel.'
        },
        {
          src: 'dibujos/diseno-personajes/casa-cucu.png',
          title: 'Entorno Conceptual - Casa de Cucú',
          materials: 'Línea de tinta digital',
          software: 'Adobe Illustrator',
          role: 'Ilustración de Escenario',
          year: '2026',
          desc: 'Boceto de la caseta de cuco estilizada para alojar al autómata interactivo.'
        },
        {
          src: 'dibujos/diseno-personajes/casa-cucu-mejorada.jpg',
          title: 'Render Refinado - Casita de Madera',
          materials: 'Gouache digital',
          software: 'Procreate',
          role: 'Acabado Artístico e Iluminación',
          year: '2026',
          desc: 'Estudio de luces y sombras pintado digitalmente sobre la estructura de la caseta.'
        },
        {
          src: 'dibujos/diseno-personajes/Lemonyolk_Dtiys.jpg',
          title: 'Ilustración Lemonyolk Dtiys',
          materials: 'Tinta y color digital texturizado',
          software: 'Procreate',
          role: 'Ilustración artística',
          year: '2026',
          desc: 'Trabajo artístico centrado en el estudio cromático del color amarillo pastel.'
        },
        {
          src: 'dibujos/diseno-personajes/Mis_Hijos_2.0.jpg',
          title: 'Ilustración Mis Hijos 2.0',
          materials: 'Pintura digital texturizada',
          software: 'Procreate',
          role: 'Ilustradora',
          year: '2026',
          desc: 'Ilustración estilizada y cómica que explora la personalidad de personajes a través del vestuario.'
        },
        {
          src: 'dibujos/diseno-personajes/ID_triple_A (1).jpg',
          title: 'Personajes ID Triple A',
          materials: 'Dibujo digital en acuarela',
          software: 'Adobe Photoshop',
          role: 'Character Designer',
          year: '2026',
          desc: 'Diseño de una terna de personajes para aplicaciones interactivas de aprendizaje.'
        },
        {
          src: 'dibujos/diseno-personajes/Primer_Intento_Rendering.jpg',
          title: 'Estudio de Volumen Digital',
          materials: 'Modelado de luces digital',
          software: 'Procreate',
          role: 'Estudio de Iluminación y Sombra',
          year: '2026',
          desc: 'Práctica de volumen pintando caras con luz dirigida.'
        },
        {
          src: 'dibujos/diseno-personajes/boda tito dani.jpg',
          title: 'Ilustración Conmemorativa Boda',
          materials: 'Ilustración digital flat design',
          software: 'Adobe Illustrator',
          role: 'Ilustradora por encargo',
          year: '2026',
          desc: 'Retrato vectorial minimalista diseñado para invitaciones de boda.'
        },
        {
          src: 'dibujos/diseno-personajes/las aventuras de claudia.jpeg',
          title: 'Portada - Las Aventuras de Claudia',
          materials: 'Diseño editorial',
          software: 'Procreate, InDesign',
          role: 'Ilustradora y Maquetadora',
          year: '2026',
          desc: 'Diseño de portada para cuento infantil utilizando una paleta pastel suave.'
        },
        {
          src: 'dibujos/diseno-personajes/unnamed.jpg',
          title: 'Bocetos Rápidos de Caras',
          materials: 'Tinta analógica sobre papel kraft',
          software: 'Técnica Tradicional',
          role: 'Estudios de Expresión',
          year: '2026',
          desc: 'Dibujo a mano alzada enfocado en capturar expresiones y proporciones faciales rápidas.'
        }
      ]
    },
    'ceramica': {
      title: 'Cerámica Artesanal',
      category: 'Producción Artística',
      desc: 'Exploración del volumen manual, el torno alfarero tradicional y la química de esmaltes mate formulados en el taller.',
      cover: 'ceramica/ceramica_piezas.png',
      images: [
        {
          src: 'ceramica/ceramica_piezas.png',
          title: 'Colección de Jarrones Orgánicos',
          materials: 'Arcilla de gres con chamota, esmaltes mate formulados a mano',
          software: 'Torno de alfarero y quema a 1250°C',
          role: 'Alfarera y Creadora de Esmaltes',
          year: '2026',
          desc: 'Jarrones minimalistas que contrastan el acabado de los esmaltes pasteles mate con la aspereza rústica de la arcilla expuesta.'
        }
      ]
    },
    'otros': {
      title: 'Proyectos creativos durante el grado',
      category: 'LOGOS, CARTELES Y MÁS',
      desc: '',
      cover: 'carrera/logos-carteles/juegoreal.jpg',
      images: [
        {
          src: 'carrera/logos-carteles/juegoreal.jpg',
          title: 'Re-Earth - Prototipo del Juego de Mesa',
          materials: 'Cartón, madera, impresión 3D',
          software: 'Técnicas diversas de fabricación',
          role: 'Diseño de Juego y Prototipado',
          year: '2025',
          desc: 'Fotografía del prototipo funcional del juego de mesa Re-Earth.'
        },
        {
          src: 'carrera/logos-carteles/logo.png',
          title: 'Logo del Proyecto Re-Earth',
          materials: 'Diseño gráfico digital',
          software: 'Inkscape, Illustrator',
          role: 'Identidad Visual',
          year: '2025',
          desc: 'Logotipo desarrollado para el proyecto Erasmus+ Re-Earth.'
        },
        {
          src: 'carrera/logos-carteles/ae1.png',
          title: 'Producción Creativa AE1',
          materials: 'Gráfico vectorial',
          software: 'Inkscape',
          role: 'Diseño Gráfico',
          year: '2025',
          desc: 'Logotipo de marca desarrollado durante el grado.'
        },
        {
          src: 'carrera/logos-carteles/ae2.png',
          title: 'Producción Creativa AE2',
          materials: 'Gráfico vectorial',
          software: 'Inkscape',
          role: 'Diseño Gráfico',
          year: '2025',
          desc: 'Estudio y diseño de isotipo para marca comercial.'
        },
        {
          src: 'carrera/logos-carteles/ae3.png',
          title: 'Producción Creativa AE3',
          materials: 'Ilustración digital',
          software: 'Procreate, Photoshop',
          role: 'Branding e Ilustración',
          year: '2025',
          desc: 'Póster publicitario con diseño tipográfico y gráfico.'
        },
        {
          src: 'carrera/logos-carteles/cartel1.jpg',
          title: 'Cartel de Diseño Industrial',
          materials: 'Maquetación digital',
          software: 'Photoshop, InDesign',
          role: 'Diseño Editorial y Cartelería',
          year: '2025',
          desc: 'Diseño de cartel publicitario promocional.'
        },
        {
          src: 'carrera/logos-carteles/planta.png',
          title: 'Ilustración Botánica - Planta',
          materials: 'Lápiz y gouache digital',
          software: 'Procreate',
          role: 'Ilustradora',
          year: '2025',
          desc: 'Estudio de formas y hojas botánicas pintado digitalmente.'
        }
      ]
    }
  };

  // --- EFECTO DE SCROLL EN HEADER ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- MEN�s M�"VIL (TOGGLE) ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });



  // --- PREVISUALIZACI�"N AUTOMÁTICA AL PASAR EL CURSOR (HOVER SLIDESHOW) ---
  const folderCards = document.querySelectorAll('.folder-card');
  let slideshowInterval = null;

  folderCards.forEach(card => {
    const folderId = card.getAttribute('data-folder');
    const folderData = folderDatabase[folderId];
    const folderImg = card.querySelector('.folder-img');

    if (folderData && folderImg && folderData.images.length > 1) {
      let currentIndex = 0;

      card.addEventListener('mouseenter', () => {
        // Iniciar rotación de imágenes al pasar el cursor
        slideshowInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % folderData.images.length;
          
          // Efecto de desvanecimiento sutil al cambiar de foto
          folderImg.style.opacity = '0.3';
          
          setTimeout(() => {
            folderImg.src = folderData.images[currentIndex].src;
            folderImg.style.opacity = '1';
          }, 120);
        }, 900); // Rotación rápida cada 900ms
      });

      card.addEventListener('mouseleave', () => {
        // Limpiar intervalo y restaurar imagen de portada
        if (slideshowInterval) {
          clearInterval(slideshowInterval);
          slideshowInterval = null;
        }
        currentIndex = 0;
        folderImg.style.opacity = '0.3';
        setTimeout(() => {
          folderImg.src = folderData.cover;
          folderImg.style.opacity = '1';
        }, 120);
      });
    }
  });

  // --- SISTEMA DINÁMICO DE MODAL (ALBUM GRID + PHOTO DETAILS) ---
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContainer = document.getElementById('modal-content-container');

  // Abrir Modal de Álbum
  folderCards.forEach(card => {
    card.addEventListener('click', () => {
      const folderId = card.getAttribute('data-folder');
      openAlbumModal(folderId);
    });
  });

  // Renderizar e Abrir Modal del Álbum
  function openAlbumModal(folderId) {
    const data = folderDatabase[folderId];
    if (!data) return;

    // Detener slideshow de hover en caso de que quede activo
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }

    // Caso especial para Trabajo Fin de Grado (TFG)
    if (folderId === 'tfg') {
      modalContainer.innerHTML = `
        <div class="album-modal-layout">
          <div class="album-header">
            <span class="modal-category">${data.category}</span>
            <h2 class="modal-title" style="margin-bottom: 20px;">${data.title}</h2>
          </div>
          
          <div class="tfg-intro-grid">
            <div class="tfg-intro-text">
              <p>Para mi TFG, calificado con <strong>matrícula de honor</strong>, diseñé una serie de envases para cosméticos desde el punto de vista del <strong>ecodiseño</strong>. Realicé una profunda investigación de mercado, encuestas, estudio de materiales, planos técnicos, animaciones e imágenes realistas, además de prototipos funcionales (envase y embalaje).</p>
              <p>Como resultado, creé dos envases de <strong>acero inoxidable completamente reciclables, reutilizables y que usan material reciclado</strong>, para productos en crema o polvo (coloretes, bases, sombras de ojo...) y máscara de pestañas.</p>
              <p>También diseñé las <strong>cajas específicas para cada envase</strong> y sus respectivos recambios. Aquí pueden verse imágenes y vídeos sobre mi proceso y los resultados obtenidos.</p>
            </div>
            <div class="tfg-intro-img-box">
              <img src="tfg/conjunto.jpg" alt="Imagen de conjunto del TFG" class="tfg-intro-img">
            </div>
          </div>
          
          <div class="tfg-section" style="margin-top: 0.5rem;">
            <h4 class="modal-section-title">Animaciones</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Realizadas en 3ds Max. Las dos primeras muestran el funcionamiento y recambio de los envases y las últimas muestran sus partes</p>
            
            <div class="tfg-video-grid">
              <div class="tfg-video-card">
                <video src="tfg/animacion1e1.mp4" controls loop muted></video>
              </div>
              <div class="tfg-video-card">
                <video src="tfg/animacion1e2.mp4" controls loop muted></video>
              </div>
              <div class="tfg-video-card">
                <video src="tfg/animacion-explicacion-e1.mp4" controls loop muted></video>
              </div>
              <div class="tfg-video-card">
                <video src="tfg/animacion-explicacion-e2.mp4" controls loop muted></video>
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2rem;">
            <h4 class="modal-section-title">Renders y simulación con marca</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Realicé una serie de imágenes como si la marca de cosméticos Kiko Milano usara mis envases. Usé 3dsMax para crear los renders y Procreate e Inkscape para el diseño gráfico.</p>
            
            <div class="tfg-brands-layout">
              <div class="tfg-brand-col stacked-col">
                <div class="tfg-image-card">
                  <img src="tfg/kikoe1.jpg" alt="Render Envase 1 - Kiko Milano">
                </div>
                <div class="tfg-image-card">
                  <img src="tfg/kikoe1caja.jpg" alt="Render Envase 1 con Caja - Kiko Milano">
                </div>
              </div>
              <div class="tfg-brand-col">
                <div class="tfg-image-card">
                  <img src="tfg/kikoe2.jpg" alt="Render Envase 2 - Kiko Milano">
                </div>
              </div>
              <div class="tfg-brand-col">
                <div class="tfg-image-card">
                  <img src="tfg/kikoe2caja.jpg" alt="Render Envase 2 con Caja - Kiko Milano">
                </div>
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2rem;">
            <h4 class="modal-section-title">Partes de los envases</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Aquí se muestran dos imágenes que nombran las partes de cada envase.</p>
            
            <div class="tfg-parts-grid">
              <div class="tfg-parts-card">
                <img src="tfg/partese1.png" alt="Partes del envase 1">
              </div>
              <div class="tfg-parts-card">
                <img src="tfg/partese2.png" alt="Partes del envase 2">
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2rem; margin-bottom: 1.5rem;">
            <h4 class="modal-section-title">Prototipado</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Para comprobar la funcionalidad de los envases y su estética en persona, realicé una serie de prototipos. Los envases fueron realizados mediante fabricación aditiva (impresión 3D en resina) y las cajas fueron cortadas con una máquina cortadora láser. Fueron rellenados con maquillaje real para demostrar su funcionalidad. Los resultados finales se muestran en las siguientes imágenes.</p>
            
            <div class="tfg-image-grid">
              <div class="tfg-image-card">
                <img src="tfg/protopro1.jpg" alt="Prototipo final detalle de cierre">
              </div>
              <div class="tfg-image-card">
                <img src="tfg/protopro2.jpg" alt="Prototipo final piezas de corte láser">
              </div>
              <div class="tfg-image-card">
                <img src="tfg/protopro3.jpg" alt="Prototipo final envases de resina">
              </div>
            </div>

            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 2rem; margin-bottom: 1.5rem;">Para llegar a los resultados anteriores se tuvieron que realizar muchas pruebas. La mayoría de ellas quedan reflejadas en las siguientes imágenes.</p>

            <div class="tfg-image-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
              <div class="tfg-image-card">
                <img src="tfg/todoslosproto.jpg" alt="Proceso de pruebas y evolución de prototipos">
              </div>
              <div class="tfg-image-card">
                <img src="tfg/protocutre.jpg" alt="Maqueta de volumen inicial de cartón">
              </div>
            </div>
          </div>
        </div>
      `;

      // Activar hover play/pause en videos
      const tfgVideos = modalContainer.querySelectorAll('.tfg-video-card video');
      tfgVideos.forEach(video => {
        video.addEventListener('mouseenter', () => {
          video.play().catch(err => console.log('El auto-play falló:', err));
        });
        video.addEventListener('mouseleave', () => {
          video.pause();
        });
      });

      // Activar modal
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      return;
    }

    // Caso especial para Concurso Internacional ProCarton
    if (folderId === 'procarton') {
      modalContainer.innerHTML = `
        <div class="album-modal-layout">
          <div class="album-header">
            <span class="modal-category">${data.category}</span>
            <h2 class="modal-title" style="margin-bottom: 20px;">Concurso Internacional ProCarton</h2>
          </div>
          
          <div class="procarton-intro-grid">
            <div class="procarton-intro-text">
              <p>En mi último año de carrera, participé en <strong>ProCarton Young Designers Award</strong>, un concurso anual de diseño de envases a nivel Europeo, como requisito para la asignatura de Envase y Embalaje. Debíamos realizar un rediseño de algún producto embalado con cartón. Mis cuatro compañeros de grupo y yo diseñamos una <strong>nueva versión del tradicional paquete de palomitas para microondas</strong>, eliminando el uso de plásticos y dándole una función secundaria de <strong>bol cómodo para comer solo o acompañado</strong>, además de un atractivo diseño visual.</p>
              <p>Fui seleccionada de entre los cinco integrantes del grupo para recoger nuestro <strong>2.º premio a nivel nacional en Madrid y hacer una pequeña presentación sobre nuestro proyecto</strong>. En <a href="https://www.aspack.es/news/talento-joven-entrevista/" target="_blank" style="color: var(--accent-lila); text-decoration: underline; font-weight: 600;">este artículo de Aspack</a> hay más información sobre el evento.</p>
            </div>
            <div class="procarton-intro-images">
              <img src="procarton/charla.jpg" alt="Charla técnica ProCarton" class="procarton-intro-img">
              <img src="procarton/premio.jpg" alt="Premio ProCarton" class="procarton-intro-img">
            </div>
          </div>
          
          <div class="tfg-section" style="margin-top: 1rem;">
            <div class="tfg-image-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
              <div class="tfg-image-card">
                <img src="procarton/pal1.png" alt="Diseño de Palet de Cartón - Isometría">
              </div>
              <div class="tfg-image-card">
                <img src="procarton/pal2.png" alt="Detalle de Columnas de Soporte">
              </div>
              <div class="tfg-image-card">
                <img src="procarton/pal3.png" alt="Diseño Desplegado de Plancha">
              </div>
              <div class="tfg-image-card">
                <img src="procarton/pal4.png" alt="Distribución de Cargas Estáticas">
              </div>
            </div>
          </div>

          <div style="margin-top: 3rem; margin-bottom: 2rem; text-align: center; border-top: 1px solid var(--border-color); padding-top: 2rem;">
            <div class="tfg-image-card" style="max-width: 700px; margin: 0 auto;">
              <img src="procarton/cartel-procarton.png" alt="Cartel ProCarton" style="width: 100%; height: auto;">
            </div>
          </div>
        </div>
      `;

      // Activar modal
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      return;
    }

    // Caso especial para Proyectos del grado (Carrera)
    if (folderId === 'carrera') {
      modalContainer.innerHTML = `
        <div class="album-modal-layout">
          <div class="album-header">
            <span class="modal-category">${data.category}</span>
            <h2 class="modal-title" style="margin-bottom: 5px;">Proyectos del grado</h2>
          </div>
          
          <div class="tfg-section" style="margin-top: 0rem;">
            <h4 class="modal-section-title" style="margin-top: 0;">EcoRack</h4>
            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">Para la asignatura de Ecodiseño debíamos crear un separador de espacios con materiales sostenibles. Mi grupo decidió crear un mueble personalizable que hiciera las veces de estantería y zapatero. Las láminas verticales y horizontales pueden cambiarse a gusto del consumidor, siendo un diseño simple pero atractivo que se adapta perfectamente a los distintos ambientes de cualquier hogar.</p>
            
            <div class="tfg-image-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/hab1.jpg" alt="EcoRack - Habitación 1">
              </div>
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/hab2.jpg" alt="EcoRack - Habitación 2">
              </div>
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/hab3.jpg" alt="EcoRack - Habitación 3">
              </div>
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/zapatero.jpg" alt="EcoRack - Zapatero">
              </div>
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/est1.jpg" alt="EcoRack - Estantería 1">
              </div>
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/est2.jpg" alt="EcoRack - Estantería 2">
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2rem; margin-bottom: 1.5rem;">
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem;">Aquí aparece una animación que hice por mi cuenta sobre cómo se ensambla el mueble y cómo se vería separando un salón-cocina.</p>
            
            <div class="tfg-video-grid" style="grid-template-columns: 1fr; max-width: 700px; margin: 0 auto;">
              <div class="tfg-video-card">
                <video src="carrera/proyectos-diseno/ecorack.mp4" controls loop muted></video>
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2.5rem; margin-bottom: 1.5rem;">
            <h4 class="modal-section-title">EchoStation</h4>
            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">Para este proyecto en grupo de tres integrantes decidimos realizar un <strong>altavoz y unos auriculares <em>headphones</em> plegables</strong>. El altavoz sirve como <strong>estación de carga</strong> de los auriculares, con la particularidad de que si estos están reproduciendo música al momento de colocarse en la estación de carga, se <strong>conecta automáticamente</strong> a esta y el sonido se pasaría a reproducir en los altavoces.</p>
            
            <div class="tfg-echo-layout">
              <div class="tfg-brand-col stacked-col">
                <div class="tfg-image-card">
                  <img src="carrera/proyectos-diseno/echo1.png" alt="EchoStation - Render 1">
                </div>
                <div class="tfg-video-card">
                  <video src="carrera/proyectos-diseno/videoecho.mp4" controls loop muted></video>
                </div>
              </div>
              <div class="tfg-brand-col">
                <div class="tfg-image-card">
                  <img src="carrera/proyectos-diseno/echo2.png" alt="EchoStation - Render 2">
                </div>
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2.5rem; margin-bottom: 1.5rem;">
            <h4 class="modal-section-title">Marquesina bus Málaga</h4>
            
            <div class="procarton-intro-grid">
              <div class="procarton-intro-text">
                <p>Para la asignatura de Ergonomía, realizamos un <strong>rediseño de las paradas de bus de Málaga</strong>. Los aspectos a destacar de este diseño son la adición de un <strong>aparcamiento para bicicletas o patinetes</strong>, un <strong>asiento corrido</strong> para aumentar el número de personas que pueden sentarse, además de una <strong>estética moderna y atractiva</strong>.</p>
              </div>
              <div class="tfg-intro-img-box">
                <img src="carrera/proyectos-diseno/mar1.jpg" alt="Marquesina Bus Málaga - Render General" class="tfg-intro-img">
              </div>
            </div>
            
            <div class="tfg-image-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem;">
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/mar2.jpg" alt="Marquesina Bus Málaga - Detalle Aparcamiento">
              </div>
              <div class="tfg-image-card">
                <img src="carrera/proyectos-diseno/mar3.jpg" alt="Marquesina Bus Málaga - Detalle Asiento">
              </div>
            </div>
          </div>

          <div class="tfg-section" style="margin-top: 2.5rem; margin-bottom: 1.5rem;">
            <h4 class="modal-section-title">Tostadora familia numerosa</h4>
            <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7;">Junto a Dreamy (explicado en el siguiente apartado), este fue el primer proyecto de diseño industrial que realicé en la carrera. Fue un trabajo grupal de cuatro miembros, donde debíamos hacer un <strong>rediseño de una tostadora tradicional</strong>. Nos centramos en el nicho de las familias numerosas, creando una <strong>tostadora vertical que pudiera almacenar una bolsa entera de pan de molde</strong> y que pudiera tostar rebanadas de dos en dos de manera automática. La tapa transparente tenía doble función: proteger al pan y hacer de bandeja cuando estuviera en uso la tostadora, manteniendo mejor el calor de las tostadas y evitando ensuciar con migas la superficie donde se encuentre.<br><br>Debido a la baja calidad de las primeras imágenes realizadas en su momento, he decidido volver a crearlas.</p>
          </div>

          <div class="tfg-section" style="margin-top: 2.5rem; margin-bottom: 1.5rem;">
            <h4 class="modal-section-title">Dreamy</h4>
            
            <div class="procarton-intro-grid" style="grid-template-columns: 1.3fr 0.7fr; align-items: flex-start;">
              <div class="procarton-intro-text">
                <p>Para este proyecto debíamos crear un objeto que usara luces. Decidimos crear un <strong>juguete con sensor de voz</strong>, que reconociera cuándo un bebé llorara por la noche y para intentar calmarlo proyectara <strong>imágenes relajantes con su trompa en el techo</strong> a la vez que reprodujera música. Creamos a partir de <strong>impresión 3D de filamento</strong> un prototipo básico funcional (imagen derecha).</p>
              </div>
              <div class="tfg-intro-img-box" style="max-width: 260px; margin-left: auto; margin-right: 0;">
                <img src="carrera/proyectos-diseno/imagen-prototipo.png" alt="Dreamy - Prototipo Físico" class="tfg-intro-img">
              </div>
            </div>
          </div>
        </div>
      `;

      // Activar hover play/pause en videos
      const carreraVideos = modalContainer.querySelectorAll('.tfg-video-card video');
      carreraVideos.forEach(video => {
        video.addEventListener('mouseenter', () => {
          video.play().catch(err => console.log('El auto-play falló:', err));
        });
        video.addEventListener('mouseleave', () => {
          video.pause();
        });
      });

      // Activar modal
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      return;
    }

    // Caso especial para Proyectos creativos durante el grado (Otros)
    if (folderId === 'otros') {
      modalContainer.innerHTML = `
        <div class="album-modal-layout">
          <div class="album-header">
            <span class="modal-category">${data.category}</span>
            <h2 class="modal-title" style="margin-bottom: 5px;">Proyectos creativos durante el grado</h2>
          </div>
          
          <div class="tfg-section" style="margin-top: 0rem;">
            <h4 class="modal-section-title" style="margin-top: 0;">Re-Earth</h4>
            
            <div class="procarton-intro-grid">
              <div class="procarton-intro-text">
                <p>Durante el grado tuve que realizar diferentes trabajos artísticos. El más destacable a mi parecer se trata del <strong>proyecto Re-Earth</strong> que realicé junto con cuatro compañeros de mi clase para el <strong>Erasmus+ Personal Green Skills</strong>. Haciendo clic <a href="https://fokusorange.thws.de/en/research-understanding/ausgabe-9/discovering-and-shaping-europe-with-personal-green-skills/" target="_blank" style="color: var(--accent-lila); text-decoration: underline; font-weight: 600;">aquí</a> puedes encontrar un resumen del evento y <a href="https://fokusorange.thws.de/en/thwspodcast/ausgabe-9/bip-discovering-and-shaping-europe-with-personal-green-skills/" target="_blank" style="color: var(--accent-lila); text-decoration: underline; font-weight: 600;">aquí</a> encontrarás un pequeño podcast con una entrevista sobre nuestro proyecto. Realizamos un <strong>juego de mesa para concienciar sobre sostenibilidad</strong> a jóvenes y adultos de manera divertida. Creamos un <strong>prototipo completamente funcional</strong>, como se puede ver en las imágenes.</p>
              </div>
              <div class="procarton-intro-images">
                <img src="carrera/logos-carteles/juegoreal.jpg" alt="Prototipo de Juego Re-Earth" class="procarton-intro-img">
                <img src="carrera/logos-carteles/logo.png" alt="Logo de Re-Earth" class="procarton-intro-img">
              </div>
            </div>
          </div>

          <div class="tfg-section">
            <h4 class="modal-section-title">Otras producciones</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 1.5rem; margin-top: 0.5rem;">Algunas de las otras producciones creadas a lo largo del grado son las siguientes</p>
            
            <div class="creative-collage">
              <div class="collage-item">
                <img src="carrera/logos-carteles/ae1.png" alt="Producción Creativa 1">
              </div>
              <div class="collage-item">
                <img src="carrera/logos-carteles/ae2.png" alt="Producción Creativa 2">
              </div>
              <div class="collage-item">
                <img src="carrera/logos-carteles/ae3.png" alt="Producción Creativa 3">
              </div>
              <div class="collage-item">
                <img src="carrera/logos-carteles/cartel1.jpg" alt="Cartel de Diseño Industrial">
              </div>
              <div class="collage-item">
                <img src="carrera/logos-carteles/planta.png" alt="Estudio Botánico - Planta">
              </div>
            </div>
          </div>
        </div>
      `;

      // Activar modal
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      return;
    }

    // Crear Grid de Fotos del Álbum para otras carpetas
    let imagesHtml = '';
    data.images.forEach((img, idx) => {
      imagesHtml += `
        <div class="album-photo-card" data-index="${idx}">
          <img src="${img.src}" alt="${img.title}">
          <div class="album-photo-info">
            <span class="album-photo-category">${data.category}</span>
            <span class="album-photo-title">${img.title}</span>
          </div>
        </div>
      `;
    });

    modalContainer.innerHTML = `
      <div class="album-modal-layout">
        <div class="album-header">
          <span class="modal-category">${data.category}</span>
          <h2 class="modal-title" style="margin-bottom: 5px;">Carpeta: ${data.title}</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">${data.desc}</p>
        </div>
        <div class="album-grid">
          ${imagesHtml}
        </div>
      </div>
    `;

    // Añadir eventos para abrir cada foto del álbum de forma individual
    const photoCards = modalContainer.querySelectorAll('.album-photo-card');
    photoCards.forEach(photoCard => {
      photoCard.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar cerrar modal
        const index = photoCard.getAttribute('data-index');
        openPhotoDetails(folderId, parseInt(index));
      });
    });

    // Activar modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Renderizar Vista de Detalle de Foto Individual
  function openPhotoDetails(folderId, photoIndex) {
    const folder = folderDatabase[folderId];
    const photo = folder.images[photoIndex];
    if (!photo) return;

    modalContainer.innerHTML = `
      <div class="modal-grid" style="animation: fadeInUp 0.4s ease;">
        <div class="modal-gallery">
          <img src="${photo.src}" alt="${photo.title}">
        </div>
        
        <div class="modal-details">
          <button class="btn btn-secondary" id="btn-back-to-album" style="margin-bottom: 1.5rem; align-self: flex-start; padding: 0.5rem 1rem; font-size: 0.8rem; border-radius: 4px;">
            �?� Volver a Carpeta
          </button>
          
          <span class="modal-category">${folder.category}</span>
          <h3 class="modal-title">${photo.title}</h3>
          
          <div class="modal-meta-grid">
            <div class="meta-item">
              <h5>Material / Soporte</h5>
              <p>${photo.materials}</p>
            </div>
            <div class="meta-item">
              <h5>Software / Técnica</h5>
              <p>${photo.software}</p>
            </div>
            <div class="meta-item">
              <h5>Enfoque</h5>
              <p>${photo.role}</p>
            </div>
            <div class="meta-item">
              <h5>Año</h5>
              <p>${photo.year}</p>
            </div>
          </div>

          <div class="modal-description">
            <h4>Descripción del elemento</h4>
            <p>${photo.desc}</p>
          </div>
        </div>
      </div>
    `;

    // Evento de volver a la vista del álbum
    const btnBack = modalContainer.querySelector('#btn-back-to-album');
    btnBack.addEventListener('click', (e) => {
      e.stopPropagation();
      openAlbumModal(folderId);
    });
  }

  // Cerrar Modal
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Vaciar para detener cargas
    setTimeout(() => {
      modalContainer.innerHTML = '';
    }, 400);
  };

  modalCloseBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- DETECTAR SECCI�"N ACTIVA EN EL MENU DURANTE SCROLL ---
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    if (current) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // --- ANIMACIONES DE REVELADO (SCROLL REVEAL) ---
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- FORMULARIO DE CONTACTO ---
  const contactForm = document.getElementById('contact-form');
  const formStatusMessage = document.getElementById('form-status-message');
  const btnSubmitForm = document.getElementById('btn-submit-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      showStatusMessage('Por favor, rellena todos los campos.', 'error');
      return;
    }

    btnSubmitForm.disabled = true;
    btnSubmitForm.textContent = 'Enviando...';

    setTimeout(() => {
      showStatusMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
      contactForm.reset();
      btnSubmitForm.disabled = false;
      btnSubmitForm.textContent = 'Enviar Mensaje';
    }, 1500);
  });

  const showStatusMessage = (text, type) => {
    formStatusMessage.textContent = text;
    formStatusMessage.className = `form-message ${type}`;
    formStatusMessage.style.display = 'block';
    
    setTimeout(() => {
      formStatusMessage.style.display = 'none';
    }, 5000);
  };

});

