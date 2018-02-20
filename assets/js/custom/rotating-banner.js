Splitting.chars("[data-splitting-chars]");

let rotatingBanner = document.querySelector(".rotating__banner");
rotatingBanner.classList.remove("is-hidden");
rotatingBanner.offsetHeight;

let flkty = new Flickity(rotatingBanner, {
	prevNextButtons: false,
	pageDots: true,
	selectedAttraction: 0.01,
	friction: 0.15
});

// flkty.on("settle", function() {
//     let activeHeader = document.querySelector(".is-selected h1");
//     console.log(activeHeader);
//     activeHeader.classList.add("active");
// });