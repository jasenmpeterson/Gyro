// history -- home page
export function historyHomeAnimation(element) {
    if (element.classList.contains("history__home")) {
        document.querySelector(".history h1").classList.add("title-slide-in");
        document.querySelector(".history p").classList.add("fade-in");
        document.querySelector(".history .button").classList.add("fade-in");
    }
}