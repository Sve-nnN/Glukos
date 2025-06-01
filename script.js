//Barra de navegacion responsiva
/*
    <nav class="navbar flex">
      <img
        src="/assets/logo.png"
        alt="Glukos Logo"
        style="width: 50px; height: auto"
      />
      <ul>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Caracteristicas</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Precios</a></li>
        <li><a href="#">Soporte</a></li>
        <li><a href="download.html" class="cta">Descargar App</a></li>
      </ul>
    </nav>
*/
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return; // Prevent errors if navbar is not found

  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML =
    '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';

  navbar.appendChild(menuToggle);
  // Add event listener to toggle the navbar
  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  const links = document.querySelectorAll(".navbar ul li a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});
