let staticBannerHeader = document.querySelector(".static__banner h2.title");
let staticBannerParagraphs = document.querySelector(".static__banner p");
let staticBannerImage = document.querySelector(".static__banner .background__image");
if(staticBannerHeader) {
    TweenMax.to(staticBannerHeader, 0.5, { opacity: 1, y: 0 });
    if(staticBannerParagraphs !== null) {
        TweenMax.to(staticBannerParagraphs, 0.5, { opacity: 1, y: 0, delay: 0.3 });
    }
    if(staticBannerImage !== null) {
        TweenMax.to(staticBannerImage, 1, { opacity: 1, x: 0, ease: Power4.easeOut });
    }

}