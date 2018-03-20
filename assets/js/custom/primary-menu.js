// parent
let parentMenu = document.querySelectorAll(".parent__nav__item");

let subMenuOn = (e) => {
    let parent = e.target;
    let subMenu = parent.querySelector("ul.parent__sub__menu");
    hoverintent(parent,
        function() {
            TweenMax.to(subMenu, 0.4, {
                zIndex: 200,
                opacity: 1,
                y: 0
            })
        }, function() {
            TweenMax.to(subMenu, 0.5, {
                zIndex: -1,
                opacity: 0,
                y: 50,
                ease: Power4.easeOut
            })
        });
};

let subMenuOff = (e) => {
    let parent = e.target;
    let subMenu = parent.querySelector("ul.parent__sub__menu");
    TweenMax.to(subMenu, 0.5, {
        zIndex: -1,
        opacity: 0,
        y: 50,
        ease: Power4.easeOut
    })
};

for(let menu of parentMenu) {
    menu.addEventListener("mouseenter", subMenuOn);
}

// drill down
let drillDownButton = document.querySelectorAll(".sub__menu__child__title");

for(let drillDown of drillDownButton) {
    drillDown.addEventListener("click", (e) => {
    	e.target.classList.toggle("active");
        let currentNode = e.target.parentNode;
        currentNode.classList.toggle("open");
    })
}