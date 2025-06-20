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
