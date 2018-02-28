"use strict";

var segmenter = new Segmenter(document.querySelector(".segmenter"), {
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
});
"use strict";

var contentSlider = document.querySelector(".content__slider");
contentSlider.classList.remove("is-hidden");
contentSlider.offsetHeight;

var flktyContentSlider = new Flickity(contentSlider, {
    prevNextButtons: false,
    pageDots: true,
    selectedAttraction: 0.01,
    friction: 0.15
});
"use strict";

// emeergence

emergence.init({
    offsetTop: 250,
    elemCushion: 0.5,
    reset: false,
    callback: function callback(element, state) {
        if (state === 'visible') {
            if (element.classList.contains("history")) {
                segmenter.animate();
                document.querySelector(".history h1").classList.add("title-slide-in");
                document.querySelector(".history p").classList.add("fade-in");
                document.querySelector(".history .button").classList.add("fade-in");
            }
            // history
        }
    }
});
"use strict";

Splitting.chars("[data-history-splitting-chars]");
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
    anime.remove(target.querySelector("article"), target.querySelector("span"), target.querySelector("figure"));
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
    anime({
        targets: [target.querySelector("figure")],
        scale: scale,
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