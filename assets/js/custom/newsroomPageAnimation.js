export function newsroomPageAnimation() {
    if (document.querySelector(".newsrooms") !== null) {
        let newsroomContent = document.querySelector(".newsrooms");
        let sidebar = document.querySelectorAll(".sidebar");
        let elements = [sidebar, newsroomContent];
        TweenMax.staggerTo(elements, 0.5, {
            opacity: 1,
            y: 0
        }, 0.2);
    }
}