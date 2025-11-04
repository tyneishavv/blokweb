// JavaScript Document
console.log("hi");

// HAMBURGER NAV ONTWIKKELEN

// Mijn hamburgermenu-icon wordt hiermee opgeroepen
var openButton = document.querySelector("body > header > nav:nth-of-type(2) > ul > li > button");

// Als er op de hamburger-icon wordt gedrukt wordt er nu een functie uitgevoerd
openButton.onclick = openMenu;

function openMenu() {
    // De nav die in mijn hamburgermenu zit
    var deNav = document.querySelector("body > header > nav:nth-of-type(3)");

    // Hiermee is er nu een class toegevoegd aan mijn hamburgermenu nav
    deNav.classList.add("toonMenu");
}






// Dit is om mijn hamburgermenu weer dicht te doen
var sluitButton = document.querySelector("body > header > nav:nth-of-type(3) > ul > li:nth-of-type(1) button");

sluitButton.onclick = sluitMenu;

function sluitMenu() {
    var deNav = document.querySelector("body > header > nav:nth-of-type(3)");
    deNav.classList.remove("toonMenu");
}