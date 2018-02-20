let contentSlider = document.querySelector(".content__slider");
let flktyContentSlider = new Flickity(contentSlider, {
    prevNextButtons: false,
    pageDots: true,
    selectedAttraction: 0.01,
    friction: 0.15
});
