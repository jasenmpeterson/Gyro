// TODO: NEED TO MAKE THIS A LITTLE LESS SPECIFIC SO IT WORKS WITH ICON LIST IN GENERAL.

let technologyLinks = document.querySelectorAll(".technology__and__services a");

function animateLink(translateX, translateY, target, opacity, scale) {
    anime.remove( target.querySelector("article"), target.querySelector("span"));
    anime({
        targets: [target.querySelector("article")],
        translateX: translateX,
        translateY: translateY,
        duration: 400,
        easing: 'easeOutQuad'
    });
    anime({
        targets: [target.querySelector("span")],
        opacity: opacity,
        duration: 400,
        delay: 50,
        easing: 'easeOutQuad'
    });
}

function enterLink (target) {
    animateLink("+=145", 0, target, 1, 0.5 );
}

function leaveLink (target) {
    animateLink("0", 0, target, 0, 1);
}

for(let link of technologyLinks) {
    link.addEventListener("mouseenter", function (e) {
        enterLink(e.target);
    });
    link.addEventListener("mouseleave", function (e) {
        leaveLink(e.target);
    });
}
