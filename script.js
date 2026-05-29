/**
 * ==========================================================================
 * PORTFOLIO JAVASCRIPT - INTERACTIVIDAD Y DETALLES
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- DICCIONARIO DE DATOS DE PROYECTOS (LIGHTBOX MODAL) ---
  const projectsData = {
    'tfg-conjunto': {
      title: 'TFG | Proyecto Conjunto',
      category: 'Trabajo Fin de Grado',
      materials: 'Aluminio extruido reciclado, policarbonato bio-basado, compuestos biodegradables',
      software: 'SolidWorks, KeyShot, Adobe Illustrator',
      role: 'Diseñadora Principal (Ergonomía, Estructura y Visualización)',
      year: '2025',
      image: 'TFG/conjunto.jpg',
      description: `
        <p><strong>Proyecto de Grado en Diseño Industrial.</strong> Este proyecto propone un sistema de movilidad urbana modular sostenible diseñado para los retos de transporte del futuro cercano.</p>
        <p>El núcleo del concepto se basa en la modularidad y el ciclo de vida del producto. Los perfiles estructurales de aluminio permiten un ensamblado simplificado y libre de adhesivos, lo que facilita el desmontaje completo para su reciclaje al final de su vida útil. Los paneles translúcidos de policarbonato integran un sistema de iluminación LED indicativo, proporcionando visibilidad y seguridad pasiva.</p>
        <p>El diseño fue completamente validado mediante simulaciones mecánicas de estrés estructural en SolidWorks, y sus proporciones y ergonomía fueron estudiadas con modelos a escala real.</p>
      `
    },
    'lampara-modular': {
      title: 'Lámpara Modular AURA',
      category: 'Proyecto de Diseño',
      materials: 'Cobre cepillado, hormigón de alta resistencia, difusor acrílico satinado, componentes LED',
      software: 'Rhinoceros 3D, Grasshopper, KeyShot',
      role: 'Diseño Conceptual, Modelado 3D y Fabricación del Prototipo',
      year: '2026',
      image: 'Carrera/proyectos diseño/lampara_modular.png',
      description: `
        <p><strong>Iluminación inteligente y reconfigurable.</strong> AURA es una lámpara de sobremesa que explora cómo interactuamos físicamente con la dirección de la luz en nuestros espacios de trabajo.</p>
        <p>Su diseño consiste en una base pesada de hormigón arquitectónico que alberga los contactos eléctricos y un brazo de cobre cepillado que se acopla magnéticamente en diferentes ranuras. Esto permite al usuario cambiar la altura y la inclinación de la luz con un simple gesto analógico.</p>
        <p>La base de hormigón se coló en moldes impresos en 3D (PLA), demostrando una integración fluida entre la artesanía de vaciado y la tecnología de fabricación digital rápida.</p>
      `
    },
    'silla-nordica': {
      title: 'Silla Ergónoma KÄLLA',
      category: 'Proyecto de Diseño',
      materials: 'Madera de fresno curvada a vapor, fieltro de lana pura, uniones de latón torneado',
      software: 'SolidWorks, KeyShot, Adobe Photoshop',
      role: 'Estudio de Ergonomía, Diseño de Producto y Modelado 3D',
      year: '2025',
      image: 'Carrera/proyectos diseño/silla_nordica.png',
      description: `
        <p><strong>Comodidad natural sin mecanismos.</strong> KÄLLA es un ejercicio de minimalismo escandinavo enfocado en la ergonomía activa del asiento de oficina en el hogar.</p>
        <p>En lugar de utilizar mecanismos plásticos complejos y pistones metálicos, KÄLLA aprovecha las propiedades elásticas naturales de la madera de fresno curvada. La flexión del marco responde de manera sutil a los cambios de postura del usuario, aliviando la fatiga lumbar.</p>
        <p>La tapicería está confeccionada con fieltro de lana densa, fijada al marco mediante pasadores de latón pulido que actúan como puntos de acento estético y estructural al mismo tiempo.</p>
      `
    },
    'boceto-lampara': {
      title: 'Exploraciones Conceptuales',
      category: 'Bocetos e Ideas',
      materials: 'Papel Bristol, rotuladores Copic, pluma de tinta fina, retoque digital',
      software: 'Bocetado Tradicional, Adobe Photoshop',
      role: 'Diseñadora y Dibujante conceptual',
      year: '2026',
      image: 'Dibujos/Dibujos sobre diseño industrial/boceto_lampara.png',
      description: `
        <p><strong>El pensamiento visual en el diseño.</strong> Una colección de bocetos analógicos creados durante las fases de ideación de productos de iluminación modular.</p>
        <p>El dibujo a mano alzada sigue siendo la herramienta más rápida para trasladar ideas de la mente al plano físico. Estos bocetos ilustran las variaciones en las juntas magnéticas de la lámpara, el estudio de las sombras y el comportamiento de la luz difusa en los distintos volúmenes geométricos.</p>
        <p>Utilizo una combinación de pluma estilográfica para contornos y rotuladores de escala de grises Copic para dar profundidad y volumen a los materiales.</p>
      `
    },
    'dear-cucu': {
      title: 'Proyecto Dear Cucú',
      category: 'Ilustración / Personajes',
      materials: 'Madera maciza de arce y nogal americano, tintes ecológicos base agua',
      software: 'Adobe Illustrator, Procreate',
      role: 'Diseño de Personajes, Animación 2D y Packaging',
      year: '2026',
      image: 'Dibujos/Diseño personajes/personaje_cucu.png',
      description: `
        <p><strong>Diseño de juguetes con alma tradicional.</strong> Dear Cucú es una propuesta de diseño de personajes y juguetes mecánicos de colección que fusionan la estética robótica moderna con los mecanismos tradicionales.</p>
        <p>Inspirado en el funcionamiento clásico de los relojes de cuco, este autómata esférico de madera esconde un mecanismo interno de engranajes tallados que, al girar su llave trasera, mueve los ojos y las alas del personaje de manera sincrónica.</p>
        <p>Las piezas están diseñadas con un alto contraste entre maderas claras (arce) y oscuras (nogal), tratadas únicamente con ceras naturales para garantizar su inocuidad y una agradable sensación al tacto.</p>
      `
    },
    'paisaje': {
      title: 'Bocetos de Paisajes',
      category: 'Dibujo Libre',
      materials: 'Carboncillo vegetal prensado, lápiz Conté, papel Fabriano de grano medio',
      software: 'Dibujo a mano alzada',
      role: 'Estudio Artístico Personal',
      year: '2025',
      image: 'Dibujos/Paisajes/paisaje_boceto.png',
      description: `
        <p><strong>Ejercicios de percepción tridimensional.</strong> Una selección de dibujos de paisajes realizados al aire libre que forman parte de mi entrenamiento visual constante.</p>
        <p>El dibujo de observación directa educa la capacidad de comprender el volumen y representar la luz y la sombra en el espacio de forma intuitiva, una competencia clave para la traslación de conceptos tridimensionales en el diseño de productos reales.</p>
        <p>Estos trabajos analizan las texturas orgánicas de la naturaleza y el comportamiento de las sombras proyectadas en superficies irregulares.</p>
      `
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

  // --- MENÚ MÓVIL (TOGGLE) ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      
      // Actualizar link activo
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // --- FILTRADO DINÁMICO DE PROYECTOS (GALLERY FILTER) ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase activo de los otros botones y agregar a este
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Agregar efecto de transición suave
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';

        setTimeout(() => {
          if (filterValue === 'all' || filterValue === cardCategory) {
            card.classList.remove('hide');
            // Retardo para que el display block se active y luego la opacidad
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.classList.add('hide');
          }
        }, 300);
      });
    });
  });

  // --- MODAL DETALLES DEL PROYECTO (LIGHTBOX) ---
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalMainImg = document.getElementById('modal-main-img');
  const modalProjectCategory = document.getElementById('modal-project-category');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalMetaMaterials = document.getElementById('modal-meta-materials');
  const modalMetaSoftware = document.getElementById('modal-meta-software');
  const modalMetaRole = document.getElementById('modal-meta-role');
  const modalMetaYear = document.getElementById('modal-meta-year');
  const modalProjectDesc = document.getElementById('modal-project-desc');

  // Abrir Modal
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = projectsData[projectId];

      if (data) {
        // Rellenar datos
        modalMainImg.src = data.image;
        modalMainImg.alt = data.title;
        modalProjectCategory.textContent = data.category;
        modalProjectTitle.textContent = data.title;
        modalMetaMaterials.textContent = data.materials;
        modalMetaSoftware.textContent = data.software;
        modalMetaRole.textContent = data.role;
        modalMetaYear.textContent = data.year;
        modalProjectDesc.innerHTML = data.description;

        // Mostrar modal con transición
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Bloquear scroll del body
      }
    });
  });

  // Cerrar Modal
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restaurar scroll del body
  };

  modalCloseBtn.addEventListener('click', closeModal);
  
  // Cerrar haciendo clic fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // --- DETECTAR SECCIÓN ACTIVA EN EL MENU DURANTE SCROLL ---
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100; // Offset del header

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
        // Dejar de observar una vez revelado
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Porcentaje visible para activar
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- FORMULARIO DE CONTACTO (SIMULACIÓN DE ENVÍO) ---
  const contactForm = document.getElementById('contact-form');
  const formStatusMessage = document.getElementById('form-status-message');
  const btnSubmitForm = document.getElementById('btn-submit-form');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener campos
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      showStatusMessage('Por favor, rellena todos los campos.', 'error');
      return;
    }

    // Efecto de carga en botón
    btnSubmitForm.disabled = true;
    btnSubmitForm.textContent = 'Enviando...';

    // Simular retraso de red
    setTimeout(() => {
      showStatusMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.', 'success');
      contactForm.reset();
      
      // Restaurar botón
      btnSubmitForm.disabled = false;
      btnSubmitForm.textContent = 'Enviar Mensaje';
    }, 1500);
  });

  const showStatusMessage = (text, type) => {
    formStatusMessage.textContent = text;
    formStatusMessage.className = `form-message ${type}`;
    
    // Ocultar mensaje de estado después de 5 segundos
    setTimeout(() => {
      formStatusMessage.style.display = 'none';
    }, 5000);
  };

});
