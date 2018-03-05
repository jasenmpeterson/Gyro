// emeergence

emergence.init({
    offsetTop: 250,
    elemCushion: 0.5,
    reset: false,
    callback: function(element,state) {
        if (state === 'visible') {
            if (element.classList.contains("history")) {
                segmenter.animate();
                document.querySelector(".history h1").classList.add("title-slide-in");
                document.querySelector(".history p").classList.add("fade-in");
                document.querySelector(".history .button").classList.add("fade-in")
            }
            // history
        }
    }
});