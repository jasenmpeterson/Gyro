// home page history component
Splitting.chars("[data-history-splitting-chars]");

// year

let year = document.querySelector(".our__history .date h1");

// our company history blocks components

let historyBlocks = document.querySelectorAll(".history__blocks .wrap");

let animateHistoryBlock = (el) => {
    historyBlocks.forEach(el => el.classList.remove("active"));
    el.target.classList.add("active");
};

historyBlocks.forEach(el => el.addEventListener("click", animateHistoryBlock));

// our history timeline

let targets = document.querySelectorAll(".our__history .svg__wrap svg circle");

let circleDeselect = () => {
    let activeCircles =  document.querySelectorAll(".our__history circle.animated");
    for(let circle of activeCircles) {
        anime.remove(circle);
        anime({
            targets: circle,
            r: 8.77,
            fill: "#FFF",
            begin: function() {
                circle.classList.remove("animated");
            }
        })
    }
    // previous content section
    let prevSection = document.querySelector(".history__chart__content.active");
    if(prevSection) {
        anime({
            targets: prevSection,
            opacity: 0,
            translateY: "20",
            color: "#18191a",
            delay: 200,
            run: function () {
                prevSection.classList.remove("active");
            }
        });
    }
};

let circleSelect = (el) => {
    // circles
    let currCircle = el.target;
    if(!currCircle.classList.contains("animated")) {
        circleDeselect();
        anime({
            targets: currCircle,
            r: 15,
            fill: "#FFB100",
            begin: function() {
                currCircle.classList.add("animated");
            }
        });

        // set date
        let setDate = () => {
            let currYear = document.querySelector(".history__chart__content.active").dataset.date;
            let obj = { date: document.querySelector(".our__history .date h1").innerHTML };

            anime({
                targets: obj,
                date: currYear.toString(),
                round: 1,
                easing: 'linear',
                duration: 200,
                update: function () {
                    let el = document.querySelector(".our__history .date h1");
                    el.innerHTML = obj.date;
                }
            })
        };

        // set current section to active
        let id = el.target.dataset.id;
        let currSection = document.querySelector("[data-content='"+id+"']");
        anime({
            targets: currSection,
            opacity: 1,
            translateY: "-20",
            delay: 500,
            begin: function () {
                currSection.classList.add("active");
                setDate();
            }
        });
    }

};

for(let target of targets) {
    target.addEventListener("click", circleSelect)
}

// left/right functionality

let nextArrow = document.querySelector(".our__history .next__arrow");
let prevArrow = document.querySelector(".our__history .prev__arrow");

let nextArrowFunction = () => {
    let currSection = document.querySelector(".history__chart__content.active");
    let nextSectionID = parseInt(currSection.dataset.content)  === 14 ? 0 : parseInt(currSection.dataset.content) + 1;
    let nextSection = document.querySelector("circle[data-id='"+nextSectionID+"']");
    triggerEvent(nextSection, "click");
};

let prevArrowFunction = () => {
    let currSection = document.querySelector(".history__chart__content.active");
    let prevSectionID = parseInt(currSection.dataset.content) === 0 ? 14 : parseInt(currSection.dataset.content) - 1;
    let prevSection = document.querySelector("[data-id='"+prevSectionID+"']");
    triggerEvent(prevSection, "click");
};

let triggerEvent = (elem, event) => {
    let clickEvent = new Event(event);
    elem.dispatchEvent(clickEvent);
};

if(nextArrow !== null) {
    nextArrow.addEventListener("click", nextArrowFunction);
    prevArrow.addEventListener("click", prevArrowFunction);
}

// our history page elements
let ourVisionSection = document.querySelector(".about__page.our__vision");
let ourVisionBackgroundImage = document.querySelector(".about__page.our__vision .background__image");
let ourVisionHeader = document.querySelector(".about__page.our__vision h2.title");
let ourVisionParagraph = document.querySelector(".about__page.our__vision p");
if(ourVisionSection) {
    TweenMax.to(ourVisionBackgroundImage, 1, { opacity: 1, x: 0, delay: 0.2, ease: Power4.easeOut });
    TweenMax.to(ourVisionHeader, 0.5, { opacity: 1, y: 0, delay: 0.4 });
    TweenMax.to(ourVisionParagraph, 0.5, { opacity: 1, y: 0, delay: 0.6 });
}