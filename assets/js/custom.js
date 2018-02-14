"use strict";

var hamburgerMenu = document.querySelector(".hamburger__menu");
var hamburgerMenuClose = document.querySelector(".mobile__close__button .circle");
var mobileMenu = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener("click", function () {
    // let hamburgerMenuBar = document.querySelector(".hamburger__menu .bar");
    // hamburgerMenuBar.classList.toggle("animate");
    mobileMenu.classList.add("open");
});

hamburgerMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
});