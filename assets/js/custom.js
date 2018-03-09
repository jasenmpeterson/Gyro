'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 5);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "animationFlag", function () {
        return animationFlag;
    });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__historyHomeAnimation__ = __webpack_require__(1);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__historyChartAnimation__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__technologyHomeAnimation__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__newsHomeAnimation__ = __webpack_require__(4);
    // animations


    var animationFlag = false;

    // emergence

    emergence.init({
        offsetTop: 250,
        elemCushion: 0.5,
        reset: false,
        callback: function callback(element, state) {
            if (state === 'visible') {
                // history -- home page
                Object(__WEBPACK_IMPORTED_MODULE_0__historyHomeAnimation__["historyHomeAnimation"])(element);
                // history chart - our company - history page
                Object(__WEBPACK_IMPORTED_MODULE_1__historyChartAnimation__["historyChartAnimation"])(element);
                // technology -- home page
                Object(__WEBPACK_IMPORTED_MODULE_2__technologyHomeAnimation__["technologyHomeAnimation"])(element);
                // news -- home page
                Object(__WEBPACK_IMPORTED_MODULE_3__newsHomeAnimation__["newsHomeAnimation"])(element);
            }
        }
    });

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony export (immutable) */__webpack_exports__["historyHomeAnimation"] = historyHomeAnimation;
    // history -- home page
    function historyHomeAnimation(element) {
        if (element.classList.contains("history__home")) {
            document.querySelector(".history h1").classList.add("title-slide-in");
            document.querySelector(".history p").classList.add("fade-in");
            document.querySelector(".history .button").classList.add("fade-in");
        }
    }

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony export (immutable) */__webpack_exports__["historyChartAnimation"] = historyChartAnimation;
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(0);

    function historyChartAnimation(element) {
        // history chart - our company - history page
        if (element.classList.contains("history__chart")) {

            var nextArrow = document.querySelector(".our__history .next__arrow");
            var prevArrow = document.querySelector(".our__history .prev__arrow");

            // anime js
            var circles = document.querySelectorAll(".our__history circle");
            var path = document.querySelector("#Path_553");
            var paths = document.querySelectorAll(".our__history #Group_154 path");
            var hasAnimationPlayed = function hasAnimationPlayed() {

                if (!__WEBPACK_IMPORTED_MODULE_0__global__["animationFlag"]) {
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

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony export (immutable) */__webpack_exports__["technologyHomeAnimation"] = technologyHomeAnimation;
    var section = document.querySelector(".technology__and__services");

    // gsap
    var tl = new TimelineMax();
    tl.pause();

    if (section !== null) {
        var title = section.querySelector("h2.title");
        var p = section.querySelector("p");
        var iconList = section.querySelectorAll("li");

        // -- title
        tl.add(TweenMax.fromTo(title, 1, {
            opacity: 0,
            x: 45
        }, {
            opacity: 1,
            x: 0,
            ease: Circ.easeOut
        }));

        // paragraph
        tl.add(TweenMax.fromTo(p, 0.5, {
            opacity: 0,
            x: 45
        }, {
            opacity: 1,
            x: 0,
            ease: Circ.easeOut
        }), "-=.9");

        // icon list
        tl.add(TweenMax.staggerFromTo(iconList, 1, {
            opacity: 0,
            x: 75
        }, {
            opacity: 1,
            x: 0,
            ease: Circ.easeOut
        }, 0.2), "-=.9");
    }

    function technologyHomeAnimation(element) {
        if (element.classList.contains("technology__and__services")) {
            tl.play();
        }
    }

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony export (immutable) */__webpack_exports__["newsHomeAnimation"] = newsHomeAnimation;
    var section = document.querySelector(".news__posts");

    // gsap
    var tl = new TimelineMax();
    tl.pause();

    if (section !== null) {
        var articles = section.querySelectorAll("article");
        var title = section.querySelector("h2.title");
        // -- title
        tl.add(TweenMax.fromTo(title, 1, {
            opacity: 0,
            x: 45
        }, {
            opacity: 1,
            x: 0,
            ease: Circ.easeOut
        }));

        // -- articles
        tl.add(TweenMax.staggerFromTo(articles, 1, {
            opacity: 0,
            y: 75
        }, {
            opacity: 1,
            y: 0,
            ease: Circ.easeOut
        }, 0.2), '-=0.9');
    }

    function newsHomeAnimation(element) {
        if (element.classList.contains("news__posts")) {
            tl.play();
        }
    }

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    __webpack_require__(6);
    __webpack_require__(0);
    __webpack_require__(7);
    __webpack_require__(9);
    __webpack_require__(2);
    __webpack_require__(1);
    __webpack_require__(10);
    __webpack_require__(4);
    __webpack_require__(11);
    __webpack_require__(12);
    __webpack_require__(13);
    __webpack_require__(3);
    module.exports = __webpack_require__(14);

    /***/
},
/* 6 */
/***/function (module, exports) {

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

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    var GoogleMapsLoader = __webpack_require__(8);

    GoogleMapsLoader.load(function (google) {
        if (document.getElementById("map")) {
            (function () {
                var el = document.querySelector("#map");
                var myLatLng = { lat: 29.76328, lng: -95.36327 };
                var currentTemp = void 0;
                var currentHumidity = void 0;
                var currentPrecipitation = void 0;
                var currentSummary = void 0;
                var currentWind = void 0;
                var currentTime = void 0;
                var icon = {
                    url: '/wp-content/themes/gyro/assets/images/raw/map_marker.svg',
                    scaledSize: new google.maps.Size(20, 20) // scaled size
                };
                var map = new google.maps.Map(el, {
                    center: myLatLng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 3,
                    styles: [{
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }]
                    }, {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#616161"
                        }]
                    }, {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "color": "#f5f5f5"
                        }]
                    }, {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#bdbdbd"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#eeeeee"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e5e5e5"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#9e9e9e"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#757575"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#dadada"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#616161"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#9e9e9e"
                        }]
                    }, {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#e5e5e5"
                        }]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#eeeeee"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#c9c9c9"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#9e9e9e"
                        }]
                    }]
                });
                var locations = [{ name: "Houston", latitude: 29.76328, longitude: -95.36327 }, { name: "Miami", latitude: 25.77427, longitude: -80.193667 }, { name: "Ajdabiya", latitude: 30.75545, longitude: 20.22625 }];

                var regions = [{ name: "North America", latitude: 54.525961, longitude: -105.255119 }, { name: "Asia & Middle East", latitude: 34.047863, longitude: 100.619655 }, { name: "Europe, Africa & Caspian", latitude: 54.525961, longitude: 15.255119 }, { name: "Latin America", latitude: -4.442039, longitude: -61.326854 }];

                var locationModule = document.querySelector(".location__module.locations");
                var regionsModule = document.querySelector(".location__module.regions");

                var _loop = function _loop(location) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(location.latitude, location.longitude),
                        map: map,
                        icon: icon,
                        title: location.name
                    });
                    marker.addListener("click", function () {
                        map.setZoom(5);
                        map.setCenter(marker.getPosition());
                        setTemp(parseInt(marker.getPosition().lat()), parseInt(marker.getPosition().lng()), marker.title);
                        // marker.setIcon({
                        //     url: '/wp-content/themes/gyro/assets/images/raw/map_marker.svg',
                        //     scaledSize: new google.maps.Size(30, 30)
                        // })'
                    });
                };

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = locations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var location = _step.value;

                        _loop(location);
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

                var setTemp = function setTemp(lat, lng, location) {
                    fetch('https://api.darksky.net/forecast/c17289827bd62ef9aab0884abfe6f5fd/' + lat + ',' + lng).then(function (response) {
                        return response.json();
                    }).then(function (myJSON) {
                        console.log(myJSON);
                        currentTemp = myJSON.currently.apparentTemperature;
                        currentHumidity = myJSON.currently.humidity;
                        currentPrecipitation = myJSON.currently.precipIntensity;
                        currentSummary = myJSON.currently.summary;
                        currentWind = myJSON.currently.windSpeed;
                        currentTime = myJSON.currently.time;
                        document.querySelector("span.temperature").innerHTML = currentTemp;
                        document.querySelector("span.humidity").innerHTML = currentHumidity;
                        document.querySelector("span.precipitation").innerHTML = currentPrecipitation;
                        document.querySelector("span.wind").innerHTML = currentWind;
                        document.querySelector("span.day").innerHTML = currentTime;
                        document.querySelector("span.summary").innerHTML = currentSummary;
                        document.querySelector("span.city").innerHTML = location;
                    });
                };

                locationModule.innerHTML = '<div class="locations__button__wrap">\n        ' + locations.map(function (location) {
                    return '<button class="location__button maps__button" data-name="' + location.name + '" data-lat="' + location.latitude + '" data-lng="' + location.longitude + '">' + location.name + '</button>';
                }).join('') + '\n    </div>';

                regionsModule.innerHTML = '<div class="locations__button__wrap">\n        ' + regions.map(function (region) {
                    return '<button class="region__button maps__button" data-name="' + region.name + '" data-lat="' + region.latitude + '" data-lng="' + region.longitude + '">' + region.name + '</button>';
                }).join('') + '\n    </div>';

                var locationButtons = document.querySelectorAll(".location__button");
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = locationButtons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var locationButton = _step2.value;

                        locationButton.addEventListener("click", function (e) {
                            var longitude = e.target.dataset.lng;
                            var latitude = e.target.dataset.lat;
                            var location = e.target.dataset.name;
                            map.setZoom(8);
                            map.setCenter({ lat: parseInt(latitude), lng: parseInt(longitude) });
                            setTemp(parseInt(latitude), parseInt(longitude), location);
                        });
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                var regionButtons = document.querySelectorAll(".region__button");
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                    for (var _iterator3 = regionButtons[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                        var regionButton = _step3.value;

                        regionButton.addEventListener("click", function (e) {
                            var longitude = e.target.dataset.lng;
                            var latitude = e.target.dataset.lat;
                            map.setZoom(3);
                            map.setCenter({ lat: parseInt(latitude), lng: parseInt(longitude) });
                        });
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                            _iterator3.return();
                        }
                    } finally {
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
            })();
        }
    });

    GoogleMapsLoader.KEY = 'AIzaSyC7tSjhQyqDfDkKWmiemLdrrKFMTymkqgM';

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {

        if (root === null) {
            throw new Error('Google-maps package can be used only in browser');
        }

        if (true) {
            !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
            module.exports = factory();
        } else {
            root.GoogleMapsLoader = factory();
        }
    })(typeof window !== 'undefined' ? window : null, function () {

        'use strict';

        var googleVersion = '3.18';

        var script = null;

        var google = null;

        var loading = false;

        var callbacks = [];

        var onLoadEvents = [];

        var originalCreateLoaderMethod = null;

        var GoogleMapsLoader = {};

        GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

        GoogleMapsLoader.KEY = null;

        GoogleMapsLoader.LIBRARIES = [];

        GoogleMapsLoader.CLIENT = null;

        GoogleMapsLoader.CHANNEL = null;

        GoogleMapsLoader.LANGUAGE = null;

        GoogleMapsLoader.REGION = null;

        GoogleMapsLoader.VERSION = googleVersion;

        GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';

        GoogleMapsLoader._googleMockApiObject = {};

        GoogleMapsLoader.load = function (fn) {
            if (google === null) {
                if (loading === true) {
                    if (fn) {
                        callbacks.push(fn);
                    }
                } else {
                    loading = true;

                    window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function () {
                        ready(fn);
                    };

                    GoogleMapsLoader.createLoader();
                }
            } else if (fn) {
                fn(google);
            }
        };

        GoogleMapsLoader.createLoader = function () {
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = GoogleMapsLoader.createUrl();

            document.body.appendChild(script);
        };

        GoogleMapsLoader.isLoaded = function () {
            return google !== null;
        };

        GoogleMapsLoader.createUrl = function () {
            var url = GoogleMapsLoader.URL;

            url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

            if (GoogleMapsLoader.KEY) {
                url += '&key=' + GoogleMapsLoader.KEY;
            }

            if (GoogleMapsLoader.LIBRARIES.length > 0) {
                url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
            }

            if (GoogleMapsLoader.CLIENT) {
                url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
            }

            if (GoogleMapsLoader.CHANNEL) {
                url += '&channel=' + GoogleMapsLoader.CHANNEL;
            }

            if (GoogleMapsLoader.LANGUAGE) {
                url += '&language=' + GoogleMapsLoader.LANGUAGE;
            }

            if (GoogleMapsLoader.REGION) {
                url += '&region=' + GoogleMapsLoader.REGION;
            }

            return url;
        };

        GoogleMapsLoader.release = function (fn) {
            var release = function release() {
                GoogleMapsLoader.KEY = null;
                GoogleMapsLoader.LIBRARIES = [];
                GoogleMapsLoader.CLIENT = null;
                GoogleMapsLoader.CHANNEL = null;
                GoogleMapsLoader.LANGUAGE = null;
                GoogleMapsLoader.REGION = null;
                GoogleMapsLoader.VERSION = googleVersion;

                google = null;
                loading = false;
                callbacks = [];
                onLoadEvents = [];

                if (typeof window.google !== 'undefined') {
                    delete window.google;
                }

                if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
                    delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
                }

                if (originalCreateLoaderMethod !== null) {
                    GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
                    originalCreateLoaderMethod = null;
                }

                if (script !== null) {
                    script.parentElement.removeChild(script);
                    script = null;
                }

                if (fn) {
                    fn();
                }
            };

            if (loading) {
                GoogleMapsLoader.load(function () {
                    release();
                });
            } else {
                release();
            }
        };

        GoogleMapsLoader.onLoad = function (fn) {
            onLoadEvents.push(fn);
        };

        GoogleMapsLoader.makeMock = function () {
            originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

            GoogleMapsLoader.createLoader = function () {
                window.google = GoogleMapsLoader._googleMockApiObject;
                window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
            };
        };

        var ready = function ready(fn) {
            var i;

            loading = false;

            if (google === null) {
                google = window.google;
            }

            for (i = 0; i < onLoadEvents.length; i++) {
                onLoadEvents[i](google);
            }

            if (fn) {
                fn(google);
            }

            for (i = 0; i < callbacks.length; i++) {
                callbacks[i](google);
            }

            callbacks = [];
        };

        return GoogleMapsLoader;
    });

    /***/
},
/* 9 */
/***/function (module, exports) {

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

        var _loop2 = function _loop2(circle) {
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

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = activeCircles[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var circle = _step4.value;

                _loop2(circle);
            }
            // previous content section
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
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

    /***/
},
/* 10 */
/***/function (module, exports) {

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

    /***/
},
/* 11 */
/***/function (module, exports) {

    var drillDownButton = document.querySelectorAll(".sub__menu__child__title");

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = drillDownButton[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var drillDown = _step5.value;

            drillDown.addEventListener("click", function (e) {
                e.target.classList.toggle("active");
                var currentNode = e.target.parentNode;
                currentNode.classList.toggle("open");
            });
        }

        /***/
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
},
/* 12 */
/***/function (module, exports) {

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

    /***/
},
/* 13 */
/***/function (module, exports) {

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

    /***/
},
/* 14 */
/***/function (module, exports) {

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

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = technologyLinks[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var link = _step6.value;

            link.addEventListener("mouseenter", function (e) {
                enterLink(e.target);
            });
            link.addEventListener("mouseleave", function (e) {
                leaveLink(e.target);
            });
        }

        /***/
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }
}]
/******/);