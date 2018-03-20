// technology and solutions pages
export function documentList() {
    if (document.querySelector("ul.documents") !== null) {
        let listItems = document.querySelectorAll("ul.documents li a");
        let listHover = (e) => {
            TweenMax.to(e.target, 0.2, {
                scale: 1.1,
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.10), 0 2px 32px rgba(0, 0, 0, 0.10)",
                color: "#fff",
                backgroundColor: "#ffb100",
                ease: Power2.easeOut
            })
        };
        let listHoverOut = (e) => {
            TweenMax.to(e.target, 0.5, {
                scale: 1,
                boxShadow: "0 6px 12px transparent, 0 10px 40px transparent",
                backgroundColor: "#f8f8f8",
                color: "#4a525b",
                ease: Power2.easeOut
            })
        };
        for(let listItem of listItems ) {
            listItem.addEventListener("mouseenter", listHover);
            listItem.addEventListener("mouseleave", listHoverOut);
        }
    }
}