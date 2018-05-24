let hamburgerMenu = document.querySelector(".hamburger__menu");
let hamburgerMenuClose = document.querySelector(".mobile__close__button .circle");
let mobileMenu = document.querySelector(".mobile__menu");
let mobileMenuParent = document.querySelectorAll(".mobile__menu li span");

hamburgerMenu.addEventListener( "click", () => {
    TweenMax.to(mobileMenu, 0.3, {
        opacity: 1,
        x: 0,
        ease: Power2.easeIn
    });
    mobileMenu.classList.add("open");
});

hamburgerMenuClose.addEventListener( "click", () => {
    mobileMenu.classList.remove("open");
    TweenMax.to(mobileMenu, 0.3, {
        opacity: 0,
        x: -100,
        ease: Power2.easeOut
    })
});