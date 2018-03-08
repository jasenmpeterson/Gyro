import {animationFlag} from "./global";

export function historyChartAnimation(element) {
    // history chart - our company - history page
    if(element.classList.contains("history__chart")) {

        let nextArrow = document.querySelector(".our__history .next__arrow");
        let prevArrow = document.querySelector(".our__history .prev__arrow");

        // anime js
        let circles = document.querySelectorAll(".our__history circle");
        let path = document.querySelector("#Path_553");
        let paths = document.querySelectorAll(".our__history #Group_154 path");
        let hasAnimationPlayed = () => {

            if(!animationFlag) {
                let setAnimatedCircle = () => {
                    anime({
                        targets: '.our__history circle.animated',
                        r: 15,
                        fill: "#FFB100"
                    });
                };
                anime({
                    targets: paths,
                    opacity: 1,
                    easing: 'easeInOutExpo',
                    delay: function(el, i, l) {
                        return i * 10;
                    }
                });
                anime({
                    targets: path,
                    opacity: 1,
                    strokeDashoffset: [anime.setDashoffset, 0],
                    strokeMiterlimit: 10,
                    strokeDasharray: 2435.3623046875,
                    easing: 'easeInOutSine',
                    duration: 1500,
                    delay: function(el, i) { return i * 250 }
                });
                anime({
                    targets: circles,
                    opacity: 1,
                    easing: 'easeInOutExpo',
                    delay: function(el, i, l) {
                        return i * 50;
                    },
                    complete: setAnimatedCircle
                });
                anime({
                    targets: '.our__history .date',
                    opacity: 1,
                    translateY: "-20",
                    delay: 800
                });
                anime({
                    targets: '.history__chart__content h2',
                    opacity: 1,
                    translateY: "-20",
                    delay: 1000
                });
                anime({
                    targets: '.history__chart__content p',
                    opacity: 1,
                    translateY: "-20",
                    delay: 1200
                });
                anime({
                    targets: prevArrow,
                    opacity: 1,
                    delay: 1400
                });
                anime({
                    targets: nextArrow,
                    opacity: 1,
                    delay: 1400
                });
                animationFlag = true;
            }
        };

        hasAnimationPlayed();

    }
}