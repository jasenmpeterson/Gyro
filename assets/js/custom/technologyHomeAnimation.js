let section = document.querySelector(".technology__and__services");

// gsap
let tl = new TimelineMax();
tl.pause();

if(section !== null) {
    let title = section.querySelector("h2.title");
    let p = section.querySelector("p");
    let iconList = section.querySelectorAll("li");

    // -- title
    tl.add(TweenMax.fromTo(title, 1, {
        opacity: 0,
        x: 45
    }, {
        opacity: 1,
        x: 0,
        ease: Circ.easeOut
    }));

// paragraph
    tl.add(TweenMax.fromTo(p, 0.5, {
        opacity: 0,
        x: 45
    }, {
        opacity: 1,
        x: 0,
        ease: Circ.easeOut
    }), "-=.9");

// icon list
    tl.add(TweenMax.staggerFromTo(iconList, 1, {
        opacity: 0,
        x: 75
    }, {
        opacity: 1,
        x: 0,
        ease: Circ.easeOut
    }, 0.2),  "-=.9");
}

export function technologyHomeAnimation(element) {
    if (element.classList.contains("technology__and__services")) {
        tl.play();
    }
}