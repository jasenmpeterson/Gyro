let section = document.querySelector(".news__posts");


// gsap
let tl = new TimelineMax();
tl.pause();

if(section !== null) {
    let articles = section.querySelectorAll("article");
    let title = section.querySelector("h2.title");
    // -- title
    tl.add(TweenMax.fromTo(title, 1, {
        opacity: 0,
        x: 45
    }, {
        opacity: 1,
        x: 0,
        ease: Circ.easeOut
    }));

// -- articles
    tl.add(TweenMax.staggerFromTo(articles, 1, {
        opacity: 0,
        y: 75
    }, {
        opacity: 1,
        y: 0,
        ease: Circ.easeOut
    }, 0.2), '-=0.9');
}

export function newsHomeAnimation (element) {
    if (element.classList.contains("news__posts")) {
        tl.play();
    }
}