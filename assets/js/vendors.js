/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
    h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
    255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
    u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
    0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
    Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
    case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
    function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
    c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
    1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
    b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
    k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
    if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
    0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
    g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
    pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
    n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
        .46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
    d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
    function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
    !0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
(function(root, factory) {
    // AMD
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        // Node.js or CommonJS
        module.exports = factory;
    } else {
        // Browser globals
        root.emergence = factory(root);
    }
})(this, function(root) {

    'use strict';

    var emergence = {};
    var poll, container, throttle, reset, handheld, elemCushion, offsetTop, offsetRight, offsetBottom, offsetLeft;
    var callback = function() {};

    // Browser feature test to include any browser APIs required for >= IE8
    // @return {bool} true if supported, otherwise false
    var cutsTheMustard = function() {
        return 'querySelectorAll' in document ? true : false;
    };

    // Checks if user is on a handheld
    // @return {bool} true if it's a handheld, otherwise false
    var isHandheld = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(
            navigator.userAgent
        );
    };

    // Get the offset of a DOM Element
    // @param {DOMElement} elem the container or element
    // @return {int} the top, left, width and height values in pixels
    var getElemOffset = function(elem) {

        // Width and height of container or element
        var w = elem.offsetWidth;
        var h = elem.offsetHeight;

        // Default top and left position of container or element
        var topPos = 0;
        var leftPos = 0;

        // Get total distance of container or element to document's top and left origin
        do {
            if (!isNaN(elem.offsetTop)) {
                topPos += elem.offsetTop;
            }
            if (!isNaN(elem.offsetLeft)) {
                leftPos += elem.offsetLeft;
            }
        } while ((elem = elem.offsetParent) !== null);

        // Return dimensions and position
        return {
            width: w,
            height: h,
            top: topPos,
            left: leftPos
        };
    };

    // Get the custom container size if provided, otherwise the documents
    // @return {int} the width and height in pixels
    var getContainerSize = function(container) {
        var w, h;

        // If custom container is provided in options
        // Else use window or document
        if (container !== window) {
            w = container.clientWidth;
            h = container.clientHeight;
        } else {
            w = window.innerWidth || document.documentElement.clientWidth;
            h = window.innerHeight || document.documentElement.clientHeight;
        }

        return {
            width: w,
            height: h
        };
    };

    // Get the X and Y scroll positions
    // @return {int} the X and Y values in pixels
    var getContainerScroll = function(container) {

        // If custom container is provided in options
        // Else use window or document
        if (container !== window) {
            return {
                x: container.scrollLeft + getElemOffset(container).left,
                y: container.scrollTop + getElemOffset(container).top
            };
        } else {
            return {
                x: window.pageXOffset || document.documentElement.scrollLeft,
                y: window.pageYOffset || document.documentElement.scrollTop
            };
        }
    };

    // Check if element's closest parent is hidden (display: none)
    // @param {DOMElement} elem the element
    // @return {bool} true if hidden, false otherwise
    var isHidden = function(elem) {
        return elem.offsetParent === null;
    };

    // Check if element is visible
    // @param {DOMElement} elem the element
    var isVisible = function(elem) {

        // Discontinue if element's closest parent is hidden
        if (isHidden(elem)) {
            return false;
        }

        // Get information from element and container
        var elemOffset = getElemOffset(elem);
        var containerSize = getContainerSize(container);
        var containerScroll = getContainerScroll(container);

        // Determine element size
        var elemWidth = elemOffset.width;
        var elemHeight = elemOffset.height;

        // Determine element position from rect points
        var elemTop = elemOffset.top;
        var elemLeft = elemOffset.left;
        var elemBottom = elemTop + elemHeight;
        var elemRight = elemLeft + elemWidth;

        // Determine boundaries of container and element
        // @return {bool} true if element is found within boundaries, otherwise false
        var checkBoundaries = function() {

            // Determine element boundaries including custom cushion
            var eTop = elemTop + elemHeight * elemCushion;
            var eRight = elemRight - elemWidth * elemCushion;
            var eBottom = elemBottom - elemHeight * elemCushion;
            var eLeft = elemLeft + elemWidth * elemCushion;

            // Determine container boundaries including custom offset
            var cTop = containerScroll.y + offsetTop;
            var cRight = containerScroll.x - offsetRight + containerSize.width;
            var cBottom = containerScroll.y - offsetBottom + containerSize.height;
            var cLeft = containerScroll.x + offsetLeft;

            return (eTop < cBottom && eBottom > cTop && eLeft < cRight && eRight > cLeft);
        };

        return checkBoundaries();
    };

    // Engage emergence through a throttling method for performance
    var emergenceThrottle = function() {
        if (!!poll) {
            return;
        }
        clearTimeout(poll);
        poll = setTimeout(function() {
            emergence.engage();
            poll = null;
        }, throttle);
    };

    // Initialize emergence with options, do feature test and create event listeners
    // @param {Object} options Custom settings
    emergence.init = function(options) {
        options = options || {};

        // Function to return an integer
        var optionInt = function(option, fallback) {
            return parseInt(option || fallback, 10);
        };

        // Function to return a floating point number
        var optionFloat = function(option, fallback) {
            return parseFloat(option || fallback);
        };

        // Default options
        container = options.container || window; // window or document by default
        reset = typeof options.reset !== 'undefined' ? options.reset : true; // true by default
        handheld = typeof options.handheld !== 'undefined' ? options.handheld : true; // true by default
        throttle = optionInt(options.throttle, 250); // 250 by default
        elemCushion = optionFloat(options.elemCushion, 0.15); // 0.15 by default
        offsetTop = optionInt(options.offsetTop, 0); // 0 by default
        offsetRight = optionInt(options.offsetRight, 0); // 0 by default
        offsetBottom = optionInt(options.offsetBottom, 0); // 0 by default
        offsetLeft = optionInt(options.offsetLeft, 0); // 0 by default
        callback = options.callback || callback;

        // If browser doesn't pass feature test
        if (!cutsTheMustard()) {

            // Provide message in console.log
            console.log('Emergence.js is not supported in this browser.');

        }
        // If this is handheld device AND handheld option is true
        // OR not a handheld device
        else if ((isHandheld() && handheld) || !isHandheld()) {

            // Add '.emergence' class to document for conditional CSS
            document.documentElement.className += ' emergence';

            // If browser supports addEventListener
            // Else use attachEvent
            if (window.addEventListener) {

                // Add event listeners for load, scroll and resize events
                window.addEventListener('load', emergenceThrottle, false);
                container.addEventListener('scroll', emergenceThrottle, false);
                container.addEventListener('resize', emergenceThrottle, false);

            } else {

                // Attach events for legacy load method, scroll and resize events
                document.attachEvent('onreadystatechange', function() {
                    if (document.readyState === 'complete') { emergenceThrottle(); }
                });
                container.attachEvent('onscroll', emergenceThrottle);
                container.attachEvent('onresize', emergenceThrottle);

            }
        }
    };

    // Engage emergence
    emergence.engage = function() {
        var nodes = document.querySelectorAll('[data-emergence]');
        var length = nodes.length;
        var elem;

        // Loop through objects with data-emergence attribute
        for (var i = 0; i < length; i++) {
            elem = nodes[i];

            // If element is visible
            if (isVisible(elem)) {

                // Change the state of the attribute to 'visible'
                elem.setAttribute('data-emergence', 'visible');

                // Hack to repaint attribute in IE8
                elem.className = elem.className;

                // Callback for when element is visible
                callback(elem, 'visible');

            } else if (reset === true) {

                // Else if element is hidden and reset
                // Change the state of the attribute to 'hidden'
                elem.setAttribute('data-emergence', 'hidden');

                // Hack to repaint attribute in IE8
                elem.className = elem.className;

                // Create callback
                callback(elem, 'reset');

            } else if (reset === false) {

                // Else if element is hidden and NOT reset
                // Create callback
                callback(elem, 'noreset');

            }
        }

        // If no data-emergence attributes are found
        // Disengage emergence
        if (!length) {
            emergence.disengage();
        }
    };

    // Disengage emergence
    emergence.disengage = function() {

        // If browser supports removeEventListener
        // Else use detachEvent
        if (window.removeEventListener) {

            // Remove event listeners scroll and resize events
            container.removeEventListener('scroll', emergenceThrottle, false);
            container.removeEventListener('resize', emergenceThrottle, false);

        } else {

            // Detach scroll and resize events
            container.detachEvent('onscroll', emergenceThrottle);
            container.detachEvent('onresize', emergenceThrottle);

        }

        // Clear timeout from throttle
        clearTimeout(poll);
    };

    return emergence;
});
/*!
 * Flickity PACKAGED v2.0.10
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2017 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
	// universal module definition
	/*jshint strict: false */ /* globals define, module, require */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
			return factory( window, jQuery );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('jquery')
		);
	} else {
		// browser global
		window.jQueryBridget = factory(
			window,
			window.jQuery
		);
	}

}( window, function factory( window, jQuery ) {
	'use strict';

// ----- utils ----- //

	var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
	var console = window.console;
	var logError = typeof console == 'undefined' ? function() {} :
		function( message ) {
			console.error( message );
		};

// ----- jQueryBridget ----- //

	function jQueryBridget( namespace, PluginClass, $ ) {
		$ = $ || jQuery || window.jQuery;
		if ( !$ ) {
			return;
		}

		// add option method -> $().plugin('option', {...})
		if ( !PluginClass.prototype.option ) {
			// option setter
			PluginClass.prototype.option = function( opts ) {
				// bail out if not an object
				if ( !$.isPlainObject( opts ) ){
					return;
				}
				this.options = $.extend( true, this.options, opts );
			};
		}

		// make jQuery plugin
		$.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
			if ( typeof arg0 == 'string' ) {
				// method call $().plugin( 'methodName', { options } )
				// shift arguments by 1
				var args = arraySlice.call( arguments, 1 );
				return methodCall( this, arg0, args );
			}
			// just $().plugin({ options })
			plainCall( this, arg0 );
			return this;
		};

		// $().plugin('methodName')
		function methodCall( $elems, methodName, args ) {
			var returnValue;
			var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

			$elems.each( function( i, elem ) {
				// get instance
				var instance = $.data( elem, namespace );
				if ( !instance ) {
					logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
						pluginMethodStr );
					return;
				}

				var method = instance[ methodName ];
				if ( !method || methodName.charAt(0) == '_' ) {
					logError( pluginMethodStr + ' is not a valid method' );
					return;
				}

				// apply method, get return value
				var value = method.apply( instance, args );
				// set return value if value is returned, use only first value
				returnValue = returnValue === undefined ? value : returnValue;
			});

			return returnValue !== undefined ? returnValue : $elems;
		}

		function plainCall( $elems, options ) {
			$elems.each( function( i, elem ) {
				var instance = $.data( elem, namespace );
				if ( instance ) {
					// set options & init
					instance.option( options );
					instance._init();
				} else {
					// initialize new instance
					instance = new PluginClass( elem, options );
					$.data( elem, namespace, instance );
				}
			});
		}

		updateJQuery( $ );

	}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
	function updateJQuery( $ ) {
		if ( !$ || ( $ && $.bridget ) ) {
			return;
		}
		$.bridget = jQueryBridget;
	}

	updateJQuery( jQuery || window.jQuery );

// -----  ----- //

	return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
	// universal module definition
	/* jshint strict: false */ /* globals define, module, window */
	if ( typeof define == 'function' && define.amd ) {
		// AMD - RequireJS
		define( 'ev-emitter/ev-emitter',factory );
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS - Browserify, Webpack
		module.exports = factory();
	} else {
		// Browser globals
		global.EvEmitter = factory();
	}

}( typeof window != 'undefined' ? window : this, function() {



	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function( eventName, listener ) {
		if ( !eventName || !listener ) {
			return;
		}
		// set events hash
		var events = this._events = this._events || {};
		// set listeners array
		var listeners = events[ eventName ] = events[ eventName ] || [];
		// only add once
		if ( listeners.indexOf( listener ) == -1 ) {
			listeners.push( listener );
		}

		return this;
	};

	proto.once = function( eventName, listener ) {
		if ( !eventName || !listener ) {
			return;
		}
		// add event
		this.on( eventName, listener );
		// set once flag
		// set onceEvents hash
		var onceEvents = this._onceEvents = this._onceEvents || {};
		// set onceListeners object
		var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
		// set flag
		onceListeners[ listener ] = true;

		return this;
	};

	proto.off = function( eventName, listener ) {
		var listeners = this._events && this._events[ eventName ];
		if ( !listeners || !listeners.length ) {
			return;
		}
		var index = listeners.indexOf( listener );
		if ( index != -1 ) {
			listeners.splice( index, 1 );
		}

		return this;
	};

	proto.emitEvent = function( eventName, args ) {
		var listeners = this._events && this._events[ eventName ];
		if ( !listeners || !listeners.length ) {
			return;
		}
		// copy over to avoid interference if .off() in listener
		listeners = listeners.slice(0);
		args = args || [];
		// once stuff
		var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

		for ( var i=0; i < listeners.length; i++ ) {
			var listener = listeners[i]
			var isOnce = onceListeners && onceListeners[ listener ];
			if ( isOnce ) {
				// remove listener
				// remove before trigger to prevent recursion
				this.off( eventName, listener );
				// unset once flag
				delete onceListeners[ listener ];
			}
			// trigger listener
			listener.apply( this, args );
		}

		return this;
	};

	proto.allOff = function() {
		delete this._events;
		delete this._onceEvents;
	};

	return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
	'use strict';

	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'get-size/get-size',[],function() {
			return factory();
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory();
	} else {
		// browser global
		window.getSize = factory();
	}

})( window, function factory() {
	'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
	function getStyleSize( value ) {
		var num = parseFloat( value );
		// not a percent like '100%', and a number
		var isValid = value.indexOf('%') == -1 && !isNaN( num );
		return isValid && num;
	}

	function noop() {}

	var logError = typeof console == 'undefined' ? noop :
		function( message ) {
			console.error( message );
		};

// -------------------------- measurements -------------------------- //

	var measurements = [
		'paddingLeft',
		'paddingRight',
		'paddingTop',
		'paddingBottom',
		'marginLeft',
		'marginRight',
		'marginTop',
		'marginBottom',
		'borderLeftWidth',
		'borderRightWidth',
		'borderTopWidth',
		'borderBottomWidth'
	];

	var measurementsLength = measurements.length;

	function getZeroSize() {
		var size = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		};
		for ( var i=0; i < measurementsLength; i++ ) {
			var measurement = measurements[i];
			size[ measurement ] = 0;
		}
		return size;
	}

// -------------------------- getStyle -------------------------- //

	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
		var style = getComputedStyle( elem );
		if ( !style ) {
			logError( 'Style returned ' + style +
				'. Are you running this code in a hidden iframe on Firefox? ' +
				'See http://bit.ly/getsizebug1' );
		}
		return style;
	}

// -------------------------- setup -------------------------- //

	var isSetup = false;

	var isBoxSizeOuter;

	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
		// setup once
		if ( isSetup ) {
			return;
		}
		isSetup = true;

		// -------------------------- box sizing -------------------------- //

		/**
		 * WebKit measures the outer-width on style.width on border-box elems
		 * IE & Firefox<29 measures the inner-width
		 */
		var div = document.createElement('div');
		div.style.width = '200px';
		div.style.padding = '1px 2px 3px 4px';
		div.style.borderStyle = 'solid';
		div.style.borderWidth = '1px 2px 3px 4px';
		div.style.boxSizing = 'border-box';

		var body = document.body || document.documentElement;
		body.appendChild( div );
		var style = getStyle( div );

		getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
		body.removeChild( div );

	}

// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
		setup();

		// use querySeletor if elem is string
		if ( typeof elem == 'string' ) {
			elem = document.querySelector( elem );
		}

		// do not proceed on non-objects
		if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
			return;
		}

		var style = getStyle( elem );

		// if hidden, everything is 0
		if ( style.display == 'none' ) {
			return getZeroSize();
		}

		var size = {};
		size.width = elem.offsetWidth;
		size.height = elem.offsetHeight;

		var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

		// get all measurements
		for ( var i=0; i < measurementsLength; i++ ) {
			var measurement = measurements[i];
			var value = style[ measurement ];
			var num = parseFloat( value );
			// any 'auto', 'medium' value will be 0
			size[ measurement ] = !isNaN( num ) ? num : 0;
		}

		var paddingWidth = size.paddingLeft + size.paddingRight;
		var paddingHeight = size.paddingTop + size.paddingBottom;
		var marginWidth = size.marginLeft + size.marginRight;
		var marginHeight = size.marginTop + size.marginBottom;
		var borderWidth = size.borderLeftWidth + size.borderRightWidth;
		var borderHeight = size.borderTopWidth + size.borderBottomWidth;

		var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

		// overwrite width and height if we can get it from style
		var styleWidth = getStyleSize( style.width );
		if ( styleWidth !== false ) {
			size.width = styleWidth +
				// add padding and border unless it's already including it
				( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
		}

		var styleHeight = getStyleSize( style.height );
		if ( styleHeight !== false ) {
			size.height = styleHeight +
				// add padding and border unless it's already including it
				( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
		}

		size.innerWidth = size.width - ( paddingWidth + borderWidth );
		size.innerHeight = size.height - ( paddingHeight + borderHeight );

		size.outerWidth = size.width + marginWidth;
		size.outerHeight = size.height + marginHeight;

		return size;
	}

	return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
	/*global define: false, module: false */
	'use strict';
	// universal module definition
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'desandro-matches-selector/matches-selector',factory );
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory();
	} else {
		// browser global
		window.matchesSelector = factory();
	}

}( window, function factory() {
	'use strict';

	var matchesMethod = ( function() {
		var ElemProto = window.Element.prototype;
		// check for the standard method name first
		if ( ElemProto.matches ) {
			return 'matches';
		}
		// check un-prefixed
		if ( ElemProto.matchesSelector ) {
			return 'matchesSelector';
		}
		// check vendor prefixes
		var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

		for ( var i=0; i < prefixes.length; i++ ) {
			var prefix = prefixes[i];
			var method = prefix + 'MatchesSelector';
			if ( ElemProto[ method ] ) {
				return method;
			}
		}
	})();

	return function matchesSelector( elem, selector ) {
		return elem[ matchesMethod ]( selector );
	};

}));

