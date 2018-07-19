// core values -- about page
const tl = new TimelineMax();
let played = false;
tl.pause();
export function coreValuesAnimation(element) {
    if (element.classList.contains("core__values")) {
        if(!played) {
            const diagram = document.querySelector('.core-values__diagram');
            const circleOne = document.querySelector('.core-values__diagram .circle-one ');
            const circleTwo = document.querySelector('.core-values__diagram .circle-two');
            const circleThree = document.querySelector('.core-values__diagram .circle-three');
            const circleFour = document.querySelector('.core-values__diagram .circle-four');
            const circleFive = document.querySelector('.core-values__diagram .circle-five');
            const circleSix = document.querySelector('.core-values__diagram .circle-six');
            const circleSeven = document.querySelector('.core-values__diagram .circle-seven');
            const circleEight = document.querySelector('.core-values__diagram .circle-eight');
            const clssix = document.querySelectorAll('.core-values__diagram .cls-6');
            const clseight = document.querySelectorAll('.core-values__diagram .cls-8');
            tl.add(
                TweenMax.to(diagram, 1, {
                    y: 0,
                    opacity: 1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleOne, 1, {
                    drawSVG: 0
                },{
                    rotation: -360,
                    opacity: 1,
                    drawSVG: '100%',
                    delay: -0.8,
                    transformOrigin: '55% 55%',
                    ease: Power2.easeOut 
                })
            );
            tl.add(
                TweenMax.fromTo(circleTwo, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleThree, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleFour, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleFive, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleSix, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleSeven, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(circleThree, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.to(circleEight, 1, {
                    transformOrigin: '50% 50%',
                    rotation: 360,
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.fromTo(clssix, 1, {
                    drawSVG: 0
                }, {
                    drawSVG: '100%',
                    opacity: 1,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.add(
                TweenMax.to(clseight, 1, {
                    transformOrigin: '50% 50%',
                    rotation: 360,
                    opacity: 0.50,
                    delay: -1,
                    ease: Power2.easeOut
                })
            );
            tl.play();
            played = true;
        }
    }
}
