// home page history component
Splitting.chars("[data-history-splitting-chars]");

let segmenter =  document.querySelector(".segmenter") !== null ? new Segmenter(document.querySelector(".segmenter"),{
    pieces: 7,
    animation: {
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 600,
        translateZ: {min: 10, max: 65}
    },
    parallax: true,
    parallaxMovement: {min: 5, max: 10},
    positions: [
        {top: 10, left: 20, width: 20, height: 30},
        {top: 8, left: 35, width: 30, height: 20},
        {top: 25, left: 18, width: 14, height: 25},
        {top: 23, left: 50, width: 20, height: 10},
        {top: 30, left: 65, width: 10, height: 30},
        {top: 48, left: 20, width: 10, height: 13},
        {top: 50, left: 67, width: 10, height: 20}
    ]
}) : '';

// our company history blocks components

let historyBlocks = document.querySelectorAll(".history__blocks .wrap");

let animateHistoryBlock = (el) => {
    historyBlocks.forEach(el => el.classList.remove("active"));
    el.target.classList.add("active");
};

historyBlocks.forEach(el => el.addEventListener("click", animateHistoryBlock));

// our history timeline

let targets = document.querySelectorAll(".our__history circle");

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
            }
        });
    }
};

targets.forEach(el => el.addEventListener("click", circleSelect));

// left/right functionality

let nextArrow = document.querySelector(".our__history .next__arrow");
let prevArrow = document.querySelector(".our__history .prev__arrow");
let historyContentSections = document.querySelectorAll(".history__chart__content");

let nextArrowFunction = () => {
    let currSection = document.querySelector(".history__chart__content.active");
    let nextSectionID = parseInt(currSection.dataset.content) + 1;
    let nextSection = document.querySelector("circle[data-id='"+nextSectionID+"']");
    triggerEvent(nextSection, "click");
};

let prevArrowFunction = () => {
    let currSection = document.querySelector(".history__chart__content.active");
    let prevSectionID = parseInt(currSection.dataset.content) === 0 ? 0 : parseInt(currSection.dataset.content) - 1;
    let prevSection = document.querySelector("[data-id='"+prevSectionID+"']");
    triggerEvent(prevSection, "click");
};

let triggerEvent = (elem, event) => {
    let clickEvent = new Event(event);
    elem.dispatchEvent(clickEvent);
};

nextArrow.addEventListener("click", nextArrowFunction);
prevArrow.addEventListener("click", prevArrowFunction);