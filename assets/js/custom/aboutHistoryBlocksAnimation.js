// history blocks -- about page
export function historyBlocksAnimation(element) {
    if (element.classList.contains("history__blocks")) {
        let contentBlocks = document.querySelectorAll(".history__blocks .wrap");
        TweenMax.staggerTo(contentBlocks, 0.5, {
            opacity: 1,
            y: 0,
            delay: 0.5,
        }, 0.2);
    }
}