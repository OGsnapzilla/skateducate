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




//Tilbake til toppen
//hente knapp
const backToTopBtn =document.getElementById("backToTopBtn");

//vise knappen

//funksjon av knapp: sender til toppen
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};