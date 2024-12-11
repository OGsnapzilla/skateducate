"use strict";

//Tilbake til toppen
//hente knapp og img i div med id: back-to-top fra DOM, og lagrer som backToTop
const backToTop =document.getElementById("back-to-top")

//"lytter" etter scroll. Når scroll går over 800px dukker knapp og img opp
window.addEventListener("scroll",function() {
    if (window.scrollY > 800) {
        backToTop.style.display = 'block';
//ellers er den skjult
    } else backToTop.style.display = 'none';

});

//Setter klikk på img og knapp i id:back-to-top. 
backToTop.onclick = function() {
    //Når knappen klikkes scrolles siden
    window.scrollTo({
        top: 0, //sier at det er toppen av siden
        behavior: "smooth" //Så hendelsen er smooth
    });
};