let drillDownButton = document.querySelectorAll(".drill__down button");

let openMenu = (e) => {
    let button = e.target;
    let menu = e.target.parentNode;
    let drillDownDropDown = menu.querySelector(".drill__down__drop__down");
    let drillDownDropDownList = menu.querySelectorAll(".drill__down__drop__down li");
    if(!drillDownDropDown.classList.contains("active")) {
        TweenMax.to(button, 0.3, {
            backgroundColor: "#FFB100",
            color: "white"
        });
        TweenMax.to(drillDownDropDown, 0.3, {
            opacity: 1,
            height: "auto",
            padding: 15,
            ease: Power2.easeOut
        });
        TweenMax.staggerTo(drillDownDropDownList, 0.3, {
            opacity: 1,
            x: 0,
            ease: Power2.easeOut
        }, 0.2);
        drillDownDropDown.classList.add("active");
    } else {
        TweenMax.staggerTo(drillDownDropDownList, 0.3, {
            opacity: 0,
            x: -10,
            ease: Power2.easeOut
        }, 0.1);
        TweenMax.to(drillDownDropDown, 0.3, {
            opacity: 0,
            height: 0,
            padding: 0,
            ease: Power2.easeOut
        });
        TweenMax.to(button, 0.3, {
            backgroundColor: "white",
            color: "#747D87",
            ease: Power2.easeOut
        });
        drillDownDropDown.classList.remove("active");
    }
};

for(let button of drillDownButton) {
    button.addEventListener("click", openMenu)
}