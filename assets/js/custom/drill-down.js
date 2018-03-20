let drillDownButton = document.querySelectorAll(".drill__down button");

let openMenu = (e) => {
    let button = e.target;
    let menu = e.target.parentNode;
    let drillDownDropDown = menu.querySelector(".drill__down__drop__down");
    let drillDownDropDownList = menu.querySelectorAll(".drill__down__drop__down li");
    if(!drillDownDropDown.classList.contains("active")) {
        TweenMax.to(button, 0.5, {
            backgroundColor: "#FFB100",
            borderTop: "#FFB100",
            color: "white",
            paddingLeft: 15,
            marginBottom: 10
        });
        TweenMax.to(drillDownDropDown, 0.5, {
            opacity: 1,
            height: "auto",
            paddingBottom: 10,
            ease: Power2.easeOut
        });
        TweenMax.staggerTo(drillDownDropDownList, 0.5, {
            opacity: 1,
            x: 0,
            ease: Power2.easeOut
        }, 0.2);
        drillDownDropDown.classList.add("active");
    } else {
        TweenMax.staggerTo(drillDownDropDownList, 0.3, {
            opacity: 0,
            x: -200,
            ease: Power2.easeIn
        }, 0.1);
        TweenMax.to(drillDownDropDown, 0.3, {
            opacity: 0,
            height: 0,
            paddingBottom: 0,
            delay: 0.5,
            ease: Power2.easeIn
        });
        TweenMax.to(button, 0.5, {
            backgroundColor: "transparent",
            color: "#747D87",
            borderTop: "1px solid #cfd4d8",
            paddingLeft: 0,
            marginBottom: 0
        });
        drillDownDropDown.classList.remove("active");
    }
};

for(let button of drillDownButton) {
    button.addEventListener("click", openMenu)
}