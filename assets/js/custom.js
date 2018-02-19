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