/**
 * Fizzy UI utils v2.0.5
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
	// universal module definition
	/*jshint strict: false */ /*globals define, module, require */

	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'fizzy-ui-utils/utils',[
			'desandro-matches-selector/matches-selector'
		], function( matchesSelector ) {
			return factory( window, matchesSelector );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('desandro-matches-selector')
		);
	} else {
		// browser global
		window.fizzyUIUtils = factory(
			window,
			window.matchesSelector
		);
	}

}( window, function factory( window, matchesSelector ) {



	var utils = {};

// ----- extend ----- //

// extends objects
	utils.extend = function( a, b ) {
		for ( var prop in b ) {
			a[ prop ] = b[ prop ];
		}
		return a;
	};

// ----- modulo ----- //

	utils.modulo = function( num, div ) {
		return ( ( num % div ) + div ) % div;
	};

// ----- makeArray ----- //

// turn element or nodeList into an array
	utils.makeArray = function( obj ) {
		var ary = [];
		if ( Array.isArray( obj ) ) {
			// use object if already an array
			ary = obj;
		} else if ( obj && typeof obj == 'object' &&
			typeof obj.length == 'number' ) {
			// convert nodeList to array
			for ( var i=0; i < obj.length; i++ ) {
				ary.push( obj[i] );
			}
		} else {
			// array of single index
			ary.push( obj );
		}
		return ary;
	};

// ----- removeFrom ----- //

	utils.removeFrom = function( ary, obj ) {
		var index = ary.indexOf( obj );
		if ( index != -1 ) {
			ary.splice( index, 1 );
		}
	};

// ----- getParent ----- //

	utils.getParent = function( elem, selector ) {
		while ( elem.parentNode && elem != document.body ) {
			elem = elem.parentNode;
			if ( matchesSelector( elem, selector ) ) {
				return elem;
			}
		}
	};

// ----- getQueryElement ----- //

// use element as selector string
	utils.getQueryElement = function( elem ) {
		if ( typeof elem == 'string' ) {
			return document.querySelector( elem );
		}
		return elem;
	};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function( event ) {
		var method = 'on' + event.type;
		if ( this[ method ] ) {
			this[ method ]( event );
		}
	};

// ----- filterFindElements ----- //

	utils.filterFindElements = function( elems, selector ) {
		// make array of elems
		elems = utils.makeArray( elems );
		var ffElems = [];

		elems.forEach( function( elem ) {
			// check that elem is an actual element
			if ( !( elem instanceof HTMLElement ) ) {
				return;
			}
			// add elem if no selector
			if ( !selector ) {
				ffElems.push( elem );
				return;
			}
			// filter & find items if we have a selector
			// filter
			if ( matchesSelector( elem, selector ) ) {
				ffElems.push( elem );
			}
			// find children
			var childElems = elem.querySelectorAll( selector );
			// concat childElems to filterFound array
			for ( var i=0; i < childElems.length; i++ ) {
				ffElems.push( childElems[i] );
			}
		});

		return ffElems;
	};

// ----- debounceMethod ----- //

	utils.debounceMethod = function( _class, methodName, threshold ) {
		// original method
		var method = _class.prototype[ methodName ];
		var timeoutName = methodName + 'Timeout';

		_class.prototype[ methodName ] = function() {
			var timeout = this[ timeoutName ];
			if ( timeout ) {
				clearTimeout( timeout );
			}
			var args = arguments;

			var _this = this;
			this[ timeoutName ] = setTimeout( function() {
				method.apply( _this, args );
				delete _this[ timeoutName ];
			}, threshold || 100 );
		};
	};

// ----- docReady ----- //

	utils.docReady = function( callback ) {
		var readyState = document.readyState;
		if ( readyState == 'complete' || readyState == 'interactive' ) {
			// do async to allow for other scripts to run. metafizzy/flickity#441
			setTimeout( callback );
		} else {
			document.addEventListener( 'DOMContentLoaded', callback );
		}
	};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function( str ) {
		return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
			return $1 + '-' + $2;
		}).toLowerCase();
	};

	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function( WidgetClass, namespace ) {
		utils.docReady( function() {
			var dashedNamespace = utils.toDashed( namespace );
			var dataAttr = 'data-' + dashedNamespace;
			var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
			var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
			var elems = utils.makeArray( dataAttrElems )
				.concat( utils.makeArray( jsDashElems ) );
			var dataOptionsAttr = dataAttr + '-options';
			var jQuery = window.jQuery;

			elems.forEach( function( elem ) {
				var attr = elem.getAttribute( dataAttr ) ||
					elem.getAttribute( dataOptionsAttr );
				var options;
				try {
					options = attr && JSON.parse( attr );
				} catch ( error ) {
					// log error, do not initialize
					if ( console ) {
						console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
							': ' + error );
					}
					return;
				}
				// initialize
				var instance = new WidgetClass( elem, options );
				// make available via $().data('namespace')
				if ( jQuery ) {
					jQuery.data( elem, namespace, instance );
				}
			});

		});
	};

// -----  ----- //

	return utils;

}));

// Flickity.Cell
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/cell',[
			'get-size/get-size'
		], function( getSize ) {
			return factory( window, getSize );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('get-size')
		);
	} else {
		// browser global
		window.Flickity = window.Flickity || {};
		window.Flickity.Cell = factory(
			window,
			window.getSize
		);
	}

}( window, function factory( window, getSize ) {



	function Cell( elem, parent ) {
		this.element = elem;
		this.parent = parent;

		this.create();
	}

	var proto = Cell.prototype;

	proto.create = function() {
		this.element.style.position = 'absolute';
		this.x = 0;
		this.shift = 0;
	};

	proto.destroy = function() {
		// reset style
		this.element.style.position = '';
		var side = this.parent.originSide;
		this.element.style[ side ] = '';
	};

	proto.getSize = function() {
		this.size = getSize( this.element );
	};

	proto.setPosition = function( x ) {
		this.x = x;
		this.updateTarget();
		this.renderPosition( x );
	};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
	proto.updateTarget = proto.setDefaultTarget = function() {
		var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
		this.target = this.x + this.size[ marginProperty ] +
			this.size.width * this.parent.cellAlign;
	};

	proto.renderPosition = function( x ) {
		// render position of cell with in slider
		var side = this.parent.originSide;
		this.element.style[ side ] = this.parent.getPositionValue( x );
	};

	/**
	 * @param {Integer} factor - 0, 1, or -1
	 **/
	proto.wrapShift = function( shift ) {
		this.shift = shift;
		this.renderPosition( this.x + this.parent.slideableWidth * shift );
	};

	proto.remove = function() {
		this.element.parentNode.removeChild( this.element );
	};

	return Cell;

}));

// slide
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/slide',factory );
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory();
	} else {
		// browser global
		window.Flickity = window.Flickity || {};
		window.Flickity.Slide = factory();
	}

}( window, function factory() {
	'use strict';

	function Slide( parent ) {
		this.parent = parent;
		this.isOriginLeft = parent.originSide == 'left';
		this.cells = [];
		this.outerWidth = 0;
		this.height = 0;
	}

	var proto = Slide.prototype;

	proto.addCell = function( cell ) {
		this.cells.push( cell );
		this.outerWidth += cell.size.outerWidth;
		this.height = Math.max( cell.size.outerHeight, this.height );
		// first cell stuff
		if ( this.cells.length == 1 ) {
			this.x = cell.x; // x comes from first cell
			var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
			this.firstMargin = cell.size[ beginMargin ];
		}
	};

	proto.updateTarget = function() {
		var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
		var lastCell = this.getLastCell();
		var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
		var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
		this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
	};

	proto.getLastCell = function() {
		return this.cells[ this.cells.length - 1 ];
	};

	proto.select = function() {
		this.changeSelectedClass('add');
	};

	proto.unselect = function() {
		this.changeSelectedClass('remove');
	};

	proto.changeSelectedClass = function( method ) {
		this.cells.forEach( function( cell ) {
			cell.element.classList[ method ]('is-selected');
		});
	};

	proto.getCellElements = function() {
		return this.cells.map( function( cell ) {
			return cell.element;
		});
	};

	return Slide;

}));

// animate
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/animate',[
			'fizzy-ui-utils/utils'
		], function( utils ) {
			return factory( window, utils );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		window.Flickity = window.Flickity || {};
		window.Flickity.animatePrototype = factory(
			window,
			window.fizzyUIUtils
		);
	}

}( window, function factory( window, utils ) {



// -------------------------- requestAnimationFrame -------------------------- //

// get rAF, prefixed, if present
	var requestAnimationFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame;

// fallback to setTimeout
	var lastTime = 0;
	if ( !requestAnimationFrame )  {
		requestAnimationFrame = function( callback ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = setTimeout( callback, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};
	}

// -------------------------- animate -------------------------- //

	var proto = {};

	proto.startAnimation = function() {
		if ( this.isAnimating ) {
			return;
		}

		this.isAnimating = true;
		this.restingFrames = 0;
		this.animate();
	};

	proto.animate = function() {
		this.applyDragForce();
		this.applySelectedAttraction();

		var previousX = this.x;

		this.integratePhysics();
		this.positionSlider();
		this.settle( previousX );
		// animate next frame
		if ( this.isAnimating ) {
			var _this = this;
			requestAnimationFrame( function animateFrame() {
				_this.animate();
			});
		}
	};


	var transformProperty = ( function () {
		var style = document.documentElement.style;
		if ( typeof style.transform == 'string' ) {
			return 'transform';
		}
		return 'WebkitTransform';
	})();

	proto.positionSlider = function() {
		var x = this.x;
		// wrap position around
		if ( this.options.wrapAround && this.cells.length > 1 ) {
			x = utils.modulo( x, this.slideableWidth );
			x = x - this.slideableWidth;
			this.shiftWrapCells( x );
		}

		x = x + this.cursorPosition;
		// reverse if right-to-left and using transform
		x = this.options.rightToLeft && transformProperty ? -x : x;
		var value = this.getPositionValue( x );
		// use 3D tranforms for hardware acceleration on iOS
		// but use 2D when settled, for better font-rendering
		this.slider.style[ transformProperty ] = this.isAnimating ?
			'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

		// scroll event
		var firstSlide = this.slides[0];
		if ( firstSlide ) {
			var positionX = -this.x - firstSlide.target;
			var progress = positionX / this.slidesWidth;
			this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
		}
	};

	proto.positionSliderAtSelected = function() {
		if ( !this.cells.length ) {
			return;
		}
		this.x = -this.selectedSlide.target;
		this.positionSlider();
	};

	proto.getPositionValue = function( position ) {
		if ( this.options.percentPosition ) {
			// percent position, round to 2 digits, like 12.34%
			return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
		} else {
			// pixel positioning
			return Math.round( position ) + 'px';
		}
	};

	proto.settle = function( previousX ) {
		// keep track of frames where x hasn't moved
		if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
			this.restingFrames++;
		}
		// stop animating if resting for 3 or more frames
		if ( this.restingFrames > 2 ) {
			this.isAnimating = false;
			delete this.isFreeScrolling;
			// render position with translateX when settled
			this.positionSlider();
			this.dispatchEvent('settle');
		}
	};

	proto.shiftWrapCells = function( x ) {
		// shift before cells
		var beforeGap = this.cursorPosition + x;
		this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
		// shift after cells
		var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
		this._shiftCells( this.afterShiftCells, afterGap, 1 );
	};

	proto._shiftCells = function( cells, gap, shift ) {
		for ( var i=0; i < cells.length; i++ ) {
			var cell = cells[i];
			var cellShift = gap > 0 ? shift : 0;
			cell.wrapShift( cellShift );
			gap -= cell.size.outerWidth;
		}
	};

	proto._unshiftCells = function( cells ) {
		if ( !cells || !cells.length ) {
			return;
		}
		for ( var i=0; i < cells.length; i++ ) {
			cells[i].wrapShift( 0 );
		}
	};

// -------------------------- physics -------------------------- //

	proto.integratePhysics = function() {
		this.x += this.velocity;
		this.velocity *= this.getFrictionFactor();
	};

	proto.applyForce = function( force ) {
		this.velocity += force;
	};

	proto.getFrictionFactor = function() {
		return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
	};

	proto.getRestingPosition = function() {
		// my thanks to Steven Wittens, who simplified this math greatly
		return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
	};

	proto.applyDragForce = function() {
		if ( !this.isPointerDown ) {
			return;
		}
		// change the position to drag position by applying force
		var dragVelocity = this.dragX - this.x;
		var dragForce = dragVelocity - this.velocity;
		this.applyForce( dragForce );
	};

	proto.applySelectedAttraction = function() {
		// do not attract if pointer down or no cells
		if ( this.isPointerDown || this.isFreeScrolling || !this.cells.length ) {
			return;
		}
		var distance = this.selectedSlide.target * -1 - this.x;
		var force = distance * this.options.selectedAttraction;
		this.applyForce( force );
	};

	return proto;

}));

// Flickity main
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/flickity',[
			'ev-emitter/ev-emitter',
			'get-size/get-size',
			'fizzy-ui-utils/utils',
			'./cell',
			'./slide',
			'./animate'
		], function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
			return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('ev-emitter'),
			require('get-size'),
			require('fizzy-ui-utils'),
			require('./cell'),
			require('./slide'),
			require('./animate')
		);
	} else {
		// browser global
		var _Flickity = window.Flickity;

		window.Flickity = factory(
			window,
			window.EvEmitter,
			window.getSize,
			window.fizzyUIUtils,
			_Flickity.Cell,
			_Flickity.Slide,
			_Flickity.animatePrototype
		);
	}

}( window, function factory( window, EvEmitter, getSize,
                             utils, Cell, Slide, animatePrototype ) {



// vars
	var jQuery = window.jQuery;
	var getComputedStyle = window.getComputedStyle;
	var console = window.console;

	function moveElements( elems, toElem ) {
		elems = utils.makeArray( elems );
		while ( elems.length ) {
			toElem.appendChild( elems.shift() );
		}
	}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
	var GUID = 0;
// internal store of all Flickity intances
	var instances = {};

	function Flickity( element, options ) {
		var queryElement = utils.getQueryElement( element );
		if ( !queryElement ) {
			if ( console ) {
				console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
			}
			return;
		}
		this.element = queryElement;
		// do not initialize twice on same element
		if ( this.element.flickityGUID ) {
			var instance = instances[ this.element.flickityGUID ];
			instance.option( options );
			return instance;
		}

		// add jQuery
		if ( jQuery ) {
			this.$element = jQuery( this.element );
		}
		// options
		this.options = utils.extend( {}, this.constructor.defaults );
		this.option( options );

		// kick things off
		this._create();
	}

	Flickity.defaults = {
		accessibility: true,
		// adaptiveHeight: false,
		cellAlign: 'center',
		// cellSelector: undefined,
		// contain: false,
		freeScrollFriction: 0.075, // friction when free-scrolling
		friction: 0.28, // friction when selecting
		namespaceJQueryEvents: true,
		// initialIndex: 0,
		percentPosition: true,
		resize: true,
		selectedAttraction: 0.025,
		setGallerySize: true
		// watchCSS: false,
		// wrapAround: false
	};

// hash of methods triggered on _create()
	Flickity.createMethods = [];

	var proto = Flickity.prototype;
// inherit EventEmitter
	utils.extend( proto, EvEmitter.prototype );

	proto._create = function() {
		// add id for Flickity.data
		var id = this.guid = ++GUID;
		this.element.flickityGUID = id; // expando
		instances[ id ] = this; // associate via id
		// initial properties
		this.selectedIndex = 0;
		// how many frames slider has been in same position
		this.restingFrames = 0;
		// initial physics properties
		this.x = 0;
		this.velocity = 0;
		this.originSide = this.options.rightToLeft ? 'right' : 'left';
		// create viewport & slider
		this.viewport = document.createElement('div');
		this.viewport.className = 'flickity-viewport';
		this._createSlider();

		if ( this.options.resize || this.options.watchCSS ) {
			window.addEventListener( 'resize', this );
		}

		Flickity.createMethods.forEach( function( method ) {
			this[ method ]();
		}, this );

		if ( this.options.watchCSS ) {
			this.watchCSS();
		} else {
			this.activate();
		}

	};

	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
		utils.extend( this.options, opts );
	};

	proto.activate = function() {
		if ( this.isActive ) {
			return;
		}
		this.isActive = true;
		this.element.classList.add('flickity-enabled');
		if ( this.options.rightToLeft ) {
			this.element.classList.add('flickity-rtl');
		}

		this.getSize();
		// move initial cell elements so they can be loaded as cells
		var cellElems = this._filterFindCellElements( this.element.children );
		moveElements( cellElems, this.slider );
		this.viewport.appendChild( this.slider );
		this.element.appendChild( this.viewport );
		// get cells from children
		this.reloadCells();

		if ( this.options.accessibility ) {
			// allow element to focusable
			this.element.tabIndex = 0;
			// listen for key presses
			this.element.addEventListener( 'keydown', this );
		}

		this.emitEvent('activate');

		var index;
		var initialIndex = this.options.initialIndex;
		if ( this.isInitActivated ) {
			index = this.selectedIndex;
		} else if ( initialIndex !== undefined ) {
			index = this.cells[ initialIndex ] ? initialIndex : 0;
		} else {
			index = 0;
		}
		// select instantly
		this.select( index, false, true );
		// flag for initial activation, for using initialIndex
		this.isInitActivated = true;
	};

// slider positions the cells
	proto._createSlider = function() {
		// slider element does all the positioning
		var slider = document.createElement('div');
		slider.className = 'flickity-slider';
		slider.style[ this.originSide ] = 0;
		this.slider = slider;
	};

	proto._filterFindCellElements = function( elems ) {
		return utils.filterFindElements( elems, this.options.cellSelector );
	};

// goes through all children
	proto.reloadCells = function() {
		// collection of item elements
		this.cells = this._makeCells( this.slider.children );
		this.positionCells();
		this._getWrapShiftCells();
		this.setGallerySize();
	};

	/**
	 * turn elements into Flickity.Cells
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Flickity Cells
	 */
	proto._makeCells = function( elems ) {
		var cellElems = this._filterFindCellElements( elems );

		// create new Flickity for collection
		var cells = cellElems.map( function( cellElem ) {
			return new Cell( cellElem, this );
		}, this );

		return cells;
	};

	proto.getLastCell = function() {
		return this.cells[ this.cells.length - 1 ];
	};

	proto.getLastSlide = function() {
		return this.slides[ this.slides.length - 1 ];
	};

// positions all cells
	proto.positionCells = function() {
		// size all cells
		this._sizeCells( this.cells );
		// position all cells
		this._positionCells( 0 );
	};

	/**
	 * position certain cells
	 * @param {Integer} index - which cell to start with
	 */
	proto._positionCells = function( index ) {
		index = index || 0;
		// also measure maxCellHeight
		// start 0 if positioning all cells
		this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
		var cellX = 0;
		// get cellX
		if ( index > 0 ) {
			var startCell = this.cells[ index - 1 ];
			cellX = startCell.x + startCell.size.outerWidth;
		}
		var len = this.cells.length;
		for ( var i=index; i < len; i++ ) {
			var cell = this.cells[i];
			cell.setPosition( cellX );
			cellX += cell.size.outerWidth;
			this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
		}
		// keep track of cellX for wrap-around
		this.slideableWidth = cellX;
		// slides
		this.updateSlides();
		// contain slides target
		this._containSlides();
		// update slidesWidth
		this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
	};

	/**
	 * cell.getSize() on multiple cells
	 * @param {Array} cells
	 */
	proto._sizeCells = function( cells ) {
		cells.forEach( function( cell ) {
			cell.getSize();
		});
	};

// --------------------------  -------------------------- //

	proto.updateSlides = function() {
		this.slides = [];
		if ( !this.cells.length ) {
			return;
		}

		var slide = new Slide( this );
		this.slides.push( slide );
		var isOriginLeft = this.originSide == 'left';
		var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

		var canCellFit = this._getCanCellFit();

		this.cells.forEach( function( cell, i ) {
			// just add cell if first cell in slide
			if ( !slide.cells.length ) {
				slide.addCell( cell );
				return;
			}

			var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
				( cell.size.outerWidth - cell.size[ nextMargin ] );

			if ( canCellFit.call( this, i, slideWidth ) ) {
				slide.addCell( cell );
			} else {
				// doesn't fit, new slide
				slide.updateTarget();

				slide = new Slide( this );
				this.slides.push( slide );
				slide.addCell( cell );
			}
		}, this );
		// last slide
		slide.updateTarget();
		// update .selectedSlide
		this.updateSelectedSlide();
	};

	proto._getCanCellFit = function() {
		var groupCells = this.options.groupCells;
		if ( !groupCells ) {
			return function() {
				return false;
			};
		} else if ( typeof groupCells == 'number' ) {
			// group by number. 3 -> [0,1,2], [3,4,5], ...
			var number = parseInt( groupCells, 10 );
			return function( i ) {
				return ( i % number ) !== 0;
			};
		}
		// default, group by width of slide
		// parse '75%
		var percentMatch = typeof groupCells == 'string' &&
			groupCells.match(/^(\d+)%$/);
		var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
		return function( i, slideWidth ) {
			return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
		};
	};

// alias _init for jQuery plugin .flickity()
	proto._init =
		proto.reposition = function() {
			this.positionCells();
			this.positionSliderAtSelected();
		};

	proto.getSize = function() {
		this.size = getSize( this.element );
		this.setCellAlign();
		this.cursorPosition = this.size.innerWidth * this.cellAlign;
	};

	var cellAlignShorthands = {
		// cell align, then based on origin side
		center: {
			left: 0.5,
			right: 0.5
		},
		left: {
			left: 0,
			right: 1
		},
		right: {
			right: 0,
			left: 1
		}
	};

	proto.setCellAlign = function() {
		var shorthand = cellAlignShorthands[ this.options.cellAlign ];
		this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
	};

	proto.setGallerySize = function() {
		if ( this.options.setGallerySize ) {
			var height = this.options.adaptiveHeight && this.selectedSlide ?
				this.selectedSlide.height : this.maxCellHeight;
			this.viewport.style.height = height + 'px';
		}
	};

	proto._getWrapShiftCells = function() {
		// only for wrap-around
		if ( !this.options.wrapAround ) {
			return;
		}
		// unshift previous cells
		this._unshiftCells( this.beforeShiftCells );
		this._unshiftCells( this.afterShiftCells );
		// get before cells
		// initial gap
		var gapX = this.cursorPosition;
		var cellIndex = this.cells.length - 1;
		this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
		// get after cells
		// ending gap between last cell and end of gallery viewport
		gapX = this.size.innerWidth - this.cursorPosition;
		// start cloning at first cell, working forwards
		this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
	};

	proto._getGapCells = function( gapX, cellIndex, increment ) {
		// keep adding cells until the cover the initial gap
		var cells = [];
		while ( gapX > 0 ) {
			var cell = this.cells[ cellIndex ];
			if ( !cell ) {
				break;
			}
			cells.push( cell );
			cellIndex += increment;
			gapX -= cell.size.outerWidth;
		}
		return cells;
	};

// ----- contain ----- //

// contain cell targets so no excess sliding
	proto._containSlides = function() {
		if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
			return;
		}
		var isRightToLeft = this.options.rightToLeft;
		var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
		var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
		var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
		// content is less than gallery size
		var isContentSmaller = contentWidth < this.size.innerWidth;
		// bounds
		var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
		var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
		// contain each cell target
		this.slides.forEach( function( slide ) {
			if ( isContentSmaller ) {
				// all cells fit inside gallery
				slide.target = contentWidth * this.cellAlign;
			} else {
				// contain to bounds
				slide.target = Math.max( slide.target, beginBound );
				slide.target = Math.min( slide.target, endBound );
			}
		}, this );
	};

