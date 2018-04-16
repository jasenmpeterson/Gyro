// let drillDownButton = document.querySelectorAll(".drill__down li.parent > button");
//
// let openMenu = (e) => {
//     let menu = e.target.parentNode;
//     let drillDownDropDown = menu.querySelector(".drill__down__drop__down.parent");
//     let drillDownChild = drillDownDropDown.querySelectorAll(".drill__down__drop__down.child");
//     let title = menu.querySelectorAll("span");
//     let dropDownList = menu.querySelectorAll(".drill__down__drop__down.parent > li");
//     console.log(dropDownList);
//     if(!drillDownDropDown.classList.contains("active")) {
//         TweenMax.to(drillDownDropDown, 0.3, {
//             opacity: 1,
//             scaleY: 1,
//             display: "block",
//             transformOrigin: 'center top',
//             ease: Power2.easeOut
//         });
//         TweenMax.to(title, 0.3, {
//             opacity: 1,
//             x: 0,
//             delay: 0.3,
//             ease: Power2.easeOut
//         });
//         TweenMax.staggerTo(drillDownChild, 0.3, {
//             opacity: 1,
//             x: 0,
//             delay: 0.3,
//         }, 0.2);
//         drillDownDropDown.classList.add("active");
//     } else {
//         TweenMax.to(title, 0.3, {
//             opacity: 0,
//             x: -10,
//             ease: Power2.easeOut
//         });
//         TweenMax.staggerTo(drillDownChild, 0.1, {
//             opacity: 0,
//             x: -10
//         }, 0.1);
//         TweenMax.to(drillDownDropDown, 0.6, {
//             opacity: 0,
//             scaleY: 0,
//             display: "none",
//             delay: 0.2,
//             ease: Power2.easeOut
//         });
//         drillDownDropDown.classList.remove("active");
//     }
// };
//
// for(let button of drillDownButton) {
//     button.addEventListener("click", openMenu)
// }