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


// Confetti toevoegen als er op de knop 'add to cart' wordt gedrukt op de product.html - dit is mijn micro-interactie
var confettiButton = document.querySelector("body > main > button:first-of-type");

confettiButton.addEventListener("click", function() {

    var popup = document.createElement("img");
    popup.src = "images/productpage/buttonConffetti1-1.png"; 
    popup.alt = 'Confetti';
    popup.classList.add('popup-img');

    document.body.appendChild(popup);

    setTimeout(function() {
        popup.classList.add('show');
  }, 10);

    setTimeout(function() {
    popup.remove();
  }, 1200);
});

// https://www.w3schools.com/jsref/event_onclick.asp
// https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/
// https://www.w3schools.com/jsref/met_win_settimeout.asp

