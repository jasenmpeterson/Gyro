let technologyLinks = document.querySelectorAll(".technology__and__services a");

function animateLink(translateX, target) {
    anime.remove(target);
    anime({
        targets: target,
        translateX: translateX,
        duration: 600
    });
}

function enterLink (target) {
    animateLink("50%", target);
}

function leaveLink (target) {
    animateLink("0%", target);
}

for(let link of technologyLinks) {
    link.addEventListener("mouseenter", function (e) {
        enterLink(e.target);
    });
    link.addEventListener("mouseleave", function (e) {
        leaveLink(e.target);
    });
}