// -----  ----- //

	/**
	 * emits events via eventEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
		var emitArgs = event ? [ event ].concat( args ) : args;
		this.emitEvent( type, emitArgs );

		if ( jQuery && this.$element ) {
			// default trigger with type if no event
			type += this.options.namespaceJQueryEvents ? '.flickity' : '';
			var $event = type;
			if ( event ) {
				// create jQuery event
				var jQEvent = jQuery.Event( event );
				jQEvent.type = type;
				$event = jQEvent;
			}
			this.$element.trigger( $event, args );
		}
	};

// -------------------------- select -------------------------- //

	/**
	 * @param {Integer} index - index of the slide
	 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
	 * @param {Boolean} isInstant - will immediately set position at selected cell
	 */
	proto.select = function( index, isWrap, isInstant ) {
		if ( !this.isActive ) {
			return;
		}
		index = parseInt( index, 10 );
		this._wrapSelect( index );

		if ( this.options.wrapAround || isWrap ) {
			index = utils.modulo( index, this.slides.length );
		}
		// bail if invalid index
		if ( !this.slides[ index ] ) {
			return;
		}
		this.selectedIndex = index;
		this.updateSelectedSlide();
		if ( isInstant ) {
			this.positionSliderAtSelected();
		} else {
			this.startAnimation();
		}
		if ( this.options.adaptiveHeight ) {
			this.setGallerySize();
		}

		this.dispatchEvent('select');
		// old v1 event name, remove in v3
		this.dispatchEvent('cellSelect');
	};

// wraps position for wrapAround, to move to closest slide. #113
	proto._wrapSelect = function( index ) {
		var len = this.slides.length;
		var isWrapping = this.options.wrapAround && len > 1;
		if ( !isWrapping ) {
			return index;
		}
		var wrapIndex = utils.modulo( index, len );
		// go to shortest
		var delta = Math.abs( wrapIndex - this.selectedIndex );
		var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
		var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
		if ( !this.isDragSelect && backWrapDelta < delta ) {
			index += len;
		} else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
			index -= len;
		}
		// wrap position so slider is within normal area
		if ( index < 0 ) {
			this.x -= this.slideableWidth;
		} else if ( index >= len ) {
			this.x += this.slideableWidth;
		}
	};

	proto.previous = function( isWrap, isInstant ) {
		this.select( this.selectedIndex - 1, isWrap, isInstant );
	};

	proto.next = function( isWrap, isInstant ) {
		this.select( this.selectedIndex + 1, isWrap, isInstant );
	};

	proto.updateSelectedSlide = function() {
		var slide = this.slides[ this.selectedIndex ];
		// selectedIndex could be outside of slides, if triggered before resize()
		if ( !slide ) {
			return;
		}
		// unselect previous selected slide
		this.unselectSelectedSlide();
		// update new selected slide
		this.selectedSlide = slide;
		slide.select();
		this.selectedCells = slide.cells;
		this.selectedElements = slide.getCellElements();
		// HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
		// Remove in v3?
		this.selectedCell = slide.cells[0];
		this.selectedElement = this.selectedElements[0];
	};

	proto.unselectSelectedSlide = function() {
		if ( this.selectedSlide ) {
			this.selectedSlide.unselect();
		}
	};

	/**
	 * select slide from number or cell element
	 * @param {Element or Number} elem
	 */
	proto.selectCell = function( value, isWrap, isInstant ) {
		// get cell
		var cell;
		if ( typeof value == 'number' ) {
			cell = this.cells[ value ];
		} else {
			// use string as selector
			if ( typeof value == 'string' ) {
				value = this.element.querySelector( value );
			}
			// get cell from element
			cell = this.getCell( value );
		}
		// select slide that has cell
		for ( var i=0; cell && i < this.slides.length; i++ ) {
			var slide = this.slides[i];
			var index = slide.cells.indexOf( cell );
			if ( index != -1 ) {
				this.select( i, isWrap, isInstant );
				return;
			}
		}
	};

// -------------------------- get cells -------------------------- //

	/**
	 * get Flickity.Cell, given an Element
	 * @param {Element} elem
	 * @returns {Flickity.Cell} item
	 */
	proto.getCell = function( elem ) {
		// loop through cells to get the one that matches
		for ( var i=0; i < this.cells.length; i++ ) {
			var cell = this.cells[i];
			if ( cell.element == elem ) {
				return cell;
			}
		}
	};

	/**
	 * get collection of Flickity.Cells, given Elements
	 * @param {Element, Array, NodeList} elems
	 * @returns {Array} cells - Flickity.Cells
	 */
	proto.getCells = function( elems ) {
		elems = utils.makeArray( elems );
		var cells = [];
		elems.forEach( function( elem ) {
			var cell = this.getCell( elem );
			if ( cell ) {
				cells.push( cell );
			}
		}, this );
		return cells;
	};

	/**
	 * get cell elements
	 * @returns {Array} cellElems
	 */
	proto.getCellElements = function() {
		return this.cells.map( function( cell ) {
			return cell.element;
		});
	};

	/**
	 * get parent cell from an element
	 * @param {Element} elem
	 * @returns {Flickit.Cell} cell
	 */
	proto.getParentCell = function( elem ) {
		// first check if elem is cell
		var cell = this.getCell( elem );
		if ( cell ) {
			return cell;
		}
		// try to get parent cell elem
		elem = utils.getParent( elem, '.flickity-slider > *' );
		return this.getCell( elem );
	};

	/**
	 * get cells adjacent to a slide
	 * @param {Integer} adjCount - number of adjacent slides
	 * @param {Integer} index - index of slide to start
	 * @returns {Array} cells - array of Flickity.Cells
	 */
	proto.getAdjacentCellElements = function( adjCount, index ) {
		if ( !adjCount ) {
			return this.selectedSlide.getCellElements();
		}
		index = index === undefined ? this.selectedIndex : index;

		var len = this.slides.length;
		if ( 1 + ( adjCount * 2 ) >= len ) {
			return this.getCellElements();
		}

		var cellElems = [];
		for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
			var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
			var slide = this.slides[ slideIndex ];
			if ( slide ) {
				cellElems = cellElems.concat( slide.getCellElements() );
			}
		}
		return cellElems;
	};

// -------------------------- events -------------------------- //

	proto.uiChange = function() {
		this.emitEvent('uiChange');
	};

	proto.childUIPointerDown = function( event ) {
		this.emitEvent( 'childUIPointerDown', [ event ] );
	};

// ----- resize ----- //

	proto.onresize = function() {
		this.watchCSS();
		this.resize();
	};

	utils.debounceMethod( Flickity, 'onresize', 150 );

	proto.resize = function() {
		if ( !this.isActive ) {
			return;
		}
		this.getSize();
		// wrap values
		if ( this.options.wrapAround ) {
			this.x = utils.modulo( this.x, this.slideableWidth );
		}
		this.positionCells();
		this._getWrapShiftCells();
		this.setGallerySize();
		this.emitEvent('resize');
		// update selected index for group slides, instant
		// TODO: position can be lost between groups of various numbers
		var selectedElement = this.selectedElements && this.selectedElements[0];
		this.selectCell( selectedElement, false, true );
	};

// watches the :after property, activates/deactivates
	proto.watchCSS = function() {
		var watchOption = this.options.watchCSS;
		if ( !watchOption ) {
			return;
		}

		var afterContent = getComputedStyle( this.element, ':after' ).content;
		// activate if :after { content: 'flickity' }
		if ( afterContent.indexOf('flickity') != -1 ) {
			this.activate();
		} else {
			this.deactivate();
		}
	};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
	proto.onkeydown = function( event ) {
		// only work if element is in focus
		if ( !this.options.accessibility ||
			( document.activeElement && document.activeElement != this.element ) ) {
			return;
		}

		if ( event.keyCode == 37 ) {
			// go left
			var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
			this.uiChange();
			this[ leftMethod ]();
		} else if ( event.keyCode == 39 ) {
			// go right
			var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
			this.uiChange();
			this[ rightMethod ]();
		}
	};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
	proto.deactivate = function() {
		if ( !this.isActive ) {
			return;
		}
		this.element.classList.remove('flickity-enabled');
		this.element.classList.remove('flickity-rtl');
		// destroy cells
		this.cells.forEach( function( cell ) {
			cell.destroy();
		});
		this.unselectSelectedSlide();
		this.element.removeChild( this.viewport );
		// move child elements back into element
		moveElements( this.slider.children, this.element );
		if ( this.options.accessibility ) {
			this.element.removeAttribute('tabIndex');
			this.element.removeEventListener( 'keydown', this );
		}
		// set flags
		this.isActive = false;
		this.emitEvent('deactivate');
	};

	proto.destroy = function() {
		this.deactivate();
		window.removeEventListener( 'resize', this );
		this.emitEvent('destroy');
		if ( jQuery && this.$element ) {
			jQuery.removeData( this.element, 'flickity' );
		}
		delete this.element.flickityGUID;
		delete instances[ this.guid ];
	};

// -------------------------- prototype -------------------------- //

	utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

	/**
	 * get Flickity instance from element
	 * @param {Element} elem
	 * @returns {Flickity}
	 */
	Flickity.data = function( elem ) {
		elem = utils.getQueryElement( elem );
		var id = elem && elem.flickityGUID;
		return id && instances[ id ];
	};

	utils.htmlInit( Flickity, 'flickity' );

	if ( jQuery && jQuery.bridget ) {
		jQuery.bridget( 'flickity', Flickity );
	}

// set internal jQuery, for Webpack + jQuery v3, #478
	Flickity.setJQuery = function( jq ) {
		jQuery = jq;
	};

	Flickity.Cell = Cell;

	return Flickity;

}));

