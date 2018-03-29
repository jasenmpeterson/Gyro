let hamburgerMenu = document.querySelector(".hamburger__menu");
let hamburgerMenuClose = document.querySelector(".mobile__close__button .circle");
let mobileMenu = document.querySelector(".mobile__menu");
let mobileMenuParent = document.querySelectorAll(".mobile__menu li.menu-item-has-children");

hamburgerMenu.addEventListener( "click", () => {
    // let hamburgerMenuBar = document.querySelector(".hamburger__menu .bar");
    // hamburgerMenuBar.classList.toggle("animate");
    mobileMenu.classList.add("open");
});

hamburgerMenuClose.addEventListener( "click", () => {
    mobileMenu.classList.remove("open");
});

let mobileClickEvent = (e) => {
    let parent = e.target.parentNode;
    let subMenu = parent.querySelector(".sub__menu");
    if(!subMenu.classList.contains("active")) {
        TweenMax.set(subMenu, {height: "auto"});
        TweenMax.from(subMenu, 0.2, {
            height: 0,
            onComplete: function () {
                TweenMax.to(subMenu, 0.2, {
                    autoAlpha: 1,
                    backgroundColor: "#f4f4f4"
                })
            }
        });
        parent.classList.add("open");
        subMenu.classList.add("active");
    } else {
        if(!subMenu.classList.contains("child__sub__menu")) {
            TweenMax.to(subMenu, 0.2, {
                autoAlpha: 0,
                backgroundColor: "transparent",
                onComplete: function () {
                    TweenMax.to(subMenu, 0.2, {
                        height: 0,
                    })
                }
            });
            parent.classList.remove("open");
            subMenu.classList.remove("active");
        }
    }
};

for(let parent of mobileMenuParent) {
    parent.addEventListener("click", mobileClickEvent);
}