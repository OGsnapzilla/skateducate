const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

//Tilføjer 'active' class på menu. Kan bruges til 'X' animation i CSS
function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

//Lukker burgermenu når link bliver trykket
function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}