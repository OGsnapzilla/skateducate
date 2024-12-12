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









