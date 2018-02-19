let drillDownButton = document.querySelectorAll(".sub__menu__child__title");

for(let drillDown of drillDownButton) {
    drillDown.addEventListener("click", (e) => {
    	e.target.classList.toggle("active");
        let currentNode = e.target.parentNode;
        currentNode.classList.toggle("open");
    })
}