/*!
 * Unipointer v2.2.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */ /*global define, module, require */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'unipointer/unipointer',[
			'ev-emitter/ev-emitter'
		], function( EvEmitter ) {
			return factory( window, EvEmitter );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('ev-emitter')
		);
	} else {
		// browser global
		window.Unipointer = factory(
			window,
			window.EvEmitter
		);
	}

}( window, function factory( window, EvEmitter ) {



	function noop() {}

	function Unipointer() {}

// inherit EvEmitter
	var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

	proto.bindStartEvent = function( elem ) {
		this._bindStartEvent( elem, true );
	};

	proto.unbindStartEvent = function( elem ) {
		this._bindStartEvent( elem, false );
	};

	/**
	 * works as unbinder, as you can ._bindStart( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindStartEvent = function( elem, isBind ) {
		// munge isBind, default to true
		isBind = isBind === undefined ? true : !!isBind;
		var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

		if ( window.PointerEvent ) {
			// Pointer Events. Chrome 55, IE11, Edge 14
			elem[ bindMethod ]( 'pointerdown', this );
		} else {
			// listen for both, for devices like Chrome Pixel
			elem[ bindMethod ]( 'mousedown', this );
			elem[ bindMethod ]( 'touchstart', this );
		}
	};

// trigger handler methods for events
	proto.handleEvent = function( event ) {
		var method = 'on' + event.type;
		if ( this[ method ] ) {
			this[ method ]( event );
		}
	};

// returns the touch that we're keeping track of
	proto.getTouch = function( touches ) {
		for ( var i=0; i < touches.length; i++ ) {
			var touch = touches[i];
			if ( touch.identifier == this.pointerIdentifier ) {
				return touch;
			}
		}
	};

// ----- start event ----- //

	proto.onmousedown = function( event ) {
		// dismiss clicks from right or middle buttons
		var button = event.button;
		if ( button && ( button !== 0 && button !== 1 ) ) {
			return;
		}
		this._pointerDown( event, event );
	};

	proto.ontouchstart = function( event ) {
		this._pointerDown( event, event.changedTouches[0] );
	};

	proto.onpointerdown = function( event ) {
		this._pointerDown( event, event );
	};

	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto._pointerDown = function( event, pointer ) {
		// dismiss other pointers
		if ( this.isPointerDown ) {
			return;
		}

		this.isPointerDown = true;
		// save pointer identifier to match up touch events
		this.pointerIdentifier = pointer.pointerId !== undefined ?
			// pointerId for pointer events, touch.indentifier for touch events
			pointer.pointerId : pointer.identifier;

		this.pointerDown( event, pointer );
	};

	proto.pointerDown = function( event, pointer ) {
		this._bindPostStartEvents( event );
		this.emitEvent( 'pointerDown', [ event, pointer ] );
	};

// hash of events to be bound after start event
	var postStartEvents = {
		mousedown: [ 'mousemove', 'mouseup' ],
		touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
		pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	};

	proto._bindPostStartEvents = function( event ) {
		if ( !event ) {
			return;
		}
		// get proper events to match start event
		var events = postStartEvents[ event.type ];
		// bind events to node
		events.forEach( function( eventName ) {
			window.addEventListener( eventName, this );
		}, this );
		// save these arguments
		this._boundPointerEvents = events;
	};

	proto._unbindPostStartEvents = function() {
		// check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
		if ( !this._boundPointerEvents ) {
			return;
		}
		this._boundPointerEvents.forEach( function( eventName ) {
			window.removeEventListener( eventName, this );
		}, this );

		delete this._boundPointerEvents;
	};

// ----- move event ----- //

	proto.onmousemove = function( event ) {
		this._pointerMove( event, event );
	};

	proto.onpointermove = function( event ) {
		if ( event.pointerId == this.pointerIdentifier ) {
			this._pointerMove( event, event );
		}
	};

	proto.ontouchmove = function( event ) {
		var touch = this.getTouch( event.changedTouches );
		if ( touch ) {
			this._pointerMove( event, touch );
		}
	};

	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerMove = function( event, pointer ) {
		this.pointerMove( event, pointer );
	};

// public
	proto.pointerMove = function( event, pointer ) {
		this.emitEvent( 'pointerMove', [ event, pointer ] );
	};

// ----- end event ----- //


	proto.onmouseup = function( event ) {
		this._pointerUp( event, event );
	};

	proto.onpointerup = function( event ) {
		if ( event.pointerId == this.pointerIdentifier ) {
			this._pointerUp( event, event );
		}
	};

	proto.ontouchend = function( event ) {
		var touch = this.getTouch( event.changedTouches );
		if ( touch ) {
			this._pointerUp( event, touch );
		}
	};

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerUp = function( event, pointer ) {
		this._pointerDone();
		this.pointerUp( event, pointer );
	};

// public
	proto.pointerUp = function( event, pointer ) {
		this.emitEvent( 'pointerUp', [ event, pointer ] );
	};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
	proto._pointerDone = function() {
		// reset properties
		this.isPointerDown = false;
		delete this.pointerIdentifier;
		// remove events
		this._unbindPostStartEvents();
		this.pointerDone();
	};

	proto.pointerDone = noop;

// ----- pointer cancel ----- //

	proto.onpointercancel = function( event ) {
		if ( event.pointerId == this.pointerIdentifier ) {
			this._pointerCancel( event, event );
		}
	};

	proto.ontouchcancel = function( event ) {
		var touch = this.getTouch( event.changedTouches );
		if ( touch ) {
			this._pointerCancel( event, touch );
		}
	};

	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerCancel = function( event, pointer ) {
		this._pointerDone();
		this.pointerCancel( event, pointer );
	};

// public
	proto.pointerCancel = function( event, pointer ) {
		this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};

// -----  ----- //

// utility function for getting x/y coords from event
	Unipointer.getPointerPoint = function( pointer ) {
		return {
			x: pointer.pageX,
			y: pointer.pageY
		};
	};

// -----  ----- //

	return Unipointer;

}));

/*!
 * Unidragger v2.2.3
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
	// universal module definition
	/*jshint strict: false */ /*globals define, module, require */

	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'unidragger/unidragger',[
			'unipointer/unipointer'
		], function( Unipointer ) {
			return factory( window, Unipointer );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('unipointer')
		);
	} else {
		// browser global
		window.Unidragger = factory(
			window,
			window.Unipointer
		);
	}

}( window, function factory( window, Unipointer ) {



// -------------------------- Unidragger -------------------------- //

	function Unidragger() {}

// inherit Unipointer & EvEmitter
	var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

	proto.bindHandles = function() {
		this._bindHandles( true );
	};

	proto.unbindHandles = function() {
		this._bindHandles( false );
	};

	/**
	 * works as unbinder, as you can .bindHandles( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindHandles = function( isBind ) {
		// munge isBind, default to true
		isBind = isBind === undefined ? true : !!isBind;
		// bind each handle
		var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
		for ( var i=0; i < this.handles.length; i++ ) {
			var handle = this.handles[i];
			this._bindStartEvent( handle, isBind );
			handle[ bindMethod ]( 'click', this );
			// touch-action: none to override browser touch gestures
			// metafizzy/flickity#540
			if ( window.PointerEvent ) {
				handle.style.touchAction = isBind ? this._touchActionValue : '';
			}
		}
	};

// prototype so it can be overwriteable by Flickity
	proto._touchActionValue = 'none';

// ----- start event ----- //

	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerDown = function( event, pointer ) {
		// dismiss range sliders
		if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
			// reset pointerDown logic
			this.isPointerDown = false;
			delete this.pointerIdentifier;
			return;
		}

		this._dragPointerDown( event, pointer );
		// kludge to blur focused inputs in dragger
		var focused = document.activeElement;
		if ( focused && focused.blur ) {
			focused.blur();
		}
		// bind move and end events
		this._bindPostStartEvents( event );
		this.emitEvent( 'pointerDown', [ event, pointer ] );
	};

// base pointer down logic
	proto._dragPointerDown = function( event, pointer ) {
		// track to see when dragging starts
		this.pointerDownPoint = Unipointer.getPointerPoint( pointer );

		var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
		if ( canPreventDefault ) {
			event.preventDefault();
		}
	};

// overwriteable method so Flickity can prevent for scrolling
	proto.canPreventDefaultOnPointerDown = function( event ) {
		// prevent default, unless touchstart or <select>
		return event.target.nodeName != 'SELECT';
	};

// ----- move event ----- //

	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerMove = function( event, pointer ) {
		var moveVector = this._dragPointerMove( event, pointer );
		this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
		this._dragMove( event, pointer, moveVector );
	};

// base pointer move logic
	proto._dragPointerMove = function( event, pointer ) {
		var movePoint = Unipointer.getPointerPoint( pointer );
		var moveVector = {
			x: movePoint.x - this.pointerDownPoint.x,
			y: movePoint.y - this.pointerDownPoint.y
		};
		// start drag if pointer has moved far enough to start drag
		if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
			this._dragStart( event, pointer );
		}
		return moveVector;
	};

// condition if pointer has moved far enough to start drag
	proto.hasDragStarted = function( moveVector ) {
		return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};


// ----- end event ----- //

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
		this.emitEvent( 'pointerUp', [ event, pointer ] );
		this._dragPointerUp( event, pointer );
	};

	proto._dragPointerUp = function( event, pointer ) {
		if ( this.isDragging ) {
			this._dragEnd( event, pointer );
		} else {
			// pointer didn't move enough for drag to start
			this._staticClick( event, pointer );
		}
	};

// -------------------------- drag -------------------------- //

// dragStart
	proto._dragStart = function( event, pointer ) {
		this.isDragging = true;
		this.dragStartPoint = Unipointer.getPointerPoint( pointer );
		// prevent clicks
		this.isPreventingClicks = true;

		this.dragStart( event, pointer );
	};

	proto.dragStart = function( event, pointer ) {
		this.emitEvent( 'dragStart', [ event, pointer ] );
	};

// dragMove
	proto._dragMove = function( event, pointer, moveVector ) {
		// do not drag if not dragging yet
		if ( !this.isDragging ) {
			return;
		}

		this.dragMove( event, pointer, moveVector );
	};

	proto.dragMove = function( event, pointer, moveVector ) {
		event.preventDefault();
		this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};

// dragEnd
	proto._dragEnd = function( event, pointer ) {
		// set flags
		this.isDragging = false;
		// re-enable clicking async
		setTimeout( function() {
			delete this.isPreventingClicks;
		}.bind( this ) );

		this.dragEnd( event, pointer );
	};

	proto.dragEnd = function( event, pointer ) {
		this.emitEvent( 'dragEnd', [ event, pointer ] );
	};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
	proto.onclick = function( event ) {
		if ( this.isPreventingClicks ) {
			event.preventDefault();
		}
	};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
	proto._staticClick = function( event, pointer ) {
		// ignore emulated mouse up clicks
		if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
			return;
		}

		// allow click in <input>s and <textarea>s
		var nodeName = event.target.nodeName;
		if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
			event.target.focus();
		}
		this.staticClick( event, pointer );

		// set flag for emulated clicks 300ms after touchend
		if ( event.type != 'mouseup' ) {
			this.isIgnoringMouseUp = true;
			// reset flag after 300ms
			setTimeout( function() {
				delete this.isIgnoringMouseUp;
			}.bind( this ), 400 );
		}
	};

	proto.staticClick = function( event, pointer ) {
		this.emitEvent( 'staticClick', [ event, pointer ] );
	};

// ----- utils ----- //

	Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

	return Unidragger;

}));

// drag
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/drag',[
			'./flickity',
			'unidragger/unidragger',
			'fizzy-ui-utils/utils'
		], function( Flickity, Unidragger, utils ) {
			return factory( window, Flickity, Unidragger, utils );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('./flickity'),
			require('unidragger'),
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		window.Flickity = factory(
			window,
			window.Flickity,
			window.Unidragger,
			window.fizzyUIUtils
		);
	}

}( window, function factory( window, Flickity, Unidragger, utils ) {



// ----- defaults ----- //

	utils.extend( Flickity.defaults, {
		draggable: true,
		dragThreshold: 3,
	});

// ----- create ----- //

	Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

	var proto = Flickity.prototype;
	utils.extend( proto, Unidragger.prototype );
	proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

	var isTouch = 'createTouch' in document;
	var isTouchmoveScrollCanceled = false;

	proto._createDrag = function() {
		this.on( 'activate', this.bindDrag );
		this.on( 'uiChange', this._uiChangeDrag );
		this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
		this.on( 'deactivate', this.unbindDrag );
		// HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
		// #457, RubaXa/Sortable#973
		if ( isTouch && !isTouchmoveScrollCanceled ) {
			window.addEventListener( 'touchmove', function() {});
			isTouchmoveScrollCanceled = true;
		}
	};

	proto.bindDrag = function() {
		if ( !this.options.draggable || this.isDragBound ) {
			return;
		}
		this.element.classList.add('is-draggable');
		this.handles = [ this.viewport ];
		this.bindHandles();
		this.isDragBound = true;
	};

	proto.unbindDrag = function() {
		if ( !this.isDragBound ) {
			return;
		}
		this.element.classList.remove('is-draggable');
		this.unbindHandles();
		delete this.isDragBound;
	};

	proto._uiChangeDrag = function() {
		delete this.isFreeScrolling;
	};

	proto._childUIPointerDownDrag = function( event ) {
		event.preventDefault();
		this.pointerDownFocus( event );
	};

// -------------------------- pointer events -------------------------- //

// nodes that have text fields
	var cursorNodes = {
		TEXTAREA: true,
		INPUT: true,
		OPTION: true,
	};

// input types that do not have text fields
	var clickTypes = {
		radio: true,
		checkbox: true,
		button: true,
		submit: true,
		image: true,
		file: true,
	};

	proto.pointerDown = function( event, pointer ) {
		// dismiss inputs with text fields. #403, #404
		var isCursorInput = cursorNodes[ event.target.nodeName ] &&
			!clickTypes[ event.target.type ];
		if ( isCursorInput ) {
			// reset pointerDown logic
			this.isPointerDown = false;
			delete this.pointerIdentifier;
			return;
		}

		this._dragPointerDown( event, pointer );

		// kludge to blur focused inputs in dragger
		var focused = document.activeElement;
		if ( focused && focused.blur && focused != this.element &&
			// do not blur body for IE9 & 10, #117
			focused != document.body ) {
			focused.blur();
		}
		this.pointerDownFocus( event );
		// stop if it was moving
		this.dragX = this.x;
		this.viewport.classList.add('is-pointer-down');
		// bind move and end events
		this._bindPostStartEvents( event );
		// track scrolling
		this.pointerDownScroll = getScrollPosition();
		window.addEventListener( 'scroll', this );

		this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};

	proto.pointerDownFocus = function( event ) {
		// focus element, if not touch, and its not an input or select
		var canPointerDown = getCanPointerDown( event );
		if ( !this.options.accessibility || canPointerDown ) {
			return;
		}
		var prevScrollY = window.pageYOffset;
		this.element.focus();
		// hack to fix scroll jump after focus, #76
		if ( window.pageYOffset != prevScrollY ) {
			window.scrollTo( window.pageXOffset, prevScrollY );
		}
	};

	var focusNodes = {
		INPUT: true,
		SELECT: true,
	};

	function getCanPointerDown( event ) {
		var isTouchStart = event.type == 'touchstart';
		var isTouchPointer = event.pointerType == 'touch';
		var isFocusNode = focusNodes[ event.target.nodeName ];
		return isTouchStart || isTouchPointer || isFocusNode;
	}

	proto.canPreventDefaultOnPointerDown = function( event ) {
		// prevent default, unless touchstart or input
		var canPointerDown = getCanPointerDown( event );
		return !canPointerDown;
	};

// ----- move ----- //

	proto.hasDragStarted = function( moveVector ) {
		return Math.abs( moveVector.x ) > this.options.dragThreshold;
	};

// ----- up ----- //

	proto.pointerUp = function( event, pointer ) {
		delete this.isTouchScrolling;
		this.viewport.classList.remove('is-pointer-down');
		this.dispatchEvent( 'pointerUp', event, [ pointer ] );
		this._dragPointerUp( event, pointer );
	};

	proto.pointerDone = function() {
		window.removeEventListener( 'scroll', this );
		delete this.pointerDownScroll;
	};

// -------------------------- dragging -------------------------- //

	proto.dragStart = function( event, pointer ) {
		this.dragStartPosition = this.x;
		this.startAnimation();
		window.removeEventListener( 'scroll', this );
		this.dispatchEvent( 'dragStart', event, [ pointer ] );
	};

	proto.pointerMove = function( event, pointer ) {
		var moveVector = this._dragPointerMove( event, pointer );
		this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
		this._dragMove( event, pointer, moveVector );
	};

	proto.dragMove = function( event, pointer, moveVector ) {
		event.preventDefault();

		this.previousDragX = this.dragX;
		// reverse if right-to-left
		var direction = this.options.rightToLeft ? -1 : 1;
		var dragX = this.dragStartPosition + moveVector.x * direction;

		if ( !this.options.wrapAround && this.slides.length ) {
			// slow drag
			var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
			dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
			var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
			dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
		}

		this.dragX = dragX;

		this.dragMoveTime = new Date();
		this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};

	proto.dragEnd = function( event, pointer ) {
		if ( this.options.freeScroll ) {
			this.isFreeScrolling = true;
		}
		// set selectedIndex based on where flick will end up
		var index = this.dragEndRestingSelect();

		if ( this.options.freeScroll && !this.options.wrapAround ) {
			// if free-scroll & not wrap around
			// do not free-scroll if going outside of bounding slides
			// so bounding slides can attract slider, and keep it in bounds
			var restingX = this.getRestingPosition();
			this.isFreeScrolling = -restingX > this.slides[0].target &&
				-restingX < this.getLastSlide().target;
		} else if ( !this.options.freeScroll && index == this.selectedIndex ) {
			// boost selection if selected index has not changed
			index += this.dragEndBoostSelect();
		}
		delete this.previousDragX;
		// apply selection
		// TODO refactor this, selecting here feels weird
		// HACK, set flag so dragging stays in correct direction
		this.isDragSelect = this.options.wrapAround;
		this.select( index );
		delete this.isDragSelect;
		this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};

	proto.dragEndRestingSelect = function() {
		var restingX = this.getRestingPosition();
		// how far away from selected slide
		var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
		// get closet resting going up and going down
		var positiveResting = this._getClosestResting( restingX, distance, 1 );
		var negativeResting = this._getClosestResting( restingX, distance, -1 );
		// use closer resting for wrap-around
		var index = positiveResting.distance < negativeResting.distance ?
			positiveResting.index : negativeResting.index;
		return index;
	};

	/**
	 * given resting X and distance to selected cell
	 * get the distance and index of the closest cell
	 * @param {Number} restingX - estimated post-flick resting position
	 * @param {Number} distance - distance to selected cell
	 * @param {Integer} increment - +1 or -1, going up or down
	 * @returns {Object} - { distance: {Number}, index: {Integer} }
	 */
	proto._getClosestResting = function( restingX, distance, increment ) {
		var index = this.selectedIndex;
		var minDistance = Infinity;
		var condition = this.options.contain && !this.options.wrapAround ?
			// if contain, keep going if distance is equal to minDistance
			function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
		while ( condition( distance, minDistance ) ) {
			// measure distance to next cell
			index += increment;
			minDistance = distance;
			distance = this.getSlideDistance( -restingX, index );
			if ( distance === null ) {
				break;
			}
			distance = Math.abs( distance );
		}
		return {
			distance: minDistance,
			// selected was previous index
			index: index - increment
		};
	};

	/**
	 * measure distance between x and a slide target
	 * @param {Number} x
	 * @param {Integer} index - slide index
	 */
	proto.getSlideDistance = function( x, index ) {
		var len = this.slides.length;
		// wrap around if at least 2 slides
		var isWrapAround = this.options.wrapAround && len > 1;
		var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
		var slide = this.slides[ slideIndex ];
		if ( !slide ) {
			return null;
		}
		// add distance for wrap-around slides
		var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
		return x - ( slide.target + wrap );
	};

	proto.dragEndBoostSelect = function() {
		// do not boost if no previousDragX or dragMoveTime
		if ( this.previousDragX === undefined || !this.dragMoveTime ||
			// or if drag was held for 100 ms
			new Date() - this.dragMoveTime > 100 ) {
			return 0;
		}

		var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
		var delta = this.previousDragX - this.dragX;
		if ( distance > 0 && delta > 0 ) {
			// boost to next if moving towards the right, and positive velocity
			return 1;
		} else if ( distance < 0 && delta < 0 ) {
			// boost to previous if moving towards the left, and negative velocity
			return -1;
		}
		return 0;
	};

// ----- staticClick ----- //

	proto.staticClick = function( event, pointer ) {
		// get clickedCell, if cell was clicked
		var clickedCell = this.getParentCell( event.target );
		var cellElem = clickedCell && clickedCell.element;
		var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
		this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
	};

// ----- scroll ----- //

	proto.onscroll = function() {
		var scroll = getScrollPosition();
		var scrollMoveX = this.pointerDownScroll.x - scroll.x;
		var scrollMoveY = this.pointerDownScroll.y - scroll.y;
		// cancel click/tap if scroll is too much
		if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
			this._pointerDone();
		}
	};

// ----- utils ----- //

	function getScrollPosition() {
		return {
			x: window.pageXOffset,
			y: window.pageYOffset
		};
	}

// -----  ----- //

	return Flickity;

}));

/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
	// universal module definition
	/*jshint strict: false*/ /*globals define, module, require */

	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'tap-listener/tap-listener',[
			'unipointer/unipointer'
		], function( Unipointer ) {
			return factory( window, Unipointer );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('unipointer')
		);
	} else {
		// browser global
		window.TapListener = factory(
			window,
			window.Unipointer
		);
	}

}( window, function factory( window, Unipointer ) {



// --------------------------  TapListener -------------------------- //

	function TapListener( elem ) {
		this.bindTap( elem );
	}

// inherit Unipointer & EventEmitter
	var proto = TapListener.prototype = Object.create( Unipointer.prototype );

	/**
	 * bind tap event to element
	 * @param {Element} elem
	 */
	proto.bindTap = function( elem ) {
		if ( !elem ) {
			return;
		}
		this.unbindTap();
		this.tapElement = elem;
		this._bindStartEvent( elem, true );
	};

	proto.unbindTap = function() {
		if ( !this.tapElement ) {
			return;
		}
		this._bindStartEvent( this.tapElement, true );
		delete this.tapElement;
	};

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
		// ignore emulated mouse up clicks
		if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
			return;
		}

		var pointerPoint = Unipointer.getPointerPoint( pointer );
		var boundingRect = this.tapElement.getBoundingClientRect();
		var scrollX = window.pageXOffset;
		var scrollY = window.pageYOffset;
		// calculate if pointer is inside tapElement
		var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
			pointerPoint.x <= boundingRect.right + scrollX &&
			pointerPoint.y >= boundingRect.top + scrollY &&
			pointerPoint.y <= boundingRect.bottom + scrollY;
		// trigger callback if pointer is inside element
		if ( isInside ) {
			this.emitEvent( 'tap', [ event, pointer ] );
		}

		// set flag for emulated clicks 300ms after touchend
		if ( event.type != 'mouseup' ) {
			this.isIgnoringMouseUp = true;
			// reset flag after 300ms
			var _this = this;
			setTimeout( function() {
				delete _this.isIgnoringMouseUp;
			}, 400 );
		}
	};

	proto.destroy = function() {
		this.pointerDone();
		this.unbindTap();
	};

