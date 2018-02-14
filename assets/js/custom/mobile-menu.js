let hamburgerMenu = document.querySelector(".hamburger__menu");
let hamburgerMenuClose = document.querySelector(".mobile__close__button .circle");
let mobileMenu = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener( "click", () => {
    // let hamburgerMenuBar = document.querySelector(".hamburger__menu .bar");
    // hamburgerMenuBar.classList.toggle("animate");
    mobileMenu.classList.add("open");
});

hamburgerMenuClose.addEventListener( "click", () => {
    mobileMenu.classList.remove("open");
});