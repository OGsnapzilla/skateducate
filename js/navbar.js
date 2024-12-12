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