// -----  ----- //

	return TapListener;

}));

// prev/next buttons
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/prev-next-button',[
			'./flickity',
			'tap-listener/tap-listener',
			'fizzy-ui-utils/utils'
		], function( Flickity, TapListener, utils ) {
			return factory( window, Flickity, TapListener, utils );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('./flickity'),
			require('tap-listener'),
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		factory(
			window,
			window.Flickity,
			window.TapListener,
			window.fizzyUIUtils
		);
	}

}( window, function factory( window, Flickity, TapListener, utils ) {
	'use strict';

	var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

	function PrevNextButton( direction, parent ) {
		this.direction = direction;
		this.parent = parent;
		this._create();
	}

	PrevNextButton.prototype = new TapListener();

	PrevNextButton.prototype._create = function() {
		// properties
		this.isEnabled = true;
		this.isPrevious = this.direction == -1;
		var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
		this.isLeft = this.direction == leftDirection;

		var element = this.element = document.createElement('button');
		element.className = 'flickity-prev-next-button';
		element.className += this.isPrevious ? ' previous' : ' next';
		// prevent button from submitting form http://stackoverflow.com/a/10836076/182183
		element.setAttribute( 'type', 'button' );
		// init as disabled
		this.disable();

		element.setAttribute( 'aria-label', this.isPrevious ? 'previous' : 'next' );

		// create arrow
		var svg = this.createSVG();
		element.appendChild( svg );
		// events
		this.on( 'tap', this.onTap );
		this.parent.on( 'select', this.update.bind( this ) );
		this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};

	PrevNextButton.prototype.activate = function() {
		this.bindTap( this.element );
		// click events from keyboard
		this.element.addEventListener( 'click', this );
		// add to DOM
		this.parent.element.appendChild( this.element );
	};

	PrevNextButton.prototype.deactivate = function() {
		// remove from DOM
		this.parent.element.removeChild( this.element );
		// do regular TapListener destroy
		TapListener.prototype.destroy.call( this );
		// click events from keyboard
		this.element.removeEventListener( 'click', this );
	};

	PrevNextButton.prototype.createSVG = function() {
		var svg = document.createElementNS( svgURI, 'svg');
		svg.setAttribute( 'viewBox', '0 0 100 100' );
		var path = document.createElementNS( svgURI, 'path');
		var pathMovements = getArrowMovements( this.parent.options.arrowShape );
		path.setAttribute( 'd', pathMovements );
		path.setAttribute( 'class', 'arrow' );
		// rotate arrow
		if ( !this.isLeft ) {
			path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
		}
		svg.appendChild( path );
		return svg;
	};

// get SVG path movmement
	function getArrowMovements( shape ) {
		// use shape as movement if string
		if ( typeof shape == 'string' ) {
			return shape;
		}
		// create movement string
		return 'M ' + shape.x0 + ',50' +
			' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
			' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
			' L ' + shape.x3 + ',50 ' +
			' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
			' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
			' Z';
	}

	PrevNextButton.prototype.onTap = function() {
		if ( !this.isEnabled ) {
			return;
		}
		this.parent.uiChange();
		var method = this.isPrevious ? 'previous' : 'next';
		this.parent[ method ]();
	};

	PrevNextButton.prototype.handleEvent = utils.handleEvent;

	PrevNextButton.prototype.onclick = function() {
		// only allow clicks from keyboard
		var focused = document.activeElement;
		if ( focused && focused == this.element ) {
			this.onTap();
		}
	};

// -----  ----- //

	PrevNextButton.prototype.enable = function() {
		if ( this.isEnabled ) {
			return;
		}
		this.element.disabled = false;
		this.isEnabled = true;
	};

	PrevNextButton.prototype.disable = function() {
		if ( !this.isEnabled ) {
			return;
		}
		this.element.disabled = true;
		this.isEnabled = false;
	};

	PrevNextButton.prototype.update = function() {
		// index of first or last slide, if previous or next
		var slides = this.parent.slides;
		// enable is wrapAround and at least 2 slides
		if ( this.parent.options.wrapAround && slides.length > 1 ) {
			this.enable();
			return;
		}
		var lastIndex = slides.length ? slides.length - 1 : 0;
		var boundIndex = this.isPrevious ? 0 : lastIndex;
		var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
		this[ method ]();
	};

	PrevNextButton.prototype.destroy = function() {
		this.deactivate();
	};

// -------------------------- Flickity prototype -------------------------- //

	utils.extend( Flickity.defaults, {
		prevNextButtons: true,
		arrowShape: {
			x0: 10,
			x1: 60, y1: 50,
			x2: 70, y2: 40,
			x3: 30
		}
	});

	Flickity.createMethods.push('_createPrevNextButtons');
	var proto = Flickity.prototype;

	proto._createPrevNextButtons = function() {
		if ( !this.options.prevNextButtons ) {
			return;
		}

		this.prevButton = new PrevNextButton( -1, this );
		this.nextButton = new PrevNextButton( 1, this );

		this.on( 'activate', this.activatePrevNextButtons );
	};

	proto.activatePrevNextButtons = function() {
		this.prevButton.activate();
		this.nextButton.activate();
		this.on( 'deactivate', this.deactivatePrevNextButtons );
	};

	proto.deactivatePrevNextButtons = function() {
		this.prevButton.deactivate();
		this.nextButton.deactivate();
		this.off( 'deactivate', this.deactivatePrevNextButtons );
	};

// --------------------------  -------------------------- //

	Flickity.PrevNextButton = PrevNextButton;

	return Flickity;

}));

// page dots
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/page-dots',[
			'./flickity',
			'tap-listener/tap-listener',
			'fizzy-ui-utils/utils'
		], function( Flickity, TapListener, utils ) {
			return factory( window, Flickity, TapListener, utils );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('./flickity'),
			require('tap-listener'),
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		factory(
			window,
			window.Flickity,
			window.TapListener,
			window.fizzyUIUtils
		);
	}

}( window, function factory( window, Flickity, TapListener, utils ) {

// -------------------------- PageDots -------------------------- //



	function PageDots( parent ) {
		this.parent = parent;
		this._create();
	}

	PageDots.prototype = new TapListener();

	PageDots.prototype._create = function() {
		// create holder element
		this.holder = document.createElement('ol');
		this.holder.className = 'flickity-page-dots';
		// create dots, array of elements
		this.dots = [];
		// events
		this.on( 'tap', this.onTap );
		this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};

	PageDots.prototype.activate = function() {
		this.setDots();
		this.bindTap( this.holder );
		// add to DOM
		this.parent.element.appendChild( this.holder );
	};

	PageDots.prototype.deactivate = function() {
		// remove from DOM
		this.parent.element.removeChild( this.holder );
		TapListener.prototype.destroy.call( this );
	};

	PageDots.prototype.setDots = function() {
		// get difference between number of slides and number of dots
		var delta = this.parent.slides.length - this.dots.length;
		if ( delta > 0 ) {
			this.addDots( delta );
		} else if ( delta < 0 ) {
			this.removeDots( -delta );
		}
	};

	PageDots.prototype.addDots = function( count ) {
		var fragment = document.createDocumentFragment();
		var newDots = [];
		while ( count ) {
			var dot = document.createElement('li');
			dot.className = 'dot';
			fragment.appendChild( dot );
			newDots.push( dot );
			count--;
		}
		this.holder.appendChild( fragment );
		this.dots = this.dots.concat( newDots );
	};

	PageDots.prototype.removeDots = function( count ) {
		// remove from this.dots collection
		var removeDots = this.dots.splice( this.dots.length - count, count );
		// remove from DOM
		removeDots.forEach( function( dot ) {
			this.holder.removeChild( dot );
		}, this );
	};

	PageDots.prototype.updateSelected = function() {
		// remove selected class on previous
		if ( this.selectedDot ) {
			this.selectedDot.className = 'dot';
		}
		// don't proceed if no dots
		if ( !this.dots.length ) {
			return;
		}
		this.selectedDot = this.dots[ this.parent.selectedIndex ];
		this.selectedDot.className = 'dot is-selected';
	};

	PageDots.prototype.onTap = function( event ) {
		var target = event.target;
		// only care about dot clicks
		if ( target.nodeName != 'LI' ) {
			return;
		}

		this.parent.uiChange();
		var index = this.dots.indexOf( target );
		this.parent.select( index );
	};

	PageDots.prototype.destroy = function() {
		this.deactivate();
	};

	Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

	utils.extend( Flickity.defaults, {
		pageDots: true
	});

	Flickity.createMethods.push('_createPageDots');

	var proto = Flickity.prototype;

	proto._createPageDots = function() {
		if ( !this.options.pageDots ) {
			return;
		}
		this.pageDots = new PageDots( this );
		// events
		this.on( 'activate', this.activatePageDots );
		this.on( 'select', this.updateSelectedPageDots );
		this.on( 'cellChange', this.updatePageDots );
		this.on( 'resize', this.updatePageDots );
		this.on( 'deactivate', this.deactivatePageDots );
	};

	proto.activatePageDots = function() {
		this.pageDots.activate();
	};

	proto.updateSelectedPageDots = function() {
		this.pageDots.updateSelected();
	};

	proto.updatePageDots = function() {
		this.pageDots.setDots();
	};

	proto.deactivatePageDots = function() {
		this.pageDots.deactivate();
	};

// -----  ----- //

	Flickity.PageDots = PageDots;

	return Flickity;

}));

// player & autoPlay
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/player',[
			'ev-emitter/ev-emitter',
			'fizzy-ui-utils/utils',
			'./flickity'
		], function( EvEmitter, utils, Flickity ) {
			return factory( EvEmitter, utils, Flickity );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			require('ev-emitter'),
			require('fizzy-ui-utils'),
			require('./flickity')
		);
	} else {
		// browser global
		factory(
			window.EvEmitter,
			window.fizzyUIUtils,
			window.Flickity
		);
	}

}( window, function factory( EvEmitter, utils, Flickity ) {



// -------------------------- Page Visibility -------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API

	var hiddenProperty, visibilityEvent;
	if ( 'hidden' in document ) {
		hiddenProperty = 'hidden';
		visibilityEvent = 'visibilitychange';
	} else if ( 'webkitHidden' in document ) {
		hiddenProperty = 'webkitHidden';
		visibilityEvent = 'webkitvisibilitychange';
	}

// -------------------------- Player -------------------------- //

	function Player( parent ) {
		this.parent = parent;
		this.state = 'stopped';
		// visibility change event handler
		if ( visibilityEvent ) {
			this.onVisibilityChange = function() {
				this.visibilityChange();
			}.bind( this );
			this.onVisibilityPlay = function() {
				this.visibilityPlay();
			}.bind( this );
		}
	}

	Player.prototype = Object.create( EvEmitter.prototype );

// start play
	Player.prototype.play = function() {
		if ( this.state == 'playing' ) {
			return;
		}
		// do not play if page is hidden, start playing when page is visible
		var isPageHidden = document[ hiddenProperty ];
		if ( visibilityEvent && isPageHidden ) {
			document.addEventListener( visibilityEvent, this.onVisibilityPlay );
			return;
		}

		this.state = 'playing';
		// listen to visibility change
		if ( visibilityEvent ) {
			document.addEventListener( visibilityEvent, this.onVisibilityChange );
		}
		// start ticking
		this.tick();
	};

	Player.prototype.tick = function() {
		// do not tick if not playing
		if ( this.state != 'playing' ) {
			return;
		}

		var time = this.parent.options.autoPlay;
		// default to 3 seconds
		time = typeof time == 'number' ? time : 3000;
		var _this = this;
		// HACK: reset ticks if stopped and started within interval
		this.clear();
		this.timeout = setTimeout( function() {
			_this.parent.next( true );
			_this.tick();
		}, time );
	};

	Player.prototype.stop = function() {
		this.state = 'stopped';
		this.clear();
		// remove visibility change event
		if ( visibilityEvent ) {
			document.removeEventListener( visibilityEvent, this.onVisibilityChange );
		}
	};

	Player.prototype.clear = function() {
		clearTimeout( this.timeout );
	};

	Player.prototype.pause = function() {
		if ( this.state == 'playing' ) {
			this.state = 'paused';
			this.clear();
		}
	};

	Player.prototype.unpause = function() {
		// re-start play if paused
		if ( this.state == 'paused' ) {
			this.play();
		}
	};

// pause if page visibility is hidden, unpause if visible
	Player.prototype.visibilityChange = function() {
		var isPageHidden = document[ hiddenProperty ];
		this[ isPageHidden ? 'pause' : 'unpause' ]();
	};

	Player.prototype.visibilityPlay = function() {
		this.play();
		document.removeEventListener( visibilityEvent, this.onVisibilityPlay );
	};

// -------------------------- Flickity -------------------------- //

	utils.extend( Flickity.defaults, {
		pauseAutoPlayOnHover: true
	});

	Flickity.createMethods.push('_createPlayer');
	var proto = Flickity.prototype;

	proto._createPlayer = function() {
		this.player = new Player( this );

		this.on( 'activate', this.activatePlayer );
		this.on( 'uiChange', this.stopPlayer );
		this.on( 'pointerDown', this.stopPlayer );
		this.on( 'deactivate', this.deactivatePlayer );
	};

	proto.activatePlayer = function() {
		if ( !this.options.autoPlay ) {
			return;
		}
		this.player.play();
		this.element.addEventListener( 'mouseenter', this );
	};

// Player API, don't hate the ... thanks I know where the door is

	proto.playPlayer = function() {
		this.player.play();
	};

	proto.stopPlayer = function() {
		this.player.stop();
	};

	proto.pausePlayer = function() {
		this.player.pause();
	};

	proto.unpausePlayer = function() {
		this.player.unpause();
	};

	proto.deactivatePlayer = function() {
		this.player.stop();
		this.element.removeEventListener( 'mouseenter', this );
	};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
	proto.onmouseenter = function() {
		if ( !this.options.pauseAutoPlayOnHover ) {
			return;
		}
		this.player.pause();
		this.element.addEventListener( 'mouseleave', this );
	};

// resume auto-play on hover off
	proto.onmouseleave = function() {
		this.player.unpause();
		this.element.removeEventListener( 'mouseleave', this );
	};

// -----  ----- //

	Flickity.Player = Player;

	return Flickity;

}));

// add, remove cell
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/add-remove-cell',[
			'./flickity',
			'fizzy-ui-utils/utils'
		], function( Flickity, utils ) {
			return factory( window, Flickity, utils );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('./flickity'),
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		factory(
			window,
			window.Flickity,
			window.fizzyUIUtils
		);
	}

}( window, function factory( window, Flickity, utils ) {



// append cells to a document fragment
	function getCellsFragment( cells ) {
		var fragment = document.createDocumentFragment();
		cells.forEach( function( cell ) {
			fragment.appendChild( cell.element );
		});
		return fragment;
	}

// -------------------------- add/remove cell prototype -------------------------- //

	var proto = Flickity.prototype;

	/**
	 * Insert, prepend, or append cells
	 * @param {Element, Array, NodeList} elems
	 * @param {Integer} index
	 */
	proto.insert = function( elems, index ) {
		var cells = this._makeCells( elems );
		if ( !cells || !cells.length ) {
			return;
		}
		var len = this.cells.length;
		// default to append
		index = index === undefined ? len : index;
		// add cells with document fragment
		var fragment = getCellsFragment( cells );
		// append to slider
		var isAppend = index == len;
		if ( isAppend ) {
			this.slider.appendChild( fragment );
		} else {
			var insertCellElement = this.cells[ index ].element;
			this.slider.insertBefore( fragment, insertCellElement );
		}
		// add to this.cells
		if ( index === 0 ) {
			// prepend, add to start
			this.cells = cells.concat( this.cells );
		} else if ( isAppend ) {
			// append, add to end
			this.cells = this.cells.concat( cells );
		} else {
			// insert in this.cells
			var endCells = this.cells.splice( index, len - index );
			this.cells = this.cells.concat( cells ).concat( endCells );
		}

		this._sizeCells( cells );

		var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
		this._cellAddedRemoved( index, selectedIndexDelta );
	};

	proto.append = function( elems ) {
		this.insert( elems, this.cells.length );
	};

	proto.prepend = function( elems ) {
		this.insert( elems, 0 );
	};

	/**
	 * Remove cells
	 * @param {Element, Array, NodeList} elems
	 */
	proto.remove = function( elems ) {
		var cells = this.getCells( elems );
		var selectedIndexDelta = 0;
		var len = cells.length;
		var i, cell;
		// calculate selectedIndexDelta, easier if done in seperate loop
		for ( i=0; i < len; i++ ) {
			cell = cells[i];
			var wasBefore = this.cells.indexOf( cell ) < this.selectedIndex;
			selectedIndexDelta -= wasBefore ? 1 : 0;
		}

		for ( i=0; i < len; i++ ) {
			cell = cells[i];
			cell.remove();
			// remove item from collection
			utils.removeFrom( this.cells, cell );
		}

		if ( cells.length ) {
			// update stuff
			this._cellAddedRemoved( 0, selectedIndexDelta );
		}
	};

// updates when cells are added or removed
	proto._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
		// TODO this math isn't perfect with grouped slides
		selectedIndexDelta = selectedIndexDelta || 0;
		this.selectedIndex += selectedIndexDelta;
		this.selectedIndex = Math.max( 0, Math.min( this.slides.length - 1, this.selectedIndex ) );

		this.cellChange( changedCellIndex, true );
		// backwards compatibility
		this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
	};

	/**
	 * logic to be run after a cell's size changes
	 * @param {Element} elem - cell's element
	 */
	proto.cellSizeChange = function( elem ) {
		var cell = this.getCell( elem );
		if ( !cell ) {
			return;
		}
		cell.getSize();

		var index = this.cells.indexOf( cell );
		this.cellChange( index );
	};

	/**
	 * logic any time a cell is changed: added, removed, or size changed
	 * @param {Integer} changedCellIndex - index of the changed cell, optional
	 */
	proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
		var prevSlideableWidth = this.slideableWidth;
		this._positionCells( changedCellIndex );
		this._getWrapShiftCells();
		this.setGallerySize();
		this.emitEvent( 'cellChange', [ changedCellIndex ] );
		// position slider
		if ( this.options.freeScroll ) {
			// shift x by change in slideableWidth
			// TODO fix position shifts when prepending w/ freeScroll
			var deltaX = prevSlideableWidth - this.slideableWidth;
			this.x += deltaX * this.cellAlign;
			this.positionSlider();
		} else {
			// do not position slider after lazy load
			if ( isPositioningSlider ) {
				this.positionSliderAtSelected();
			}
			this.select( this.selectedIndex );
		}
	};

