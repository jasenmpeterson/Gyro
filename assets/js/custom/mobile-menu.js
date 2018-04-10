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

let mobileClickEvent = (e) => {
    let parent = e.target.parentNode;
    if(parent.classList.contains("parent__nav__item")) {
        let subMenu = parent.querySelector(".sub__menu.parent__sub__menu");
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
    } else {
        let subMenu = parent.querySelector(".sub__menu.child__sub__menu");
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