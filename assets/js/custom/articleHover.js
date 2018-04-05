let articles = document.querySelectorAll(".article__hover");
if(typeof articles !== "undefined") {
    for(let article of articles) {
        article.addEventListener("mouseenter", (event) => {
            let contentParagraph = event.target.querySelector(".content");
            let excerptParagraph = event.target.querySelector(".excerpt");
            TweenMax.set(contentParagraph, {display: "block"});
            TweenMax.to(excerptParagraph, 0.5, {opacity: 0, height: 0});
            TweenMax.fromTo(contentParagraph, 0.5, {opacity: 0, display: "none"}, {opacity: 1, height: "auto", display: "block", ease: Power2.easeOut});
        });
    }
}