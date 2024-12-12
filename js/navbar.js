"use strict";

const hamburger = document.querySelector(".hamburger"); //Tager fat i div elementet med hamburger som class
const navMenu = document.querySelector(".nav-menu"); //Tager fat i menupunkterne for den udfoldede menu

hamburger.addEventListener("click", mobileMenu); //Tilføjer mobileMenu funktion på hamburger menuen ved klik

//Tilføjer 'active' class på menu. Kan bruges til 'X' animation i CSS
function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link"); //Tager fat i alle menupunkter med nav-link som class
navLink.forEach(n => n.addEventListener("click", closeMenu)); //For hvert navLink der bliver trykket på, lukkes burgermenuen ved hjælp af eventListener

//Lukker burgermenu når link bliver trykket
function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}

//-----------------------------------------------------

//Tabs
//henter knappene
const undervisningBtn =document.getElementById("undervisningBtn");
const festivalBtn =document.getElementById("festivalBtn");
const campsBtn =document.getElementById("campsBtn");

//henter seksjoner
const undervisningSection =document.getElementById("mappe-undervisning");
const festivalSection =document.getElementById("mappe-festivaler");
const campsSection =document.getElementById("mappe-camps");

//vise riktig seksjon
function showSection(section) {
    undervisningSection .classList.remove('active');
    festivalSection.classList.remove('active');
    campsSection.classList.remove('active');

    section.classList.add('active');
}

//knappene

undervisningBtn.addEventListener('click', function() {
    showSection(undervisningSection);
});

festivalBtn.addEventListener('click', function() {
    showSection(festivalSection);
});

campsBtn.addEventListener('click', function() {
    showSection(campsSection);
});









