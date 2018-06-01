
if(document.querySelector(".content__slider") !== null) {

    let contentSlider = document.querySelector(".content__slider");
    contentSlider.classList.remove("is-hidden");
    contentSlider.offsetHeight;

    let flktyContentSlider = new Flickity(contentSlider, {
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.01,
        autoPlay: true,
        friction: 0.15,
        adaptiveHeight: true
    });
}