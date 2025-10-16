document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("nav-open");
      menuToggle.classList.toggle("open");
    });
  } else {
    console.error("Menu toggle or nav element not found");
  }
});
