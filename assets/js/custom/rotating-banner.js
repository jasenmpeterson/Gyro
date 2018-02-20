let elem = document.querySelector(".rotating__banner");
let flkty = new Flickity(elem, {
	prevNextButtons: false,
	pageDots: true,
	selectedAttraction: 0.01,
	friction: 0.15
});
