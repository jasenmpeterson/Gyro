// drill down
let drillDownButton = document.querySelectorAll(".primary_nav .sub__menu__child__title");

for(let drillDown of drillDownButton) {
    drillDown.addEventListener("click", (e) => {
        let parentMenu = e.target;
        let subMenu = e.target.parentNode.querySelector(".sub__menu");
        if(!subMenu.classList.contains("active")) {
            TweenMax.set(subMenu, {height: "auto"});
            TweenMax.from(subMenu, 0.2, {
                height: 0,
                onComplete: function () {
                    TweenMax.to(subMenu, 0.2, {
                        autoAlpha: 1,
                        backgroundColor: "#f4f4f4",
                        paddingBottom: 10
                    })
                }
            });
            parentMenu.classList.add("open");
            subMenu.classList.add("active");
        } else {
            TweenMax.to(subMenu, 0.2, {
                autoAlpha: 0,
                backgroundColor: "transparent",
                paddingBottom: 0,
                onComplete: function () {
                    TweenMax.to(subMenu, 0.2, {
                        height: 0,
                    })
                }
            });
            parentMenu.classList.remove("open");
            subMenu.classList.remove("active");
        }
        // e.target.classList.toggle("active");
        // let currentNode = e.target.parentNode;
        // currentNode.classList.toggle("open");
    })
}