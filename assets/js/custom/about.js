let segmenter =  document.querySelector(".segmenter") !== null ? new Segmenter(document.querySelector(".segmenter"),{
    pieces: 7,
    animation: {
        duration: 1500,
        easing: 'easeOutQuad',
        delay: 600,
        translateZ: {min: 10, max: 65}
    },
    parallax: true,
    parallaxMovement: {min: 5, max: 10},
    positions: [
        {top: 10, left: 20, width: 20, height: 30},
        {top: 8, left: 35, width: 30, height: 20},
        {top: 25, left: 18, width: 14, height: 25},
        {top: 23, left: 50, width: 20, height: 10},
        {top: 30, left: 65, width: 10, height: 30},
        {top: 48, left: 20, width: 10, height: 13},
        {top: 50, left: 67, width: 10, height: 20}
    ]
}) : '';

let historyBlocks = document.querySelectorAll(".history__blocks .wrap");

let animateHistoryBlock = (el) => {
    historyBlocks.forEach(el => el.classList.remove("active"));
    el.target.classList.add("active");
};

historyBlocks.forEach(el => el.addEventListener("click", animateHistoryBlock));