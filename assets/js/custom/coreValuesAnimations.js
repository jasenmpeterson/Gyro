// core values -- about page
export function coreValuesAnimation(element) {
    if (element.classList.contains("core__values")) {
        let coreValuesHeader = document.querySelector(".core__values h2.title");
        let coreValueContent = document.querySelectorAll(".core__values .content__wrap");
        TweenMax.to(coreValuesHeader, 0.5, { opacity: 1, y: 0 });
        TweenMax.staggerTo(coreValueContent, 0.5, {
            opacity: 1,
            y: 0,
            delay: 0.5,
        }, 0.2);
    }
}