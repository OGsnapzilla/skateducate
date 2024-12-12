"use strict";

window.addEventListener('scroll', handleScroll); //Eventlistener: ved scroll af musen aktiveres funktionen 'handleScroll'

function handleScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop; //returnerer hvor mange pixels som er scrollet. Begge scrollTop gør det samme, men virker til gamle og moderne browsere
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    let scrolled = (winScroll / height) * 100;
  
    document.getElementById("page-progress").style.width = scrolled + "%";
}

