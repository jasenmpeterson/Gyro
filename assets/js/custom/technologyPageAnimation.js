// technology and solutions pages
export function technologyPageAnimation() {
    if (document.querySelector(".technology__and__services__content") !== null) {
        let technologyAndServicesContent = document.querySelector(".technology__and__services__content");
        let sidebar = document.querySelector(".sidebar.left");
        let sideBarRight =  document.querySelector(".sidebar.right");
        let elements = [sidebar, technologyAndServicesContent, sideBarRight];
        let elementsArray = [];
        for(let element of elements) {
            if(element !== null) {
                elementsArray.push(element);
            }
        }
        TweenMax.staggerTo(elementsArray, 0.5, {
            opacity: 1,
            y: 0
        }, 0.2);
    }
}