// -----  ----- //

	return Flickity;

}));

// lazyload
( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/lazyload',[
			'./flickity',
			'fizzy-ui-utils/utils'
		], function( Flickity, utils ) {
			return factory( window, Flickity, utils );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('./flickity'),
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		factory(
			window,
			window.Flickity,
			window.fizzyUIUtils
		);
	}

}( window, function factory( window, Flickity, utils ) {
	'use strict';

	Flickity.createMethods.push('_createLazyload');
	var proto = Flickity.prototype;

	proto._createLazyload = function() {
		this.on( 'select', this.lazyLoad );
	};

	proto.lazyLoad = function() {
		var lazyLoad = this.options.lazyLoad;
		if ( !lazyLoad ) {
			return;
		}
		// get adjacent cells, use lazyLoad option for adjacent count
		var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
		var cellElems = this.getAdjacentCellElements( adjCount );
		// get lazy images in those cells
		var lazyImages = [];
		cellElems.forEach( function( cellElem ) {
			var lazyCellImages = getCellLazyImages( cellElem );
			lazyImages = lazyImages.concat( lazyCellImages );
		});
		// load lazy images
		lazyImages.forEach( function( img ) {
			new LazyLoader( img, this );
		}, this );
	};

	function getCellLazyImages( cellElem ) {
		// check if cell element is lazy image
		if ( cellElem.nodeName == 'IMG' &&
			cellElem.getAttribute('data-flickity-lazyload') ) {
			return [ cellElem ];
		}
		// select lazy images in cell
		var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
		return utils.makeArray( imgs );
	}

// -------------------------- LazyLoader -------------------------- //

	/**
	 * class to handle loading images
	 */
	function LazyLoader( img, flickity ) {
		this.img = img;
		this.flickity = flickity;
		this.load();
	}

	LazyLoader.prototype.handleEvent = utils.handleEvent;

	LazyLoader.prototype.load = function() {
		this.img.addEventListener( 'load', this );
		this.img.addEventListener( 'error', this );
		// load image
		this.img.src = this.img.getAttribute('data-flickity-lazyload');
		// remove attr
		this.img.removeAttribute('data-flickity-lazyload');
	};

	LazyLoader.prototype.onload = function( event ) {
		this.complete( event, 'flickity-lazyloaded' );
	};

	LazyLoader.prototype.onerror = function( event ) {
		this.complete( event, 'flickity-lazyerror' );
	};

	LazyLoader.prototype.complete = function( event, className ) {
		// unbind events
		this.img.removeEventListener( 'load', this );
		this.img.removeEventListener( 'error', this );

		var cell = this.flickity.getParentCell( this.img );
		var cellElem = cell && cell.element;
		this.flickity.cellSizeChange( cellElem );

		this.img.classList.add( className );
		this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
	};

// -----  ----- //

	Flickity.LazyLoader = LazyLoader;

	return Flickity;

}));

/*!
 * Flickity v2.0.10
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2017 Metafizzy
 */

( function( window, factory ) {
	// universal module definition
	/* jshint strict: false */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity/js/index',[
			'./flickity',
			'./drag',
			'./prev-next-button',
			'./page-dots',
			'./player',
			'./add-remove-cell',
			'./lazyload'
		], factory );
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			require('./flickity'),
			require('./drag'),
			require('./prev-next-button'),
			require('./page-dots'),
			require('./player'),
			require('./add-remove-cell'),
			require('./lazyload')
		);
	}

})( window, function factory( Flickity ) {
	/*jshint strict: false*/
	return Flickity;
});

/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
	// universal module definition
	/*jshint strict: false */ /*globals define, module, require */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'flickity-as-nav-for/as-nav-for',[
			'flickity/js/index',
			'fizzy-ui-utils/utils'
		], factory );
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			require('flickity'),
			require('fizzy-ui-utils')
		);
	} else {
		// browser global
		window.Flickity = factory(
			window.Flickity,
			window.fizzyUIUtils
		);
	}

}( window, function factory( Flickity, utils ) {



// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

	Flickity.createMethods.push('_createAsNavFor');

	var proto = Flickity.prototype;

	proto._createAsNavFor = function() {
		this.on( 'activate', this.activateAsNavFor );
		this.on( 'deactivate', this.deactivateAsNavFor );
		this.on( 'destroy', this.destroyAsNavFor );

		var asNavForOption = this.options.asNavFor;
		if ( !asNavForOption ) {
			return;
		}
		// HACK do async, give time for other flickity to be initalized
		var _this = this;
		setTimeout( function initNavCompanion() {
			_this.setNavCompanion( asNavForOption );
		});
	};

	proto.setNavCompanion = function( elem ) {
		elem = utils.getQueryElement( elem );
		var companion = Flickity.data( elem );
		// stop if no companion or companion is self
		if ( !companion || companion == this ) {
			return;
		}

		this.navCompanion = companion;
		// companion select
		var _this = this;
		this.onNavCompanionSelect = function() {
			_this.navCompanionSelect();
		};
		companion.on( 'select', this.onNavCompanionSelect );
		// click
		this.on( 'staticClick', this.onNavStaticClick );

		this.navCompanionSelect( true );
	};

	proto.navCompanionSelect = function( isInstant ) {
		if ( !this.navCompanion ) {
			return;
		}
		// select slide that matches first cell of slide
		var selectedCell = this.navCompanion.selectedCells[0];
		var firstIndex = this.navCompanion.cells.indexOf( selectedCell );
		var lastIndex = firstIndex + this.navCompanion.selectedCells.length - 1;
		var selectIndex = Math.floor( lerp( firstIndex, lastIndex,
			this.navCompanion.cellAlign ) );
		this.selectCell( selectIndex, false, isInstant );
		// set nav selected class
		this.removeNavSelectedElements();
		// stop if companion has more cells than this one
		if ( selectIndex >= this.cells.length ) {
			return;
		}

		var selectedCells = this.cells.slice( firstIndex, lastIndex + 1 );
		this.navSelectedElements = selectedCells.map( function( cell ) {
			return cell.element;
		});
		this.changeNavSelectedClass('add');
	};

	function lerp( a, b, t ) {
		return ( b - a ) * t + a;
	}

	proto.changeNavSelectedClass = function( method ) {
		this.navSelectedElements.forEach( function( navElem ) {
			navElem.classList[ method ]('is-nav-selected');
		});
	};

	proto.activateAsNavFor = function() {
		this.navCompanionSelect( true );
	};

	proto.removeNavSelectedElements = function() {
		if ( !this.navSelectedElements ) {
			return;
		}
		this.changeNavSelectedClass('remove');
		delete this.navSelectedElements;
	};

	proto.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
		if ( typeof cellIndex == 'number' ) {
			this.navCompanion.selectCell( cellIndex );
		}
	};

	proto.deactivateAsNavFor = function() {
		this.removeNavSelectedElements();
	};

	proto.destroyAsNavFor = function() {
		if ( !this.navCompanion ) {
			return;
		}
		this.navCompanion.off( 'select', this.onNavCompanionSelect );
		this.off( 'staticClick', this.onNavStaticClick );
		delete this.navCompanion;
	};

// -----  ----- //

	return Flickity;

}));

/*!
 * imagesLoaded v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
	// universal module definition

	/*global define: false, module: false, require: false */

	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( 'imagesloaded/imagesloaded',[
			'ev-emitter/ev-emitter'
		], function( EvEmitter ) {
			return factory( window, EvEmitter );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('ev-emitter')
		);
	} else {
		// browser global
		window.imagesLoaded = factory(
			window,
			window.EvEmitter
		);
	}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

	function factory( window, EvEmitter ) {



		var $ = window.jQuery;
		var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
		function extend( a, b ) {
			for ( var prop in b ) {
				a[ prop ] = b[ prop ];
			}
			return a;
		}

// turn element or nodeList into an array
		function makeArray( obj ) {
			var ary = [];
			if ( Array.isArray( obj ) ) {
				// use object if already an array
				ary = obj;
			} else if ( typeof obj.length == 'number' ) {
				// convert nodeList to array
				for ( var i=0; i < obj.length; i++ ) {
					ary.push( obj[i] );
				}
			} else {
				// array of single index
				ary.push( obj );
			}
			return ary;
		}

// -------------------------- imagesLoaded -------------------------- //

		/**
		 * @param {Array, Element, NodeList, String} elem
		 * @param {Object or Function} options - if function, use as callback
		 * @param {Function} onAlways - callback function
		 */
		function ImagesLoaded( elem, options, onAlways ) {
			// coerce ImagesLoaded() without new, to be new ImagesLoaded()
			if ( !( this instanceof ImagesLoaded ) ) {
				return new ImagesLoaded( elem, options, onAlways );
			}
			// use elem as selector string
			if ( typeof elem == 'string' ) {
				elem = document.querySelectorAll( elem );
			}

			this.elements = makeArray( elem );
			this.options = extend( {}, this.options );

			if ( typeof options == 'function' ) {
				onAlways = options;
			} else {
				extend( this.options, options );
			}

			if ( onAlways ) {
				this.on( 'always', onAlways );
			}

			this.getImages();

			if ( $ ) {
				// add jQuery Deferred object
				this.jqDeferred = new $.Deferred();
			}

			// HACK check async to allow time to bind listeners
			setTimeout( function() {
				this.check();
			}.bind( this ));
		}

		ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

		ImagesLoaded.prototype.options = {};

		ImagesLoaded.prototype.getImages = function() {
			this.images = [];

			// filter & find items if we have an item selector
			this.elements.forEach( this.addElementImages, this );
		};

		/**
		 * @param {Node} element
		 */
		ImagesLoaded.prototype.addElementImages = function( elem ) {
			// filter siblings
			if ( elem.nodeName == 'IMG' ) {
				this.addImage( elem );
			}
			// get background image on element
			if ( this.options.background === true ) {
				this.addElementBackgroundImages( elem );
			}

			// find children
			// no non-element nodes, #143
			var nodeType = elem.nodeType;
			if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
				return;
			}
			var childImgs = elem.querySelectorAll('img');
			// concat childElems to filterFound array
			for ( var i=0; i < childImgs.length; i++ ) {
				var img = childImgs[i];
				this.addImage( img );
			}

			// get child background images
			if ( typeof this.options.background == 'string' ) {
				var children = elem.querySelectorAll( this.options.background );
				for ( i=0; i < children.length; i++ ) {
					var child = children[i];
					this.addElementBackgroundImages( child );
				}
			}
		};

		var elementNodeTypes = {
			1: true,
			9: true,
			11: true
		};

		ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
			var style = getComputedStyle( elem );
			if ( !style ) {
				// Firefox returns null if in a hidden iframe https://bugzil.la/548397
				return;
			}
			// get url inside url("...")
			var reURL = /url\((['"])?(.*?)\1\)/gi;
			var matches = reURL.exec( style.backgroundImage );
			while ( matches !== null ) {
				var url = matches && matches[2];
				if ( url ) {
					this.addBackground( url, elem );
				}
				matches = reURL.exec( style.backgroundImage );
			}
		};

		/**
		 * @param {Image} img
		 */
		ImagesLoaded.prototype.addImage = function( img ) {
			var loadingImage = new LoadingImage( img );
			this.images.push( loadingImage );
		};

		ImagesLoaded.prototype.addBackground = function( url, elem ) {
			var background = new Background( url, elem );
			this.images.push( background );
		};

		ImagesLoaded.prototype.check = function() {
			var _this = this;
			this.progressedCount = 0;
			this.hasAnyBroken = false;
			// complete if no images
			if ( !this.images.length ) {
				this.complete();
				return;
			}

			function onProgress( image, elem, message ) {
				// HACK - Chrome triggers event before object properties have changed. #83
				setTimeout( function() {
					_this.progress( image, elem, message );
				});
			}

			this.images.forEach( function( loadingImage ) {
				loadingImage.once( 'progress', onProgress );
				loadingImage.check();
			});
		};

		ImagesLoaded.prototype.progress = function( image, elem, message ) {
			this.progressedCount++;
			this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
			// progress event
			this.emitEvent( 'progress', [ this, image, elem ] );
			if ( this.jqDeferred && this.jqDeferred.notify ) {
				this.jqDeferred.notify( this, image );
			}
			// check if completed
			if ( this.progressedCount == this.images.length ) {
				this.complete();
			}

			if ( this.options.debug && console ) {
				console.log( 'progress: ' + message, image, elem );
			}
		};

		ImagesLoaded.prototype.complete = function() {
			var eventName = this.hasAnyBroken ? 'fail' : 'done';
			this.isComplete = true;
			this.emitEvent( eventName, [ this ] );
			this.emitEvent( 'always', [ this ] );
			if ( this.jqDeferred ) {
				var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
				this.jqDeferred[ jqMethod ]( this );
			}
		};

// --------------------------  -------------------------- //

		function LoadingImage( img ) {
			this.img = img;
		}

		LoadingImage.prototype = Object.create( EvEmitter.prototype );

		LoadingImage.prototype.check = function() {
			// If complete is true and browser supports natural sizes,
			// try to check for image status manually.
			var isComplete = this.getIsImageComplete();
			if ( isComplete ) {
				// report based on naturalWidth
				this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
				return;
			}

			// If none of the checks above matched, simulate loading on detached element.
			this.proxyImage = new Image();
			this.proxyImage.addEventListener( 'load', this );
			this.proxyImage.addEventListener( 'error', this );
			// bind to image as well for Firefox. #191
			this.img.addEventListener( 'load', this );
			this.img.addEventListener( 'error', this );
			this.proxyImage.src = this.img.src;
		};

		LoadingImage.prototype.getIsImageComplete = function() {
			return this.img.complete && this.img.naturalWidth !== undefined;
		};

		LoadingImage.prototype.confirm = function( isLoaded, message ) {
			this.isLoaded = isLoaded;
			this.emitEvent( 'progress', [ this, this.img, message ] );
		};

// ----- events ----- //

// trigger specified handler for event type
		LoadingImage.prototype.handleEvent = function( event ) {
			var method = 'on' + event.type;
			if ( this[ method ] ) {
				this[ method ]( event );
			}
		};

		LoadingImage.prototype.onload = function() {
			this.confirm( true, 'onload' );
			this.unbindEvents();
		};

		LoadingImage.prototype.onerror = function() {
			this.confirm( false, 'onerror' );
			this.unbindEvents();
		};

		LoadingImage.prototype.unbindEvents = function() {
			this.proxyImage.removeEventListener( 'load', this );
			this.proxyImage.removeEventListener( 'error', this );
			this.img.removeEventListener( 'load', this );
			this.img.removeEventListener( 'error', this );
		};

// -------------------------- Background -------------------------- //

		function Background( url, element ) {
			this.url = url;
			this.element = element;
			this.img = new Image();
		}

// inherit LoadingImage prototype
		Background.prototype = Object.create( LoadingImage.prototype );

		Background.prototype.check = function() {
			this.img.addEventListener( 'load', this );
			this.img.addEventListener( 'error', this );
			this.img.src = this.url;
			// check if image is already complete
			var isComplete = this.getIsImageComplete();
			if ( isComplete ) {
				this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
				this.unbindEvents();
			}
		};

		Background.prototype.unbindEvents = function() {
			this.img.removeEventListener( 'load', this );
			this.img.removeEventListener( 'error', this );
		};

		Background.prototype.confirm = function( isLoaded, message ) {
			this.isLoaded = isLoaded;
			this.emitEvent( 'progress', [ this, this.element, message ] );
		};

// -------------------------- jQuery -------------------------- //

		ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
			jQuery = jQuery || window.jQuery;
			if ( !jQuery ) {
				return;
			}
			// set local variable
			$ = jQuery;
			// $().imagesLoaded()
			$.fn.imagesLoaded = function( options, callback ) {
				var instance = new ImagesLoaded( this, options, callback );
				return instance.jqDeferred.promise( $(this) );
			};
		};
// try making plugin
		ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

		return ImagesLoaded;

	});

