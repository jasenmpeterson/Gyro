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
  /******/return __webpack_require__(__webpack_require__.s = 10);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (immutable) */__webpack_exports__["historyBlocksAnimation"] = historyBlocksAnimation;
  // history blocks -- about page
  function historyBlocksAnimation(element) {
    if (element.classList.contains("history__blocks")) {
      var contentBlocks = document.querySelectorAll(".history__blocks .wrap");
      TweenMax.staggerTo(contentBlocks, 0.5, {
        opacity: 1,
        y: 0,
        delay: 0.5
      }, 0.2);
    }
  }

  /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (immutable) */__webpack_exports__["coreValuesAnimation"] = coreValuesAnimation;
  // core values -- about page
  function coreValuesAnimation(element) {
    if (element.classList.contains("core__values")) {
      var coreValuesHeader = document.querySelector(".core__values h2.title");
      var coreValueContent = document.querySelectorAll(".core__values .content__wrap");
      TweenMax.to(coreValuesHeader, 0.5, { opacity: 1, y: 0 });
      TweenMax.staggerTo(coreValueContent, 0.5, {
        opacity: 1,
        y: 0,
        delay: 0.5
      }, 0.2);
    }
  }

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (immutable) */__webpack_exports__["documentList"] = documentList;
  // technology and solutions pages
  function documentList() {
    if (document.querySelector("ul.documents") !== null) {
      var listItems = document.querySelectorAll("ul.documents li a");
      var listHover = function listHover(e) {
        TweenMax.to(e.target, 0.2, {
          scale: 1.1,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.10), 0 2px 32px rgba(0, 0, 0, 0.10)",
          color: "#fff",
          backgroundColor: "#ffb100",
          ease: Power2.easeOut
        });
      };
      var listHoverOut = function listHoverOut(e) {
        TweenMax.to(e.target, 0.5, {
          scale: 1,
          boxShadow: "0 6px 12px transparent, 0 10px 40px transparent",
          backgroundColor: "#f8f8f8",
          color: "#4a525b",
          ease: Power2.easeOut
        });
      };
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = listItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var listItem = _step.value;

          listItem.addEventListener("mouseenter", listHover);
          listItem.addEventListener("mouseleave", listHoverOut);
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
    }
  }

  /***/
},
/* 3 */
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
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (immutable) */__webpack_exports__["historyChartAnimation"] = historyChartAnimation;
  var animationFlag = false;

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

  /***/
},
/* 5 */
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
/* 6 */
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
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (immutable) */__webpack_exports__["technologyPageAnimation"] = technologyPageAnimation;
  // technology and solutions pages
  function technologyPageAnimation() {
    if (document.querySelector(".technology__and__services__content") !== null) {
      var technologyAndServicesContent = document.querySelector(".technology__and__services__content");
      var sidebar = document.querySelector(".sidebar.left");
      var sideBarRight = document.querySelector(".sidebar.right");
      var elements = [sidebar, technologyAndServicesContent, sideBarRight];
      var elementsArray = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;

          if (element !== null) {
            elementsArray.push(element);
          }
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

      TweenMax.staggerTo(elementsArray, 0.5, {
        opacity: 1,
        y: 0
      }, 0.2);
    }
  }

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (immutable) */__webpack_exports__["newsroomPageAnimation"] = newsroomPageAnimation;
  function newsroomPageAnimation() {
    if (document.querySelector(".newsrooms") !== null) {
      var newsroomContent = document.querySelector(".newsrooms");
      var sidebar = document.querySelectorAll(".sidebar");
      var elements = [sidebar, newsroomContent];
      TweenMax.staggerTo(elements, 0.5, {
        opacity: 1,
        y: 0
      }, 0.2);
    }
  }

  /***/
},
/* 9 */
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
/* 10 */
/***/function (module, exports, __webpack_require__) {

  __webpack_require__(0);
  __webpack_require__(11);
  __webpack_require__(1);
  __webpack_require__(2);
  __webpack_require__(12);
  __webpack_require__(13);
  __webpack_require__(14);
  __webpack_require__(15);
  __webpack_require__(16);
  __webpack_require__(4);
  __webpack_require__(3);
  __webpack_require__(17);
  __webpack_require__(6);
  __webpack_require__(8);
  __webpack_require__(18);
  __webpack_require__(19);
  __webpack_require__(20);
  __webpack_require__(21);
  __webpack_require__(22);
  __webpack_require__(5);
  __webpack_require__(7);
  module.exports = __webpack_require__(23);

  /***/
},
/* 11 */
/***/function (module, exports) {

  if (document.querySelector(".content__slider") !== null) {

    var contentSlider = document.querySelector(".content__slider");
    contentSlider.classList.remove("is-hidden");
    contentSlider.offsetHeight;

    var flktyContentSlider = new Flickity(contentSlider, {
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.01,
      // autoPlay: true,
      friction: 0.15,
      adaptiveHeight: true,
      on: {
        ready: function ready() {
          var video = document.querySelector('.blueprint__wrap .is-selected video');
          video.play();
        }
      }
    });

    flktyContentSlider.on('change', function () {
      var video = document.querySelector('.blueprint__wrap .is-selected video');
      var videos = document.querySelectorAll('.blueprint__wrap video');
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = videos[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _video = _step3.value;

          _video.pause();
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

      video.play();
    });
  }

  /***/
},
/* 12 */
/***/function (module, exports) {

  var drillDownButton = document.querySelectorAll(".drill__down li.parent > button");

  var openMenu = function openMenu(e) {
    var menu = e.target.parentNode;
    var drillDownDropDown = menu.querySelector(".drill__down__drop__down.parent");
    var drillDownChild = drillDownDropDown.querySelectorAll(".drill__down__drop__down.child");
    var title = menu.querySelectorAll("span");
    var dropDownList = menu.querySelectorAll(".drill__down__drop__down.parent > li");
    console.log(dropDownList);
    if (!drillDownDropDown.classList.contains("active")) {
      TweenMax.to(drillDownDropDown, 0.3, {
        opacity: 1,
        scaleY: 1,
        display: "block",
        transformOrigin: 'center top',
        ease: Power2.easeOut
      });
      TweenMax.to(title, 0.3, {
        opacity: 1,
        x: 0,
        delay: 0.3,
        ease: Power2.easeOut
      });
      TweenMax.staggerTo(drillDownChild, 0.3, {
        opacity: 1,
        x: 0,
        delay: 0.3
      }, 0.2);
      drillDownDropDown.classList.add("active");
    } else {
      TweenMax.to(title, 0.3, {
        opacity: 0,
        x: -10,
        ease: Power2.easeOut
      });
      TweenMax.staggerTo(drillDownChild, 0.1, {
        opacity: 0,
        x: -10
      }, 0.1);
      TweenMax.to(drillDownDropDown, 0.6, {
        opacity: 0,
        scaleY: 0,
        display: "none",
        delay: 0.2,
        ease: Power2.easeOut
      });
      drillDownDropDown.classList.remove("active");
    }
  };

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = drillDownButton[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var button = _step4.value;

      button.addEventListener("click", openMenu);
    }

    // This is the important part!
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

  function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        element.style.height = 0 + 'px';
      });
    });

    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }

  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function (e) {
      // remove this event listener so it only gets triggered once
      element.removeEventListener('transitionend', arguments.callee);

      // remove "height" from the element's inline styles, so it can return to its initial value
      element.style.height = null;
    });

    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
  }

  var toggleButton = document.querySelectorAll('.toggle > a');
  var activeToggleButton = document.querySelector('.active.current-page');

  if (activeToggleButton) {
    var grandParent = jQuery(activeToggleButton).parent();
    jQuery(jQuery(grandParent).parent()).addClass('active');
  }

  var _loop = function _loop(_button) {
    _button.addEventListener('click', function (e) {
      e.preventDefault();
      var sub = _button.parentNode.querySelector('.drill__down');
      if (!sub.classList.contains('open')) {
        sub.classList.add('open');
        this.classList.add('active');
        TweenLite.set(sub, { height: 'auto' });
        TweenLite.from(sub, 0.2, { height: 0 });
        TweenLite.to(sub, 0.2, { opacity: 1 });
      } else {
        sub.classList.remove('open');
        this.classList.remove('active');
        TweenLite.to(sub, 0.2, { opacity: 0, height: 0 });
      }
    });
  };

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = toggleButton[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _button = _step5.value;

      _loop(_button);
    }
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

  var mobileMenuToggle = document.querySelectorAll('.mobile__menu .menu-item-has-children > a');

  var _loop2 = function _loop2(mobileButton) {
    mobileButton.addEventListener('click', function (e) {
      e.preventDefault();
      var sub = mobileButton.parentNode.querySelector('.sub-menu');
      if (!sub.classList.contains('open')) {
        sub.classList.add('open');
        this.classList.add('active');
        this.parentNode.classList.add('active');
        TweenLite.set(sub, { height: 'auto' });
        TweenLite.from(sub, 0.2, { height: 0 });
        TweenLite.to(sub, 0.2, { opacity: 1 });
      } else {
        sub.classList.remove('open');
        this.classList.remove('active');
        this.parentNode.classList.remove('active');
        TweenLite.to(sub, 0.2, { opacity: 0, height: 0 });
      }
    });
  };

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = mobileMenuToggle[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var mobileButton = _step6.value;

      _loop2(mobileButton);
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
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__historyHomeAnimation__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__historyChartAnimation__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__technologyHomeAnimation__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__newsHomeAnimation__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__coreValuesAnimations__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__aboutHistoryBlocksAnimation__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__technologyPageAnimation__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__newsroomPageAnimation__ = __webpack_require__(8);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__documentList__ = __webpack_require__(2);
  // animations


  (function () {
    if (typeof NodeList.prototype.forEach === "function") return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
  })();

  // emergence
  emergence.init({
    elemCushion: 0.2,
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
        // core values -- history/about page
        Object(__WEBPACK_IMPORTED_MODULE_4__coreValuesAnimations__["coreValuesAnimation"])(element);
        // history blocks -- history/about page
        Object(__WEBPACK_IMPORTED_MODULE_5__aboutHistoryBlocksAnimation__["historyBlocksAnimation"])(element);
      }
    }
  });

  // technology page -- technology & solutions
  Object(__WEBPACK_IMPORTED_MODULE_6__technologyPageAnimation__["technologyPageAnimation"])();
  // newsroom page
  Object(__WEBPACK_IMPORTED_MODULE_7__newsroomPageAnimation__["newsroomPageAnimation"])();
  // documents list
  Object(__WEBPACK_IMPORTED_MODULE_8__documentList__["documentList"])();

  // contact form floating labels;
  jQuery(document).ready(function () {
    jQuery(document).on('focus', '.form__wrapper input[type=text], .form__wrapper input[type=tel], .form__wrapper input[type=email], .form__wrapper textarea', function (e) {
      var ph = jQuery(this).attr('placeholder');
      if (ph) {
        jQuery(this).attr('ph', jQuery(this).attr('placeholder'));
        jQuery(this).attr('placeholder', '');
        jQuery(this).animate({ 'padding-top': '30px', 'padding-bottom': '15px', 'position': 'relative' }, 100);
        jQuery(this).parent().append('<div class="floating-label">' + ph + '</div>');
        jQuery(this).parent().find('.floating-label').fadeIn();
      }
    });
  });

  /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

  var GoogleMapsLoader = __webpack_require__(9);
  GoogleMapsLoader.KEY = 'AIzaSyC7tSjhQyqDfDkKWmiemLdrrKFMTymkqgM';
  GoogleMapsLoader.load(function (google) {
    if (document.getElementById("map")) {
      var parse = function parse(locations) {
        var _loop3 = function _loop3(location) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.acf.location.latitude, location.acf.location.longitude),
            map: map,
            icon: icon,
            title: location.acf.location.city_name,
            region: location.acf.location.city_region,
            optimized: false
          });
          var infoWindow = new google.maps.InfoWindow({
            content: location.acf.location.city_name
          });
          marker.addListener("click", function () {
            infoWindow.open(map, this);
            map.setZoom(5);
            map.setCenter(marker.getPosition());
            setTemp(parseInt(marker.getPosition().lat()), parseInt(marker.getPosition().lng()), marker.title, marker.region);
            TweenMax.to(locationsModule, 0.2, {
              opacity: 1,
              y: 0
            });
            document.querySelector(".region__title h1 span").innerHTML = marker.region;
            loadLocations(marker.region);
            TweenMax.to(localModule, 0.2, {
              opacity: 1,
              y: 0
            });
          });
        };

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = locations[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var location = _step7.value;

            _loop3(location);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        function loadLocations(region) {
          var buttonsWrap = document.querySelector(".locations__button__wrap.cities");
          buttonsWrap.innerHTML = "";
          buttonsWrap.innerHTML += '\n                ' + locations.map(function (location) {
            return location.acf.location.country_region === region ? '<h4>' + location.acf.location.country_name + '</h4><button class="location__button maps__button" data-name="' + location.acf.location.contact.city + '" data-region="' + location.acf.location.city_region + '" data-lat="' + location.acf.location.latitude + '" data-lng="' + location.acf.location.longitude + '">' + location.acf.location.contact.city + '</button>' : '';
          }).join('');

          locations.map(function (location) {
            return console.log(location.acf.location);
          });
          var locationButtons = document.querySelectorAll(".location__button");
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = locationButtons[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var locationButton = _step8.value;

              locationButton.addEventListener("click", function (e) {
                var longitude = e.target.dataset.lng;
                var latitude = e.target.dataset.lat;
                var location = e.target.dataset.name;
                var region = e.target.dataset.region;
                map.setZoom(8);
                map.setCenter({ lat: parseInt(latitude), lng: parseInt(longitude) });
                setTemp(parseInt(latitude), parseInt(longitude), location, region);
                setContact(e.target.dataset.name);
                TweenMax.to(localModule, 0.2, {
                  opacity: 1,
                  y: 0
                });
              });
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          locationButtons[0].click();
        }

        var regions = [{ name: "North America", latitude: 54.525961, longitude: -105.255119 }, { name: "Asia & Middle East", latitude: 34.047863, longitude: 100.619655 }, { name: "Europe, Africa & Caspian", latitude: 54.525961, longitude: 15.255119 }];

        var regionsModule = document.querySelector(".location__module.regions .regions__wrap");

        regionsModule.innerHTML = '<div class="locations__button__wrap">\n        ' + regions.map(function (region) {
          return '<button class="region__button maps__button" data-name="' + region.name + '" data-lat="' + region.latitude + '" data-lng="' + region.longitude + '">' + region.name + '</button>';
        }).join('') + '\n    </div>';

        var regionButtons = document.querySelectorAll(".region__button");

        var _loop4 = function _loop4(regionButton) {
          regionButton.addEventListener("click", function (e) {
            if (!regionButton.classList.contains('active')) {
              var weatherModuleContent = weatherModule.querySelectorAll("span");
              var longitude = e.target.dataset.lng;
              var latitude = e.target.dataset.lat;
              var region = e.target.dataset.name;
              map.setZoom(3);
              map.setCenter({ lat: parseInt(latitude), lng: parseInt(longitude) });
              var prevActiveRegion = document.querySelector(".region__button.active");
              prevActiveRegion !== null ? prevActiveRegion.classList.remove("active") : "";
              e.target.classList.add("active");
              TweenMax.staggerTo([contactModule, localModule], 0.2, {
                opacity: 0,
                y: 50,
                delay: 0.3
              }, 0.2, function () {
                var _iteratorNormalCompletion10 = true;
                var _didIteratorError10 = false;
                var _iteratorError10 = undefined;

                try {
                  for (var _iterator10 = weatherModuleContent[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var span = _step10.value;

                    span.innerHTML = "";
                  }
                } catch (err) {
                  _didIteratorError10 = true;
                  _iteratorError10 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                      _iterator10.return();
                    }
                  } finally {
                    if (_didIteratorError10) {
                      throw _iteratorError10;
                    }
                  }
                }
              });
              if (!document.querySelector(".location__button[data-region='" + region + "']")) {
                loadLocations(region);
                TweenMax.to(locationsModule, 0.2, {
                  opacity: 0,
                  y: 5,
                  onComplete: function onComplete() {
                    TweenMax.to(locationsModule, 0.2, {
                      opacity: 1,
                      y: 0
                    });
                  }
                });
                var regionTitle = document.querySelector(".region__title h1 span");
                regionTitle.innerHTML = region;
              }
            }
          });
        };

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = regionButtons[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var regionButton = _step9.value;

            _loop4(regionButton);
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9.return) {
              _iterator9.return();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }

        var setTemp = function setTemp(lat, lng, location, region) {
          weatherModule.classList.remove("active");
          loader.classList.remove("inactive");
          document.querySelector("span.temperature").innerHTML = "";
          document.querySelector("span.humidity").innerHTML = "";
          document.querySelector("span.precipitation").innerHTML = "";
          document.querySelector("span.wind").innerHTML = "";
          document.querySelector("span.day").innerHTML = "";
          document.querySelector("span.city").innerHTML = "";
          document.querySelector("span.region").innerHTML = "";
          fetch(pageParams.themeDirectory + '/api/weather.php?lat=' + lat + '&lng=' + lng).then(function (response) {
            return response.json();
          }).then(function (myJSON) {
            TweenMax.to(weatherModule, 0.2, {
              opacity: 1,
              y: 0
            });
            loader.classList.add("inactive");
            currentTemp = Math.round(myJSON.temp);
            currentHumidity = myJSON.humidity + "%";
            currentHumidity = currentHumidity.replace(/^[0\.]+/, "");
            currentPrecipitation = Math.round(myJSON.precipitation) + "%";
            currentWind = Math.round(myJSON.wind) + " mph";
            currentTime = myJSON.time;
            document.querySelector("span.temperature").innerHTML = currentTemp + "<sup>&#8457;</sup>";
            document.querySelector("span.humidity").innerHTML = 'Humidity: ' + currentHumidity;
            document.querySelector("span.precipitation").innerHTML = 'Precipitation: ' + currentPrecipitation;
            document.querySelector("span.wind").innerHTML = 'Wind: ' + currentWind;
            document.querySelector("span.day").innerHTML = currentDay + " " + myJSON.time;
            document.querySelector("span.city").innerHTML = location;
            document.querySelector("span.region").innerHTML = region;
          });
        };

        var setContact = function setContact(city) {
          console.log(city);
          locations.map(function (location) {
            return console.log(location);
          });
          var module = document.querySelector(".location__module.contact .col");
          module.innerHTML = '' + locations.map(function (location) {
            return location.acf.location.city_name === city ? '<h4>' + location.acf.location.contact.name + '</h4><address><p>' + location.acf.location.contact.street + '</p><p>' + location.acf.location.contact.city + ', ' + location.acf.location.contact.zip + '</p><p>Tel: ' + location.acf.location.contact.telephone + '</p><p>Fax: ' + location.acf.location.contact.fax + '</p></address>' : '';
          });
          TweenMax.to(contactModule, 0.2, {
            opacity: 1,
            y: 0
          });
        };
      };

      var api = pageParams.root + '/wp-json/wp/v2/locations';
      fetch(api).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        parse(data);
      });
      var el = document.querySelector("#map");
      var myLatLng = { lat: 29.76328, lng: -95.36327 };
      var currentTemp = void 0;
      var currentHumidity = void 0;
      var currentPrecipitation = void 0;
      var currentWind = void 0;
      var currentTime = void 0;
      var d = new Date();
      var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var currentDay = dayNames[d.getDay() - 1];
      var locationsModule = document.querySelector(".location__module.locations");
      var localModule = document.querySelector(".location__module.local");
      var contactModule = document.querySelector(".location__module.contact");
      var loader = document.querySelector(".location__module .loader");
      var weatherModule = document.querySelector(".weather__container");
      var icon = {
        url: '/wp-content/themes/gyro/assets/images/raw/pulsating.svg',
        scaledSize: new google.maps.Size(40, 40) // scaled size
      };
      var map = new google.maps.Map(el, {
        center: myLatLng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 3,
        styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#212121"
          }]
        }, {
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#6b767f"
          }]
        }, {
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#212121"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
            "color": "#757575"
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        }, {
          "featureType": "administrative.neighborhood",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "visibility": "off"
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
            "color": "#181818"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1b1b1b"
          }]
        }, {
          "featureType": "road",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#2c2c2c"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8a8a8a"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#373737"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3c3c3c"
          }]
        }, {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
            "color": "#4e4e4e"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#5a6771"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3d3d3d"
          }]
        }]
      });
    }
  });

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  var GoogleMapsLoader = __webpack_require__(9);
  GoogleMapsLoader.KEY = 'AIzaSyC7tSjhQyqDfDkKWmiemLdrrKFMTymkqgM';
  GoogleMapsLoader.load(function (google) {
    if (document.getElementById("map")) {
      var parse = function parse(locations) {
        var markers = [];

        var _loop5 = function _loop5(location) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.acf.location.latitude, location.acf.location.longitude),
            map: map,
            icon: icon,
            title: location.acf.location.city_name,
            region: location.acf.location.city_region,
            optimized: false
          });
          var infoWindow = new google.maps.InfoWindow({
            content: location.acf.location.city_name
          });
          markers.push(marker);
          marker.addListener("click", function () {
            for (var i = 0; i < markers.length; i++) {
              if (markers[i].icon.url === '/wp-content/themes/gyro/assets/images/raw/pulsating.svg') {
                markers[i].setIcon({
                  url: '/wp-content/themes/gyro/assets/images/raw/not_pulsating.svg',
                  scaledSize: new google.maps.Size(50, 50)
                });
              }
            }

            marker.setIcon({
              url: '/wp-content/themes/gyro/assets/images/raw/pulsating.svg',
              scaledSize: new google.maps.Size(50, 50)
            });

            map.setZoom(5);
            map.setCenter(marker.getPosition());
            setTemp(parseInt(marker.getPosition().lat()), parseInt(marker.getPosition().lng()), marker.title, marker.region);
            TweenMax.to(locationsModule, 0.2, {
              opacity: 1,
              y: 0
            });
            document.querySelector(".region__title h1 span").innerHTML = marker.region;
            loadLocations(marker.region);
            TweenMax.to(localModule, 0.2, {
              opacity: 1,
              y: 0
            });
          });
        };

        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = locations[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var location = _step11.value;

            _loop5(location);
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11.return) {
              _iterator11.return();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }

        function loadLocations(region) {
          var buttonsWrap = document.querySelector(".locations__button__wrap.cities");
          buttonsWrap.innerHTML = "";
          buttonsWrap.innerHTML += '\n                ' + locations.map(function (location) {
            return location.acf.location.country_region === region ? '<button class="location__button maps__button" data-name="' + location.acf.location.contact.city + '" data-region="' + location.acf.location.city_region + '" data-lat="' + location.acf.location.latitude + '" data-lng="' + location.acf.location.longitude + '" data-state="' + location.acf.location.country_name + '">' + location.acf.location.contact.city + '</button>' : '';
          }).join(' ');

          var locationButtons = document.querySelectorAll(".location__button");
          var _iteratorNormalCompletion12 = true;
          var _didIteratorError12 = false;
          var _iteratorError12 = undefined;

          try {
            for (var _iterator12 = locationButtons[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
              var locationButton = _step12.value;

              locationButton.addEventListener("click", function (e) {
                var longitude = e.target.dataset.lng;
                var latitude = e.target.dataset.lat;
                var location = e.target.dataset.name;
                var region = e.target.dataset.region;
                var country = e.target.dataset.state;
                map.setZoom(3);
                map.setCenter({ lat: parseInt(latitude), lng: parseInt(longitude) });
                setTemp(parseInt(latitude), parseInt(longitude), location, country);
                setContact(e.target.dataset.name);
                TweenMax.to(localModule, 0.2, {
                  opacity: 1,
                  y: 0
                });
              });
            }
          } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion12 && _iterator12.return) {
                _iterator12.return();
              }
            } finally {
              if (_didIteratorError12) {
                throw _iteratorError12;
              }
            }
          }

          locationButtons[0].click();
        }

        var regions = [{ name: "North America", latitude: 54.525961, longitude: -105.255119 }, { name: "Latin America", latitude: -4.442039, longitude: -61.326854 }, { name: "Middle East & Asia Pacific", latitude: 34.047863, longitude: 100.619655 }, { name: "Europe, Africa & Caspian Sea", latitude: 54.525961, longitude: 15.255119 }];

        var regionsModule = document.querySelector(".location__module.regions .regions__wrap");

        regionsModule.innerHTML = '<div class="locations__button__wrap">\n        ' + regions.map(function (region) {
          return '<button class="region__button maps__button" data-name="' + region.name + '" data-lat="' + region.latitude + '" data-lng="' + region.longitude + '">' + region.name + '</button>';
        }).join(' ') + '\n    </div>';

        var regionButtons = document.querySelectorAll(".region__button");

        var _loop6 = function _loop6(regionButton) {
          regionButton.addEventListener("click", function (e) {
            if (!regionButton.classList.contains('active')) {
              var weatherModuleContent = weatherModule.querySelectorAll("span");
              var longitude = e.target.dataset.lng;
              var latitude = e.target.dataset.lat;
              var region = e.target.dataset.name;
              map.setZoom(3);
              map.setCenter({ lat: parseInt(latitude), lng: parseInt(longitude) });
              var prevActiveRegion = document.querySelector(".region__button.active");
              prevActiveRegion !== null ? prevActiveRegion.classList.remove("active") : "";
              e.target.classList.add("active");
              if (!document.querySelector(".location__button[data-region='" + region + "']")) {
                loadLocations(region);
                TweenMax.to(locationsModule, 0.2, {
                  opacity: 0,
                  y: 5,
                  onComplete: function onComplete() {
                    TweenMax.to(locationsModule, 0.2, {
                      opacity: 1,
                      y: 0
                    });
                  }
                });
                var regionTitle = document.querySelector(".region__title h1 span");
                regionTitle.innerHTML = region;
              }
            }
          });
        };

        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = regionButtons[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var regionButton = _step13.value;

            _loop6(regionButton);
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }

        var setTemp = function setTemp(lat, lng, location, region) {
          weatherModule.classList.remove("active");
          loader.classList.remove("inactive");
          document.querySelector("span.temperature").innerHTML = "";
          document.querySelector("span.humidity").innerHTML = "";
          document.querySelector("span.precipitation").innerHTML = "";
          document.querySelector("span.wind").innerHTML = "";
          document.querySelector("span.day").innerHTML = "";
          document.querySelector("span.city").innerHTML = "";
          document.querySelector("span.region").innerHTML = "";
          fetch(pageParams.themeDirectory + '/api/weather.php?lat=' + lat + '&lng=' + lng).then(function (response) {
            return response.json();
          }).then(function (myJSON) {
            TweenMax.to(weatherModule, 0.2, {
              opacity: 1,
              y: 0
            });
            loader.classList.add("inactive");
            currentTemp = Math.round(myJSON.temp);
            currentHumidity = myJSON.humidity + "%";
            currentHumidity = currentHumidity.replace(/^[0\.]+/, "");
            currentPrecipitation = Math.round(myJSON.precipitation) + "%";
            currentWind = Math.round(myJSON.wind) + " mph";
            currentTime = myJSON.time;
            document.querySelector("span.temperature").innerHTML = currentTemp + "<sup>&#8457;</sup>";
            document.querySelector("span.humidity").innerHTML = 'Humidity: ' + currentHumidity;
            document.querySelector("span.precipitation").innerHTML = 'Precipitation: ' + currentPrecipitation;
            document.querySelector("span.wind").innerHTML = 'Wind: ' + currentWind;
            document.querySelector("span.day").innerHTML = currentDay + " " + myJSON.time;
            document.querySelector("span.city").innerHTML = location;
            document.querySelector("span.region").innerHTML = region;
          });
        };

        var setContact = function setContact(city) {
          var module = document.querySelector(".location__module.contact .col");
          module.innerHTML = '' + locations.map(function (location) {
            return location.acf.location.city_name === city ? '<h4>' + location.acf.location.contact.name + '</h4><address><p>' + location.acf.location.contact.street + '</p><p>' + location.acf.location.contact.city + ', ' + location.acf.location.contact.zip + '</p><p>Tel: ' + location.acf.location.contact.telephone + '</p><p>Fax: ' + location.acf.location.contact.fax + '</p><p>Email: <a href="' + location.acf.location.contact.email + '}">' + location.acf.location.contact.email + '</a> </p></address>' : '';
          }).join(' ');
          TweenMax.to(contactModule, 0.2, {
            opacity: 1,
            y: 0
          });
        };
      };

      var api = pageParams.root + '/wp-json/wp/v2/locations?per_page=100';
      fetch(api).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        parse(data);
      });
      var el = document.querySelector("#map");
      var myLatLng = { lat: 29.76328, lng: -95.36327 };
      var currentTemp = void 0;
      var currentHumidity = void 0;
      var currentPrecipitation = void 0;
      var currentWind = void 0;
      var currentTime = void 0;
      var d = new Date();
      var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var currentDay = dayNames[d.getDay() - 1];
      var locationsModule = document.querySelector(".location__module.locations");
      var localModule = document.querySelector(".location__module.local");
      var contactModule = document.querySelector(".location__module.contact");
      var loader = document.querySelector(".location__module .loader");
      var weatherModule = document.querySelector(".weather__container");
      var icon = {
        url: '/wp-content/themes/gyro/assets/images/raw/not_pulsating.svg',
        scaledSize: new google.maps.Size(50, 50) // scaled size
      };
      var map = new google.maps.Map(el, {
        center: myLatLng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 3,
        styles: [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#212121"
          }]
        }, {
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#6b767f"
          }]
        }, {
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#212121"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [{
            "color": "#757575"
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#9e9e9e"
          }]
        }, {
          "featureType": "administrative.land_parcel",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#bdbdbd"
          }]
        }, {
          "featureType": "administrative.neighborhood",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "visibility": "off"
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
            "color": "#181818"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#1b1b1b"
          }]
        }, {
          "featureType": "road",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#2c2c2c"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8a8a8a"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#373737"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#3c3c3c"
          }]
        }, {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
            "color": "#4e4e4e"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#616161"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#757575"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#5a6771"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#3d3d3d"
          }]
        }]
      });
    }
  });

  /***/
},
/* 16 */
/***/function (module, exports) {

  // home page history component
  Splitting.chars("[data-history-splitting-chars]");

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

  var targets = document.querySelectorAll(".our__history .svg__wrap svg circle");

  var circleDeselect = function circleDeselect() {
    var activeCircles = document.querySelectorAll(".our__history circle.animated");

    var _loop7 = function _loop7(circle) {
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

    var _iteratorNormalCompletion14 = true;
    var _didIteratorError14 = false;
    var _iteratorError14 = undefined;

    try {
      for (var _iterator14 = activeCircles[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
        var circle = _step14.value;

        _loop7(circle);
      }
      // previous content section
    } catch (err) {
      _didIteratorError14 = true;
      _iteratorError14 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion14 && _iterator14.return) {
          _iterator14.return();
        }
      } finally {
        if (_didIteratorError14) {
          throw _iteratorError14;
        }
      }
    }

    var prevSection = document.querySelector(".history__chart__content.active");
    if (prevSection) {
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
    }
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

  var _iteratorNormalCompletion15 = true;
  var _didIteratorError15 = false;
  var _iteratorError15 = undefined;

  try {
    for (var _iterator15 = targets[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
      var target = _step15.value;

      target.addEventListener("click", circleSelect);
    }

    // left/right functionality
  } catch (err) {
    _didIteratorError15 = true;
    _iteratorError15 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion15 && _iterator15.return) {
        _iterator15.return();
      }
    } finally {
      if (_didIteratorError15) {
        throw _iteratorError15;
      }
    }
  }

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

  // our history page elements
  var ourVisionSection = document.querySelector(".about__page.our__vision");
  var ourVisionBackgroundImage = document.querySelector(".about__page.our__vision .background__image");
  var ourVisionHeader = document.querySelector(".about__page.our__vision h2.title");
  var ourVisionParagraph = document.querySelector(".about__page.our__vision p");
  if (ourVisionSection) {
    TweenMax.to(ourVisionBackgroundImage, 1, { opacity: 1, x: 0, delay: 0.2, ease: Power4.easeOut });
    TweenMax.to(ourVisionHeader, 0.5, { opacity: 1, y: 0, delay: 0.4 });
    TweenMax.to(ourVisionParagraph, 0.5, { opacity: 1, y: 0, delay: 0.6 });
  }

  /***/
},
/* 17 */
/***/function (module, exports) {

  var hamburgerMenu = document.querySelector(".hamburger__menu");
  var hamburgerMenuClose = document.querySelector(".mobile__close__button .circle");
  var mobileMenu = document.querySelector(".mobile__menu");
  var mobileMenuParent = document.querySelectorAll(".mobile__menu li span");

  hamburgerMenu.addEventListener("click", function () {
    TweenMax.to(mobileMenu, 0.3, {
      opacity: 1,
      x: 0,
      ease: Power2.easeIn
    });
    mobileMenu.classList.add("open");
  });

  hamburgerMenuClose.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    TweenMax.to(mobileMenu, 0.3, {
      opacity: 0,
      x: -100,
      ease: Power2.easeOut
    });
  });

  /***/
},
/* 18 */
/***/function (module, exports) {

  /***/},
