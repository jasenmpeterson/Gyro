if(document.querySelector(".rotating__banner") !== null) {
    let rotatingBanner = document.querySelector(".rotating__banner");
    rotatingBanner.classList.remove("is-hidden");
    rotatingBanner.offsetHeight;

    let flkty = new Flickity(rotatingBanner, {
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        autoPlay: 5000
    });

}