/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
	// universal module definition
	/*jshint strict: false */ /*globals define, module, require */
	if ( typeof define == 'function' && define.amd ) {
		// AMD
		define( [
			'flickity/js/index',
			'imagesloaded/imagesloaded'
		], function( Flickity, imagesLoaded ) {
			return factory( window, Flickity, imagesLoaded );
		});
	} else if ( typeof module == 'object' && module.exports ) {
		// CommonJS
		module.exports = factory(
			window,
			require('flickity'),
			require('imagesloaded')
		);
	} else {
		// browser global
		window.Flickity = factory(
			window,
			window.Flickity,
			window.imagesLoaded
		);
	}

}( window, function factory( window, Flickity, imagesLoaded ) {
	'use strict';

	Flickity.createMethods.push('_createImagesLoaded');

	var proto = Flickity.prototype;

	proto._createImagesLoaded = function() {
		this.on( 'activate', this.imagesLoaded );
	};

	proto.imagesLoaded = function() {
		if ( !this.options.imagesLoaded ) {
			return;
		}
		var _this = this;
		function onImagesLoadedProgress( instance, image ) {
			var cell = _this.getParentCell( image.img );
			_this.cellSizeChange( cell && cell.element );
			if ( !_this.options.freeScroll ) {
				_this.positionSliderAtSelected();
			}
		}
		imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
	};

	return Flickity;

}));

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {
    'use strict';


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
    if ('IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

        // Minimal polyfill for Edge 15's lack of `isIntersecting`
        // See: https://github.com/w3c/IntersectionObserver/issues/211
        if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
            Object.defineProperty(window.IntersectionObserverEntry.prototype,
                'isIntersecting', {
                    get: function () {
                        return this.intersectionRatio > 0;
                    }
                });
        }
        return;
    }


    /**
     * An IntersectionObserver registry. This registry exists to hold a strong
     * reference to IntersectionObserver instances currently observering a target
     * element. Without this registry, instances without another reference may be
     * garbage collected.
     */
    var registry = [];


    /**
     * Creates the global IntersectionObserverEntry constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
     * @param {Object} entry A dictionary of instance properties.
     * @constructor
     */
    function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = entry.rootBounds;
        this.boundingClientRect = entry.boundingClientRect;
        this.intersectionRect = entry.intersectionRect || getEmptyRect();
        this.isIntersecting = !!entry.intersectionRect;

        // Calculates the intersection ratio.
        var targetRect = this.boundingClientRect;
        var targetArea = targetRect.width * targetRect.height;
        var intersectionRect = this.intersectionRect;
        var intersectionArea = intersectionRect.width * intersectionRect.height;

        // Sets intersection ratio.
        if (targetArea) {
            this.intersectionRatio = intersectionArea / targetArea;
        } else {
            // If area is zero and is intersecting, sets to 1, otherwise to 0
            this.intersectionRatio = this.isIntersecting ? 1 : 0;
        }
    }


    /**
     * Creates the global IntersectionObserver constructor.
     * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
     * @param {Function} callback The function to be invoked after intersection
     *     changes have queued. The function is not invoked if the queue has
     *     been emptied by calling the `takeRecords` method.
     * @param {Object=} opt_options Optional configuration options.
     * @constructor
     */
    function IntersectionObserver(callback, opt_options) {

        var options = opt_options || {};

        if (typeof callback != 'function') {
            throw new Error('callback must be a function');
        }

        if (options.root && options.root.nodeType != 1) {
            throw new Error('root must be an Element');
        }

        // Binds and throttles `this._checkForIntersections`.
        this._checkForIntersections = throttle(
            this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

        // Private properties.
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);

        // Public properties.
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function(margin) {
            return margin.value + margin.unit;
        }).join(' ');
    }


    /**
     * The minimum interval within which the document will be checked for
     * intersection changes.
     */
    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


    /**
     * The frequency in which the polyfill polls for intersection changes.
     * this can be updated on a per instance basis and must be set prior to
     * calling `observe` on the first target.
     */
    IntersectionObserver.prototype.POLL_INTERVAL = null;

    /**
     * Use a mutation observer on the root element
     * to detect intersection changes.
     */
    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


    /**
     * Starts observing a target element for intersection changes based on
     * the thresholds values.
     * @param {Element} target The DOM element to observe.
     */
    IntersectionObserver.prototype.observe = function(target) {
        var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
            return item.element == target;
        });

        if (isTargetAlreadyObserved) {
            return;
        }

        if (!(target && target.nodeType == 1)) {
            throw new Error('target must be an Element');
        }

        this._registerInstance();
        this._observationTargets.push({element: target, entry: null});
        this._monitorIntersections();
        this._checkForIntersections();
    };


    /**
     * Stops observing a target element for intersection changes.
     * @param {Element} target The DOM element to observe.
     */
    IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets =
            this._observationTargets.filter(function(item) {

                return item.element != target;
            });
        if (!this._observationTargets.length) {
            this._unmonitorIntersections();
            this._unregisterInstance();
        }
    };


    /**
     * Stops observing all target elements for intersection changes.
     */
    IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorIntersections();
        this._unregisterInstance();
    };


    /**
     * Returns any queue entries that have not yet been reported to the
     * callback and clears the queue. This can be used in conjunction with the
     * callback to obtain the absolute most up-to-date intersection information.
     * @return {Array} The currently queued entries.
     */
    IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records;
    };


    /**
     * Accepts the threshold value from the user configuration object and
     * returns a sorted array of unique threshold values. If a value is not
     * between 0 and 1 and error is thrown.
     * @private
     * @param {Array|number=} opt_threshold An optional threshold value or
     *     a list of threshold values, defaulting to [0].
     * @return {Array} A sorted list of unique and valid threshold values.
     */
    IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [0];
        if (!Array.isArray(threshold)) threshold = [threshold];

        return threshold.sort().filter(function(t, i, a) {
            if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
                throw new Error('threshold must be a number between 0 and 1 inclusively');
            }
            return t !== a[i - 1];
        });
    };


    /**
     * Accepts the rootMargin value from the user configuration object
     * and returns an array of the four margin values as an object containing
     * the value and unit properties. If any of the values are not properly
     * formatted or use a unit other than px or %, and error is thrown.
     * @private
     * @param {string=} opt_rootMargin An optional rootMargin value,
     *     defaulting to '0px'.
     * @return {Array<Object>} An array of margin objects with the keys
     *     value and unit.
     */
    IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || '0px';
        var margins = marginString.split(/\s+/).map(function(margin) {
            var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
            if (!parts) {
                throw new Error('rootMargin must be specified in pixels or percent');
            }
            return {value: parseFloat(parts[1]), unit: parts[2]};
        });

        // Handles shorthand.
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];

        return margins;
    };


    /**
     * Starts polling for intersection changes if the polling is not already
     * happening, and if the page's visibilty state is visible.
     * @private
     */
    IntersectionObserver.prototype._monitorIntersections = function() {
        if (!this._monitoringIntersections) {
            this._monitoringIntersections = true;

            // If a poll interval is set, use polling instead of listening to
            // resize and scroll events or DOM mutations.
            if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(
                    this._checkForIntersections, this.POLL_INTERVAL);
            }
            else {
                addEvent(window, 'resize', this._checkForIntersections, true);
                addEvent(document, 'scroll', this._checkForIntersections, true);

                if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
                    this._domObserver = new MutationObserver(this._checkForIntersections);
                    this._domObserver.observe(document, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    });
                }
            }
        }
    };


    /**
     * Stops polling for intersection changes.
     * @private
     */
    IntersectionObserver.prototype._unmonitorIntersections = function() {
        if (this._monitoringIntersections) {
            this._monitoringIntersections = false;

            clearInterval(this._monitoringInterval);
            this._monitoringInterval = null;

            removeEvent(window, 'resize', this._checkForIntersections, true);
            removeEvent(document, 'scroll', this._checkForIntersections, true);

            if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
            }
        }
    };


    /**
     * Scans each observation target for intersection changes and adds them
     * to the internal entries queue. If new entries are found, it
     * schedules the callback to be invoked.
     * @private
     */
    IntersectionObserver.prototype._checkForIntersections = function() {
        var rootIsInDom = this._rootIsInDom();
        var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

        this._observationTargets.forEach(function(item) {
            var target = item.element;
            var targetRect = getBoundingClientRect(target);
            var rootContainsTarget = this._rootContainsTarget(target);
            var oldEntry = item.entry;
            var intersectionRect = rootIsInDom && rootContainsTarget &&
                this._computeTargetAndRootIntersection(target, rootRect);

            var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target: target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect: intersectionRect
            });

            if (!oldEntry) {
                this._queuedEntries.push(newEntry);
            } else if (rootIsInDom && rootContainsTarget) {
                // If the new entry intersection ratio has crossed any of the
                // thresholds, add a new entry.
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                    this._queuedEntries.push(newEntry);
                }
            } else {
                // If the root is not in the DOM or target is not contained within
                // root but the previous entry for this target had an intersection,
                // add a new record indicating removal.
                if (oldEntry && oldEntry.isIntersecting) {
                    this._queuedEntries.push(newEntry);
                }
            }
        }, this);

        if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this);
        }
    };


    /**
     * Accepts a target and root rect computes the intersection between then
     * following the algorithm in the spec.
     * TODO(philipwalton): at this time clip-path is not considered.
     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
     * @param {Element} target The target DOM element
     * @param {Object} rootRect The bounding rect of the root after being
     *     expanded by the rootMargin value.
     * @return {?Object} The final intersection rect object or undefined if no
     *     intersection is found.
     * @private
     */
    IntersectionObserver.prototype._computeTargetAndRootIntersection =
        function(target, rootRect) {

            // If the element isn't displayed, an intersection can't happen.
            if (window.getComputedStyle(target).display == 'none') return;

            var targetRect = getBoundingClientRect(target);
            var intersectionRect = targetRect;
            var parent = getParentNode(target);
            var atRoot = false;

            while (!atRoot) {
                var parentRect = null;
                var parentComputedStyle = parent.nodeType == 1 ?
                    window.getComputedStyle(parent) : {};

                // If the parent isn't displayed, an intersection can't happen.
                if (parentComputedStyle.display == 'none') return;

                if (parent == this.root || parent == document) {
                    atRoot = true;
                    parentRect = rootRect;
                } else {
                    // If the element has a non-visible overflow, and it's not the <body>
                    // or <html> element, update the intersection rect.
                    // Note: <body> and <html> cannot be clipped to a rect that's not also
                    // the document rect, so no need to compute a new intersection.
                    if (parent != document.body &&
                        parent != document.documentElement &&
                        parentComputedStyle.overflow != 'visible') {
                        parentRect = getBoundingClientRect(parent);
                    }
                }

                // If either of the above conditionals set a new parentRect,
                // calculate new intersection data.
                if (parentRect) {
                    intersectionRect = computeRectIntersection(parentRect, intersectionRect);

                    if (!intersectionRect) break;
                }
                parent = getParentNode(parent);
            }
            return intersectionRect;
        };


    /**
     * Returns the root rect after being expanded by the rootMargin value.
     * @return {Object} The expanded root rect.
     * @private
     */
    IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root) {
            rootRect = getBoundingClientRect(this.root);
        } else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            var html = document.documentElement;
            var body = document.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            };
        }
        return this._expandRectByRootMargin(rootRect);
    };


    /**
     * Accepts a rect and expands it by the rootMargin value.
     * @param {Object} rect The rect object to expand.
     * @return {Object} The expanded rect.
     * @private
     */
    IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
            return margin.unit == 'px' ? margin.value :
                margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        var newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;

        return newRect;
    };


    /**
     * Accepts an old and new entry and returns true if at least one of the
     * threshold values has been crossed.
     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
     *    particular target element or null if no previous entry exists.
     * @param {IntersectionObserverEntry} newEntry The current entry for a
     *    particular target element.
     * @return {boolean} Returns true if a any threshold has been crossed.
     * @private
     */
    IntersectionObserver.prototype._hasCrossedThreshold =
        function(oldEntry, newEntry) {

            // To make comparing easier, an entry that has a ratio of 0
            // but does not actually intersect is given a value of -1
            var oldRatio = oldEntry && oldEntry.isIntersecting ?
                oldEntry.intersectionRatio || 0 : -1;
            var newRatio = newEntry.isIntersecting ?
                newEntry.intersectionRatio || 0 : -1;

            // Ignore unchanged ratios
            if (oldRatio === newRatio) return;

            for (var i = 0; i < this.thresholds.length; i++) {
                var threshold = this.thresholds[i];

                // Return true if an entry matches a threshold or if the new ratio
                // and the old ratio are on the opposite sides of a threshold.
                if (threshold == oldRatio || threshold == newRatio ||
                    threshold < oldRatio !== threshold < newRatio) {
                    return true;
                }
            }
        };


    /**
     * Returns whether or not the root element is an element and is in the DOM.
     * @return {boolean} True if the root element is an element and is in the DOM.
     * @private
     */
    IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document, this.root);
    };


    /**
     * Returns whether or not the target element is a child of root.
     * @param {Element} target The target element to check.
     * @return {boolean} True if the target element is a child of root.
     * @private
     */
    IntersectionObserver.prototype._rootContainsTarget = function(target) {
        return containsDeep(this.root || document, target);
    };


    /**
     * Adds the instance to the global IntersectionObserver registry if it isn't
     * already present.
     * @private
     */
    IntersectionObserver.prototype._registerInstance = function() {
        if (registry.indexOf(this) < 0) {
            registry.push(this);
        }
    };


    /**
     * Removes the instance from the global IntersectionObserver registry.
     * @private
     */
    IntersectionObserver.prototype._unregisterInstance = function() {
        var index = registry.indexOf(this);
        if (index != -1) registry.splice(index, 1);
    };


    /**
     * Returns the result of the performance.now() method or null in browsers
     * that don't support the API.
     * @return {number} The elapsed time since the page was requested.
     */
    function now() {
        return window.performance && performance.now && performance.now();
    }


    /**
     * Throttles a function and delays its executiong, so it's only called at most
     * once within a given time period.
     * @param {Function} fn The function to throttle.
     * @param {number} timeout The amount of time that must pass before the
     *     function can be called again.
     * @return {Function} The throttled function.
     */
    function throttle(fn, timeout) {
        var timer = null;
        return function () {
            if (!timer) {
                timer = setTimeout(function() {
                    fn();
                    timer = null;
                }, timeout);
            }
        };
    }


    /**
     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
     * @param {Node} node The DOM node to add the event handler to.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to add.
     * @param {boolean} opt_useCapture Optionally adds the even to the capture
     *     phase. Note: this only works in modern browsers.
     */
    function addEvent(node, event, fn, opt_useCapture) {
        if (typeof node.addEventListener == 'function') {
            node.addEventListener(event, fn, opt_useCapture || false);
        }
        else if (typeof node.attachEvent == 'function') {
            node.attachEvent('on' + event, fn);
        }
    }


    /**
     * Removes a previously added event handler from a DOM node.
     * @param {Node} node The DOM node to remove the event handler from.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to remove.
     * @param {boolean} opt_useCapture If the event handler was added with this
     *     flag set to true, it should be set to true here in order to remove it.
     */
    function removeEvent(node, event, fn, opt_useCapture) {
        if (typeof node.removeEventListener == 'function') {
            node.removeEventListener(event, fn, opt_useCapture || false);
        }
        else if (typeof node.detatchEvent == 'function') {
            node.detatchEvent('on' + event, fn);
        }
    }


    /**
     * Returns the intersection between two rect objects.
     * @param {Object} rect1 The first rect.
     * @param {Object} rect2 The second rect.
     * @return {?Object} The intersection rect or undefined if no intersection
     *     is found.
     */
    function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;

        return (width >= 0 && height >= 0) && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        };
    }


    /**
     * Shims the native getBoundingClientRect for compatibility with older IE.
     * @param {Element} el The element whose bounding rect to get.
     * @return {Object} The (possibly shimmed) rect of the element.
     */
    function getBoundingClientRect(el) {
        var rect;

        try {
            rect = el.getBoundingClientRect();
        } catch (err) {
            // Ignore Windows 7 IE11 "Unspecified error"
            // https://github.com/w3c/IntersectionObserver/pull/205
        }

        if (!rect) return getEmptyRect();

        // Older IE
        if (!(rect.width && rect.height)) {
            rect = {
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
            };
        }
        return rect;
    }


    /**
     * Returns an empty rect object. An empty rect is returned when an element
     * is not in the DOM.
     * @return {Object} The empty rect.
     */
    function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }

    /**
     * Checks to see if a parent element contains a child elemnt (including inside
     * shadow DOM).
     * @param {Node} parent The parent element.
     * @param {Node} child The child element.
     * @return {boolean} True if the parent node contains the child node.
     */
    function containsDeep(parent, child) {
        var node = child;
        while (node) {
            if (node == parent) return true;

            node = getParentNode(node);
        }
        return false;
    }


    /**
     * Gets the parent node of an element or its host element if the parent node
     * is a shadow root.
     * @param {Node} node The node whose parent to get.
     * @return {Node|null} The parent node or null if no parent exists.
     */
    function getParentNode(node) {
        var parent = node.parentNode;

        if (parent && parent.nodeType == 11 && parent.host) {
            // If the parent is a shadow root, return the host element.
            return parent.host;
        }
        return parent;
    }


