"use strict";

//kontaktskjema
//henter feedback melding og knapp fra DOM, og lagrer som feedback og sendBtn
const feedback =document.getElementById("feedback");
const sendBtn =document.getElementById("sendBtn");

//"lytter" etter klikk på knappen
sendBtn.addEventListener("click", function(event) {

event.preventDefault();

 //viser meldigen etter knappen er trykket
feedback.style.display = "flex";

})