/* 19 */
/***/function (module, exports) {

  if (document.querySelector(".rotating__banner") !== null) {
    var rotatingBanner = document.querySelector(".rotating__banner");
    rotatingBanner.classList.remove("is-hidden");
    rotatingBanner.offsetHeight;

    var flkty = new Flickity(rotatingBanner, {
      prevNextButtons: false,
      pageDots: true,
      selectedAttraction: 0.01,
      friction: 0.15,
      autoPlay: 2500
    });
  }

  /***/
},
/* 20 */
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
/* 21 */
/***/function (module, exports) {

  /***/},
/* 22 */
/***/function (module, exports) {

  var staticBannerHeader = document.querySelector(".static__banner h2.title");
  var staticBannerParagraphs = document.querySelector(".static__banner p");
  var staticBannerImage = document.querySelector(".static__banner .background__image");
  if (staticBannerHeader) {
    TweenMax.to(staticBannerHeader, 0.5, { opacity: 1, y: 0 });
    if (staticBannerParagraphs !== null) {
      TweenMax.to(staticBannerParagraphs, 0.5, { opacity: 1, y: 0, delay: 0.3 });
    }
    if (staticBannerImage !== null) {
      TweenMax.to(staticBannerImage, 1, { opacity: 1, x: 0, ease: Power4.easeOut });
    }
  }

  /***/
},
/* 23 */
/***/function (module, exports) {

  // TODO: NEED TO MAKE THIS A LITTLE LESS SPECIFIC SO IT WORKS WITH ICON LIST IN GENERAL.

  var technologyLinks = document.querySelectorAll(".technology__and__services a");

  function animateLink(translateX, target, opacity, delay) {
    TweenMax.to(target.querySelector("article"), 0.5, {
      x: translateX,
      delay: delay,
      overwrite: "all"
    });
    TweenMax.to(target.querySelector("span"), 0.5, {
      opacity: opacity,
      delay: 0.25,
      overwrite: "all"
    });
  }

  function enterLink(target) {
    animateLink("145", target, 1);
  }

  function leaveLink(target) {
    animateLink("0", target, 0, 0.5);
  }

  var _iteratorNormalCompletion16 = true;
  var _didIteratorError16 = false;
  var _iteratorError16 = undefined;

  try {
    for (var _iterator16 = technologyLinks[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
      var link = _step16.value;

      link.addEventListener("mouseenter", function (e) {
        enterLink(e.target);
      });
      link.addEventListener("mouseleave", function (e) {
        leaveLink(e.target);
      });
    }

    /***/
  } catch (err) {
    _didIteratorError16 = true;
    _iteratorError16 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion16 && _iterator16.return) {
        _iterator16.return();
      }
    } finally {
      if (_didIteratorError16) {
        throw _iteratorError16;
      }
    }
  }
}]
/******/);