// Exposes the constructors globally.
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

    'use strict';

    // Helper vars and functions.
    function extend( a, b ) {
        for( var key in b ) {
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }
    // From https://davidwalsh.name/javascript-debounce-function.
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    // Creates a sorted array of random numbers between minVal and maxVal with a length = size.
    function createRandIntOrderedArray(minVal, maxVal, size) {
        var arr = [];
        for(var i=0; i<size; ++i) {
            arr.push(anime.random(minVal, maxVal));
        }
        arr.sort(function(a, b){ return a-b });
        return arr;
    }
    // Checks if an object is empty.
    function isObjEmpty(obj) {
        return Object.getOwnPropertyNames(obj).length > 0;
    }
    // Concatenate JS objs.
    // From http://stackoverflow.com/a/2454315.
    function collect() {
        var ret = {};
        var len = arguments.length;
        for (var i=0; i<len; i++) {
            for (var p in arguments[i]) {
                if (arguments[i].hasOwnProperty(p)) {
                    ret[p] = arguments[i][p];
                }
            }
        }
        return ret;
    }
    // Check if clip-path is supported. From http://stackoverflow.com/a/30041538.
    function areClipPathShapesSupported() {
        var base = 'clipPath',
            prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
            properties = [ base ],
            testElement = document.createElement( 'testelement' ),
            attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

        // Push the prefixed properties into the array of properties.
        for ( var i = 0, l = prefixes.length; i < l; i++ ) {
            var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
            properties.push( prefixedProperty );
        }

        // Interate over the properties and see if they pass two tests.
        for ( var i = 0, l = properties.length; i < l; i++ ) {
            var property = properties[i];

            // First, they need to even support clip-path (IE <= 11 does not)...
            if ( testElement.style[property] === '' ) {

                // Second, we need to see what happens when we try to create a CSS shape...
                testElement.style[property] = attribute;
                if ( testElement.style[property] !== '' ) {
                    return true;
                }
            }
        }
        return false;
    };

    /**
     * Segmenter obj.
     */
    function Segmenter(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        // Preload main image.
        var self = this;
        imagesLoaded(this.el, { background: true }, function() {
            self._init();
            self._initEvents();
            self.options.onReady();
        });
    }

    Segmenter.prototype.options = {
        // Number of pieces.
        pieces: 4,
        // Show pieces already styled.
        renderOnLoad: false,
        // Add an element for the shadow.
        shadows: true,
        // Animations for the shadow (valid properties: opacity, translateX, translateY).
        shadowsAnimation: {
            opacity: 1,
            // translateX: 20,
            // translateY: 20
        },
        // Parrallax effect for the pieces.
        parallax: false,
        // Movements for the parallax effect.
        parallaxMovement: {min: 10, max: 40},
        // Animation for the pieces (valid properties: duration, easing, delay, opacity, translate[XYZ]).
        animation: {
            duration: 1500,
            easing: 'easeOutQuad',
            delay: 0, // Delay increment per piece.
            // opacity: 0.5,
            translateZ: {min: 10, max: 65}, // We can also use an integer for a specific value.
            // translateX: {min: -100, max: 100}, // We can also use an integer for a specific value.
            // translateY: {min: -100, max: 100} // We can also use an integer for a specific value.
        },
        // Callbacks
        onReady: function() { return false; },
        onAnimationComplete: function() { return false; },
        onAnimationStart: function() { return false; },
        // The positions of the pieces in percentage values.
        // We can also use random values by setting options.positions to "random".
        positions: [
            {top: 80, left: 10, width: 30, height: 20},
            {top: 2, left: 2, width: 40, height: 40},
            {top: 30, left: 60, width: 30, height: 60},
            {top: 10, left: 20, width: 50, height: 60}
        ]
    };

    /**
     * Init!
     */
    Segmenter.prototype._init = function() {
        // The dimensions of the main element.
        this.dimensions = {
            width: this.el.offsetWidth,
            height: this.el.offsetHeight
        };

        // The source of the main image.
        var background = this.el.style.backgroundImage;
        this.imgsrc = background.replace('url(','').replace(')','').replace(/\"/gi, "");;

        // Create the layout.
        this._layout();

        var self = this;
        this.pieces = [].slice.call(this.el.querySelectorAll('.segmenter__piece-wrap'));
        this.pieces.forEach(function(piece, pos) {
            // Bugfix for Chrome. The translateZ needs an initial value otherwise the animation will not work. (this seems to be a anime.js bug - let´s wait for the next version..)
            piece.style.WebkitTransform = piece.style.transform = 'translateZ(0.0001px)';

            // If we want to render the different pieces on load then:
            if( self.options.renderOnLoad ) {
                self._renderPiece(piece);
            }
        });
        // Flag to indicate the pieces are already rendered/styled either on load or after the animation.
        if( this.options.renderOnLoad ) {
            this.active = true;
        }
    };

    /**
     * Creates the layout.
     */
    Segmenter.prototype._layout = function() {
        // clip-path support
        var clipPath = areClipPathShapesSupported();

        var segBgEl = document.createElement('div');
        segBgEl.className = 'segmenter__background';
        segBgEl.style.backgroundImage = 'url(' + this.imgsrc + ')';

        var segPieces = document.createElement('div'),
            segPiecesHTML = '',
            positionsTotal = this.options.positions.length;

        segPieces.className = 'segmenter__pieces';

        for(var i = 0, len = this.options.pieces; i < len; ++i) {
            if( this.options.parallax ) {
                segPiecesHTML += '<div class="segmenter__piece-parallax">';
            }

            segPiecesHTML += '<div class="segmenter__piece-wrap">';

            var top, left, width, height, clipTop, clipLeft, clipRight, clipBottom,
                pos = i <= positionsTotal - 1 ? i : 0,
                isRandom = this.options.positions === 'random';

            top = isRandom ? anime.random(0,100) : this.options.positions[pos].top;
            left = isRandom ? anime.random(0,100) : this.options.positions[pos].left;
            width = isRandom ? anime.random(0,100) : this.options.positions[pos].width;
            height = isRandom ? anime.random(0,100) : this.options.positions[pos].height;

            if( !clipPath ) {
                clipTop = isRandom ? top/100 * this.dimensions.height : this.options.positions[pos].top/100 * this.dimensions.height;
                clipLeft = isRandom ? left/100 * this.dimensions.width : this.options.positions[pos].left/100 * this.dimensions.width;
                clipRight = isRandom ? width/100 * this.dimensions.width + clipLeft : this.options.positions[pos].width/100 * this.dimensions.width + clipLeft;
                clipBottom = isRandom ? height/100 * this.dimensions.height + clipTop : this.options.positions[pos].height/100 * this.dimensions.height + clipTop;
            }

            if( this.options.shadows ) {
                segPiecesHTML += '<div class="segmenter__shadow" style="top: ' + top + '%; left: ' + left + '%; width: ' + width + '%; height: ' + height + '%"></div>';
            }

            segPiecesHTML += clipPath ?
                '<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); -webkit-clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%); clip-path: polygon(' + left + '% ' + top + '%, ' + (left + width) + '% ' + top + '%, ' + (left + width) + '% ' + (top + height) + '%, ' + left + '% ' + (top + height) + '%)"></div>' :
                '<div class="segmenter__piece" style="background-image: url(' + this.imgsrc + '); clip: rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)"></div>';

            segPiecesHTML += '</div>'
            if( this.options.parallax ) {
                segPiecesHTML += '</div>';
            }
        }

        segPieces.innerHTML = segPiecesHTML;

        this.el.innerHTML = '';
        this.el.appendChild(segBgEl);
        this.el.appendChild(segPieces);
    };

    /**
     * Renders/Styles a piece with the options that are passed in the initialization.
     */
    Segmenter.prototype._renderPiece = function(piece) {
        var idx = this.pieces.indexOf(piece);
        var self = this;
        if( self.options.animation.translateZ != undefined ) {
            if( typeof self.options.animation.translateZ === 'object' ) {
                var randArr = createRandIntOrderedArray(self.options.animation.translateZ.min, self.options.animation.translateZ.max, self.options.pieces);
                piece.style.transform = piece.style.WebkitTransform = 'translateZ(' + randArr[idx] + 'px)';
            }
            else {
                piece.style.transform = piece.style.WebkitTransform = 'translateZ(' + self.options.animation.translateZ + 'px)';
            }
        }
        if( self.options.animation.translateY != undefined ) {
            if( typeof self.options.animation.translateY === 'object' ) {
                var randArr = createRandIntOrderedArray(self.options.animation.translateY.min, self.options.animation.translateY.max, self.options.pieces);
                piece.style.transform = piece.style.WebkitTransform = 'translateY(' + randArr[idx] + 'px)';
            }
            else {
                piece.style.transform = piece.style.WebkitTransform = 'translateY(' + self.options.animation.translateY + 'px)';
            }
        }
        if( self.options.animation.translateX != undefined ) {
            if( typeof self.options.animation.translateX === 'object' ) {
                var randArr = createRandIntOrderedArray(self.options.animation.translateX.min, self.options.animation.translateX.max, self.options.pieces);
                piece.style.transform = piece.style.WebkitTransform = 'translateX(' + randArr[idx] + 'px)';
            }
            else {
                piece.style.transform = piece.style.WebkitTransform = 'translateX(' + self.options.animation.translateX + 'px)';
            }
        }
        if( self.options.animation.opacity != undefined ) {
            piece.style.opacity = self.options.animation.opacity;
        }

        if( self.options.shadows && isObjEmpty(self.options.shadowsAnimation) ) {
            var shadowEl = piece.querySelector('.segmenter__shadow');
            shadowEl.style.opacity = self.options.shadowsAnimation.opacity != undefined ? self.options.shadowsAnimation.opacity : 0;
            shadowEl.style.transform = shadowEl.style.WebkitTransform = 'translateX(' + (self.options.shadowsAnimation.translateX != undefined ? self.options.shadowsAnimation.translateX : 0) + 'px) translateY(' + (self.options.shadowsAnimation.translateY != undefined ? self.options.shadowsAnimation.translateY : 0) + 'px)';
        }
    };

    /**
     * Animates the pieces with the options passed (with anime.js).
     */
    Segmenter.prototype.animate = function() {
        if( this.active ) {
            return false;
        }
        this.active = true;

        var self = this,
            animProps = {
                targets: this.pieces,
                duration: this.options.animation.duration,
                delay: function(el, index) { return (self.options.pieces - index - 1) * self.options.animation.delay; },
                easing: this.options.animation.easing,
                begin: this.options.onAnimationStart,
                complete: this.options.onAnimationComplete
            };

        if( this.options.animation.translateZ != undefined ) {
            var randArr = createRandIntOrderedArray(this.options.animation.translateZ.min, this.options.animation.translateZ.max, this.options.pieces);
            animProps.translateZ = typeof this.options.animation.translateZ === 'object' ? function(el, index) {
                return randArr[index];
            } : this.options.animation.translateZ;
        }
        if( this.options.animation.translateX != undefined ) {
            animProps.translateX = typeof this.options.animation.translateX === 'object' ? function(el, index) {
                return anime.random(self.options.animation.translateX.min, self.options.animation.translateX.max);
            } : this.options.animation.translateX;
        }
        if( this.options.animation.translateY != undefined ) {
            animProps.translateY = typeof this.options.animation.translateY === 'object' ? function(el, index) {
                return anime.random(self.options.animation.translateY.min, self.options.animation.translateY.max);
            } : this.options.animation.translateY;
        }
        if( this.options.animation.opacity != undefined ) {
            animProps.opacity = this.options.animation.opacity;
        }

        anime(animProps);

        // Also animate the shadow element.
        if( this.options.shadows && isObjEmpty(this.options.shadowsAnimation) ) {
            anime(collect({
                targets: this.el.querySelectorAll('.segmenter__shadow'),
                duration: this.options.animation.duration,
                delay: function(el, index) { return (self.options.pieces - index - 1) * self.options.animation.delay; },
                easing: this.options.animation.easing
            }, this.options.shadowsAnimation));
        }
    };

    /**
     * Init/Bind events.
     */
    Segmenter.prototype._initEvents = function() {
        var self = this;

        // Window resize.
        this.debounceResize = debounce(function(ev) {
            var positionsTotal = self.options.positions.length;

            // Recalculate dimensions.
            self.dimensions = {
                width: self.el.offsetWidth,
                height: self.el.offsetHeight
            };

            // Recalculate clip values..
            // todo: DRY
            // todo: If random is true then save the initial values. Should not recalculate for this case.
            self.pieces.forEach(function(piece, position) {
                var clipTop, clipLeft, clipRight, clipBottom,
                    segmenterPiece = piece.querySelector('.segmenter__piece');

                if( self.options.positions === 'random' ) {
                    var randT = anime.random(0,100), randL = anime.random(0,100), randW = anime.random(0,100), randH = anime.random(0,100);
                    clipTop = randT/100 * self.dimensions.height;
                    clipLeft = randL/100 * self.dimensions.width;
                    clipRight = randW/100 * self.dimensions.width + clipLeft;
                    clipBottom = randH/100 * self.dimensions.height + clipTop;
                }
                else {
                    var pos = position <= positionsTotal - 1 ? position : 0;
                    clipTop = self.options.positions[pos].top/100 * self.dimensions.height;
                    clipLeft = self.options.positions[pos].left/100 * self.dimensions.width;
                    clipRight = self.options.positions[pos].width/100 * self.dimensions.width + clipLeft;
                    clipBottom = self.options.positions[pos].height/100 * self.dimensions.height + clipTop;
                }

                segmenterPiece.style.clip = 'rect(' + clipTop + 'px,' + clipRight + 'px,' + clipBottom + 'px,' + clipLeft + 'px)';
            });
        }, 10);
        window.addEventListener('resize', this.debounceResize);

        // Mousemove and Deviceorientation:
        if( this.options.parallax ) {
            var arrRand = createRandIntOrderedArray(this.options.parallaxMovement.min, this.options.parallaxMovement.max, this.options.pieces);
            this.pieces.forEach(function(piece, pos) {
                piece.setAttribute('data-parallax-translation', typeof self.options.parallaxMovement === 'object' ? arrRand[pos] : self.options.parallaxMovement );
            });
            this.mousemove = function(ev) {
                if( !self.active ) {
                    return false;
                }
                requestAnimationFrame(function() {
                    self.pieces.forEach(function(piece) {
                        var t = piece.getAttribute('data-parallax-translation'),
                            transX = t/(self.dimensions.width)*ev.clientX - t/2,
                            transY = t/(self.dimensions.height)*ev.clientY - t/2;

                        piece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)';
                    });
                });
            };
            window.addEventListener('mousemove', this.mousemove);

            this.handleOrientation = function() {
                if( !self.active ) {
                    return false;
                }
                var y = event.gamma;
                // To make computation easier we shift the range of x and y to [0,180]
                y += 90;

                requestAnimationFrame(function() {
                    self.pieces.forEach(function(piece) {
                        var t = piece.getAttribute('data-parallax-translation'),
                            transX = t/(self.dimensions.width)*y - t/2,
                            transY = t/(self.dimensions.height)*y - t/2;

                        piece.parentNode.style.transform = piece.parentNode.style.WebkitTransform = 'translate3d(' + transX + 'px,' + transY + 'px,0)';
                    });
                });
            }
            window.addEventListener('deviceorientation', this.handleOrientation);
        }
    };

    window.Segmenter = Segmenter;

})(window);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.Splitting = factory());
}(this, (function () { 'use strict';

    /**
     * # Splitting
     * CSS vars for split words & chars!
     * `Splitting` fn handles array-ifying the
     * @param {*} els
     */
    function Splitting(els) {
        return $(els).map(function(el, i) {
            if (!el._splitting) {
                el._splitting = {
                    el: el
                };
                if (el.classList) {
                    el.classList.add("splitting");
                }
            }
            return el._splitting;
        });
    }

    /**
     * # Splitting.$
     * Convert selector or NodeList to array for easier manipulation.
     *
     * @param {*} els - Elements or selector
     * @param {*} parent
     */
    function $(els, parent) {
        return Array.prototype.slice.call(
            els.nodeName
                ? [els]
                : els[0].nodeName ? els : (parent || document).querySelectorAll(els),
            0
        );
    }
    Splitting.$ = $;

    /**
     * # Splitting.index
     * Index split elements and add them to a Splitting instance.
     *
     * @param {*} s
     * @param {*} key
     * @param {*} splits
     */
    function index(s, key, splits) {
        if (splits) {
            s[key + "s"] = splits;
            s.el.style.setProperty("--" + key + "-total", splits.length);
            splits.map(function(el, i) {
                el.style.setProperty("--" + key + "-index", i);
            });
        }
        return s;
    }
    Splitting.index = index;

    /**
     * # Splitting.split
     * Split an element's innerText into individual elements
     * @param {Node} el - Element to split
     * @param {String} key -
     * @param {String|RegEx} splitBy - string or regex to split the innerText by
     * @param {Boolean} space - Add a space to each split if index is greater than 0. Mainly for `Splitting.words`
     */
    function split(el, key, splitBy, space) {
        // Remove element from DOM to prevent unnecessary thrashing.
        var parent = el.parentNode;
        if (parent) {
            var temp = document.createTextNode("");
            parent.replaceChild(temp, el);
        }

        // Combine any strange text nodes or empty whitespace.
        el.normalize();

        // Loop through all children to split them up.
        var children = $(el.childNodes).reduce(function(val, child) {
            // Recursively run through child nodes
            if (child && child.childNodes && child.childNodes.length) {
                el.appendChild(child);
                return val.concat(split(child, key, splitBy, space));
            }

            // Get the text to split, trimming out the whitespace
            var text = (child.wholeText || "").trim();

            // If there's no text left after trimming whitespace, continue the loop
            if (!text.length) {
                el.appendChild(child);
                return val;
            }

            el.removeChild(child);

            // Concatenate the split text children back into the full array
            return val.concat(
                text.split(splitBy).map(function(split) {
                    // Create a span
                    var splitEl = document.createElement("span");
                    // Give it the key as a class
                    splitEl.className = key;
                    splitEl.innerText = split;
                    // Populate data-{{key}} with the split value
                    splitEl.setAttribute("data-" + key, split);
                    el.appendChild(splitEl);
                    // If items should be spaced out (Splitting.words, primarily), insert
                    // the space into the parent before the element.
                    if (space) {
                        splitEl.insertAdjacentText("afterend", " ");
                    }
                    return splitEl;
                })
            );
        }, []);

        // Put the element back into the DOM
        if (parent) {
            parent.replaceChild(el, temp);
        }

        return children;
    }
    Splitting.split = split;

    /**
     * # Splitting.children
     * Add CSS Var indexes to a DOM element's children. Useful for lists.
     * @param {String|NodeList} parent - Parent element(s) or selector
     * @param {String|NodeList} children - Child element(s) or selector
     * @param {String} key -
     * @example `Splitting.children('ul','li','item'); // Index every unordered list's items with the --item CSS var.`
     */
    Splitting.children = function(parent, children, key) {
        return Splitting(parent).map(function(s) {
            return index(s, key, $(children, s.el));
        });
    };

    /**
     * # Splitting.chars
     * Split an element into words and those words into chars.
     * @param {String|Node|NodeList|Array} els - Element(s) or selector to target.
     */
    Splitting.words = function(els) {
        return Splitting(els).map(function(s, i) {
            return s.words ? s : index(s, "word", split(s.el, "word", /\s+/, true));
        });
    };

    /**
     * # Splitting.chars
     * Split an element into words and those words into chars.
     * @param {String|Node|NodeList|Array} els - Element(s) or selector to target.
     */
    Splitting.chars = function(els) {
        return Splitting.words(els).map(function(s) {
            return s.chars
                ? s
                : index(
                    s,
                    "char",
                    s.words.reduce(function(val, word, i) {
                        return val.concat(split(word, "char", ""));
                    }, [])
                );
        });
    };

    /**
     * # Splitting.lines
     * Index each word by line. Does not automatically update on resize, so retrigger `Splitting.lines` again _with debouncing_ when the element's line width may have changed.
     * @param {*} els
     */

    function splitLines(els) {
        var lines = [],
            lineIndex = -1,
            lastTop = -1,
            top;

        els.map(function(w) {
            top = w.offsetTop;
            if (top > lastTop) {
                lineIndex++;
                lastTop = top;
            }
            lines[lineIndex] = lines[lineIndex] || [];
            lines[lineIndex].push(w);
            w.style.setProperty("--line-index", lineIndex);
        });

        return lines;
    }

    Splitting.lines = function(els, children, key) {
        key = children ? key || "item" : "word";

        return (children
                ? Splitting.children(els, children, key)
                : Splitting.words(els)
        ).map(function(s) {
            s.lines = splitLines(s[key + "s"]);
            s.el.style.setProperty("--line-total", s.lines.length);
            return s;
        });
    };

    /**
     * # Splitting.fromString
     * Splits a string and returns the processed HTML with elements and CSS Vars.
     * @param {String} str - String to split
     * @param {Object} opts - Options
     * @param {String} opts.type - Type of splitting to do, 'words' or 'chars';
     * @param {Boolean} opts.element - Return an element. Defaults to `false` to receive a string
     *  default is chars
     */

    Splitting.fromString = function(str, opts) {
        opts = opts || {};
        var el = document.createElement("span");
        el.innerHTML = str;
        Splitting[opts.type || "chars"].apply(null, [el].concat(opts.args || []));
        return opts.element ? el : el.outerHTML;
    };

    return Splitting;

})));