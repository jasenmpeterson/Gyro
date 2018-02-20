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

// text splitting
Splitting.chars("[data-content-slider-splitting-chars]");
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

// text splitting
Splitting.chars("[data-technology-splitting-chars]");