"use strict";

if (document.querySelector(".content__slider") !== null) {

    var contentSlider = document.querySelector(".content__slider");
    contentSlider.classList.remove("is-hidden");
    contentSlider.offsetHeight;

    var flktyContentSlider = new Flickity(contentSlider, {
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.01,
        friction: 0.15
    });
}
"use strict";

// emeergence
var animationFlag = false;

emergence.init({
    offsetTop: 250,
    elemCushion: 0.5,
    reset: false,
    callback: function callback(element, state) {
        if (state === 'visible') {
            // history -- home page
            if (element.classList.contains("history__home")) {
                segmenter.animate();
                document.querySelector(".history h1").classList.add("title-slide-in");
                document.querySelector(".history p").classList.add("fade-in");
                document.querySelector(".history .button").classList.add("fade-in");
            }
            // history chart - our company - history page
            if (element.classList.contains("history__chart")) {

                var nextArrow = document.querySelector(".our__history .next__arrow");
                var prevArrow = document.querySelector(".our__history .prev__arrow");

                // anime js
                var circles = document.querySelectorAll(".our__history circle");
                var path = document.querySelector("#Path_553");
                var paths = document.querySelectorAll(".our__history #Group_154 path");
                var hasAnimationPlayed = function hasAnimationPlayed() {

                    if (!animationFlag) {
                        var setAnimatedCircle = function setAnimatedCircle() {
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
                            delay: function delay(el, i, l) {
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
                            delay: function delay(el, i) {
                                return i * 250;
                            }
                        });
                        anime({
                            targets: circles,
                            opacity: 1,
                            easing: 'easeInOutExpo',
                            delay: function delay(el, i, l) {
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
    }
});

var ourHistoryChart = document.querySelector(".history__chart");
"use strict";

// home page history component
Splitting.chars("[data-history-splitting-chars]");

var segmenter = document.querySelector(".segmenter") !== null ? new Segmenter(document.querySelector(".segmenter"), {
    pieces: 7,
    animation: {
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 600,
        translateZ: { min: 10, max: 65 }
    },
    parallax: true,
    parallaxMovement: { min: 5, max: 10 },
    positions: [{ top: 10, left: 20, width: 20, height: 30 }, { top: 8, left: 35, width: 30, height: 20 }, { top: 25, left: 18, width: 14, height: 25 }, { top: 23, left: 50, width: 20, height: 10 }, { top: 30, left: 65, width: 10, height: 30 }, { top: 48, left: 20, width: 10, height: 13 }, { top: 50, left: 67, width: 10, height: 20 }]
}) : '';

// year

var year = document.querySelector(".our__history .date h1");

// our company history blocks components

var historyBlocks = document.querySelectorAll(".history__blocks .wrap");

var animateHistoryBlock = function animateHistoryBlock(el) {
    historyBlocks.forEach(function (el) {
        return el.classList.remove("active");
    });
    el.target.classList.add("active");
};

historyBlocks.forEach(function (el) {
    return el.addEventListener("click", animateHistoryBlock);
});

// our history timeline

var targets = document.querySelectorAll(".our__history circle");

var circleDeselect = function circleDeselect() {
    var activeCircles = document.querySelectorAll(".our__history circle.animated");

    var _loop = function _loop(circle) {
        anime.remove(circle);
        anime({
            targets: circle,
            r: 8.77,
            fill: "#FFF",
            begin: function begin() {
                circle.classList.remove("animated");
            }
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = activeCircles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var circle = _step.value;

            _loop(circle);
        }
        // previous content section
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var prevSection = document.querySelector(".history__chart__content.active");
    anime({
        targets: prevSection,
        opacity: 0,
        translateY: "20",
        color: "#18191a",
        delay: 200,
        run: function run() {
            prevSection.classList.remove("active");
        }
    });
};

var circleSelect = function circleSelect(el) {
    // previous year
    var previousYear = document.querySelector(".our__history .date h1").innerHTML;
    // circles
    var currCircle = el.target;
    if (!currCircle.classList.contains("animated")) {
        circleDeselect();
        anime({
            targets: currCircle,
            r: 15,
            fill: "#FFB100",
            begin: function begin() {
                currCircle.classList.add("animated");
            }
        });

        // set date
        var setDate = function setDate() {
            var currYear = document.querySelector(".history__chart__content.active").dataset.date;
            var obj = { date: document.querySelector(".our__history .date h1").innerHTML };

            anime({
                targets: obj,
                date: currYear.toString(),
                round: 1,
                easing: 'linear',
                duration: 200,
                update: function update() {
                    var el = document.querySelector(".our__history .date h1");
                    el.innerHTML = obj.date;
                }
            });
        };

        // set current section to active
        var id = el.target.dataset.id;
        var currSection = document.querySelector("[data-content='" + id + "']");
        anime({
            targets: currSection,
            opacity: 1,
            translateY: "-20",
            delay: 500,
            begin: function begin() {
                currSection.classList.add("active");
                setDate();
            }
        });
    }
};

targets.forEach(function (el) {
    return el.addEventListener("click", circleSelect);
});

// left/right functionality

var nextArrow = document.querySelector(".our__history .next__arrow");
var prevArrow = document.querySelector(".our__history .prev__arrow");

var nextArrowFunction = function nextArrowFunction() {
    var currSection = document.querySelector(".history__chart__content.active");
    var nextSectionID = parseInt(currSection.dataset.content) === 14 ? 0 : parseInt(currSection.dataset.content) + 1;
    var nextSection = document.querySelector("circle[data-id='" + nextSectionID + "']");
    triggerEvent(nextSection, "click");
};

var prevArrowFunction = function prevArrowFunction() {
    var currSection = document.querySelector(".history__chart__content.active");
    var prevSectionID = parseInt(currSection.dataset.content) === 0 ? 14 : parseInt(currSection.dataset.content) - 1;
    var prevSection = document.querySelector("[data-id='" + prevSectionID + "']");
    triggerEvent(prevSection, "click");
};

var triggerEvent = function triggerEvent(elem, event) {
    var clickEvent = new Event(event);
    elem.dispatchEvent(clickEvent);
};

if (nextArrow !== null) {
    nextArrow.addEventListener("click", nextArrowFunction);
    prevArrow.addEventListener("click", prevArrowFunction);
}
"use strict";

var hamburgerMenu = document.querySelector(".hamburger__menu");
var hamburgerMenuClose = document.querySelector(".mobile__close__button .circle");
var mobileMenu = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener("click", function () {
    // let hamburgerMenuBar = document.querySelector(".hamburger__menu .bar");
    // hamburgerMenuBar.classList.toggle("animate");
    mobileMenu.classList.add("open");
});

hamburgerMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
});
"use strict";

var drillDownButton = document.querySelectorAll(".sub__menu__child__title");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = drillDownButton[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var drillDown = _step.value;

        drillDown.addEventListener("click", function (e) {
            e.target.classList.toggle("active");
            var currentNode = e.target.parentNode;
            currentNode.classList.toggle("open");
        });
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
"use strict";

if (document.querySelector(".rotating__banner") !== null) {
    var rotatingBanner = document.querySelector(".rotating__banner");
    rotatingBanner.classList.remove("is-hidden");
    rotatingBanner.offsetHeight;

    var flkty = new Flickity(rotatingBanner, {
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.01,
        friction: 0.15
    });

    // text splitting
    Splitting.chars("[data-banner-splitting-chars]");
}
"use strict";

var searchInputElem = document.querySelector("input.search");
var searchIconElem = document.querySelector(".icon__search");
var closeIconElem = document.querySelector(".icon__close");

searchInputElem.addEventListener("focus", function (e) {
    searchIconElem.classList.add("inactive");
    closeIconElem.classList.add("active");
});

searchInputElem.addEventListener("blur", function (e) {
    searchIconElem.classList.remove("inactive");
    closeIconElem.classList.remove("active");
});

closeIconElem.addEventListener("click", function (e) {
    if (searchInputElem.value !== "") {
        searchInputElem.value = "";
    }
});
"use strict";

// TODO: NEED TO MAKE THIS A LITTLE LESS SPECIFIC SO IT WORKS WITH ICON LIST IN GENERAL.

var technologyLinks = document.querySelectorAll(".technology__and__services a");

function animateLink(translateX, translateY, target, opacity, scale) {
    anime.remove(target.querySelector("article"), target.querySelector("span"));
    anime({
        targets: [target.querySelector("article")],
        translateX: translateX,
        translateY: translateY,
        duration: 400,
        easing: 'easeOutQuad'
    });
    anime({
        targets: [target.querySelector("span")],
        opacity: opacity,
        duration: 400,
        delay: 50,
        easing: 'easeOutQuad'
    });
}

function enterLink(target) {
    animateLink("+=145", 0, target, 1, 0.5);
}

function leaveLink(target) {
    animateLink("0", 0, target, 0, 1);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = technologyLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var link = _step.value;

        link.addEventListener("mouseenter", function (e) {
            enterLink(e.target);
        });
        link.addEventListener("mouseleave", function (e) {
            leaveLink(e.target);
        });
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}