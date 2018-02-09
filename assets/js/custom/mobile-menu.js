let hamburgerMenu = document.querySelector(".hamburger__menu");

hamburgerMenu.addEventListener( "click", () => {
    let hamburgerMenuBar = document.querySelector(".hamburger__menu .bar");
    hamburgerMenuBar.classList.toggle("animate");
});