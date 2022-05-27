const hamburguer = document.querySelector('.btnMenu');
const navMenu = document.querySelector('.menu');

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})