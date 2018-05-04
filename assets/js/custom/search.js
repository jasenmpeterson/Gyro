let searchInputElem = document.querySelector("input.search");
let searchIconElem = document.querySelector(".icon__search");
let closeIconElem = document.querySelector(".icon__close");

searchInputElem.addEventListener("focus", (e) => {
    searchIconElem.classList.add("inactive");
    closeIconElem.classList.add("active")
});

searchInputElem.addEventListener("blur", (e) => {
    searchIconElem.classList.remove("inactive");
   closeIconElem.classList.remove("active")
});

closeIconElem.addEventListener("click", (e) => {
    if(searchInputElem.value !== "") {
        searchInputElem.value = ""
    }
});