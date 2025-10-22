// JavaScript Document
console.log("hi");

// HAMBURGER NAV ONTWIKKELEN

var menuButton = document.querySelector("body header nav:nth-of-type(2) ul li button")
var hamburgerNav = document.querySelector("body header nav:nth-of-type(3) ul")

menuButton.addEventListener("click", function () {
    console.log("menuButton geklikt!")
    hamburgerNav.classList.toggle("yay")
})