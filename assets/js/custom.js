"use strict";

var hamburgerMenu = document.querySelector(".hamburger__menu");

hamburgerMenu.addEventListener("click", function () {
    var hamburgerMenuBar = document.querySelector(".hamburger__menu .bar");
    hamburgerMenuBar.classList.toggle("animate");
});