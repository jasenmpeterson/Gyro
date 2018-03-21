// TODO: NEED TO MAKE THIS A LITTLE LESS SPECIFIC SO IT WORKS WITH ICON LIST IN GENERAL.

let technologyLinks = document.querySelectorAll(".technology__and__services a");

function animateLink(translateX, target, opacity, delay) {
    TweenMax.to(target.querySelector("article"), 0.5, {
        x: translateX,
        delay: delay,
        overwrite: "all"
    });
    TweenMax.to(target.querySelector("span"), 0.5, {
        opacity: opacity,
        delay: 0.25,
        overwrite: "all"
    });
}

function enterLink (target) {
    animateLink("145", target, 1);
}

function leaveLink (target) {
    animateLink("0", target, 0, 0.5);
}

for(let link of technologyLinks) {
    link.addEventListener("mouseenter", function (e) {
        enterLink(e.target);
    });
    link.addEventListener("mouseleave", function (e) {
        leaveLink(e.target);
    });
}
