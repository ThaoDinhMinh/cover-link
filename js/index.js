const Icone = document.querySelector(".icone");
const ListNav = document.querySelector(".list-nav");

Icone.addEventListener("click", () => {
  document.querySelector(".list-nav").classList.toggle("toggle-block");
  document.querySelector(".header-fix").classList.toggle("height-full");
  document.querySelector(".icone").classList.toggle("change");
});

const LocalBtn = document.querySelector(".local");

LocalBtn.addEventListener("click", () => {
  document.querySelector(".image-map").classList.toggle("d-block");
});
