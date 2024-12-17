"use strict";

function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Læs videre";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Læs mindre";
      moreText.style.display = "inline";
    }
  }