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
        delay: 200,
        begin: function () {
            prevSection.classList.remove("active");
            console.log("off");
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
        let currSection = document.querySelector("[data-content='"+id+"'");
        anime({
            targets: currSection,
            opacity: 1,
            delay: 500,
            begin: function () {
                currSection.classList.add("active");
                console.log("on");
            }
        });
    }
};

targets.forEach(el => el.addEventListener("click", circleSelect));