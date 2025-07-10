document.addEventListener('DOMContentLoaded', function () {
  new Splide('.testimonios', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
    interval: 3000, // Tiempo entre cada scroll automático (en milisegundos)
    pauseOnHover: false,
    pauseOnFocus: false,
    gap: '1rem', // Espaciado entre slides (puedes ajustar el valor)
  }).mount();
});
// Responsive navigation bar behavior
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navMenu = document.querySelector(".nav-menu");

  if (!navbar || !navMenu) return;

  // Create the hamburger menu button
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = `
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  `;

  navbar.appendChild(menuToggle);

  // Toggle navigation menu on click
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Hide menu after clicking a link (on mobile)
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});

// Inicializar Splide para el carrusel de testimonios
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1rem',
    autoplay: true,
    interval: 3000,
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
    },
  });
  splide.mount();
});

// Manejar el envío del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevenir el envío normal del formulario
      
      // Obtener los valores del formulario
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Validar que todos los campos estén llenos
      if (name.trim() && email.trim() && message.trim()) {
        // Mostrar alert de confirmación
        alert(`¡Gracias por contactarnos, ${name}!\n\nHemos recibido tu mensaje y nos pondremos en contacto contigo pronto a través de ${email}.`);
        
        // Limpiar el formulario después del envío
        contactForm.reset();
      } else {
        // Mostrar alert de error si faltan campos
        alert('Por favor, completa todos los campos del formulario.');
      }
    });
  }
});

// Navegación suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
