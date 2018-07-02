
if(document.querySelector(".content__slider") !== null) {
    let contentSlider = document.querySelector(".content__slider");
    contentSlider.classList.remove("is-hidden");
    contentSlider.offsetHeight;

    let flktyContentSlider = new Flickity(contentSlider, {
        prevNextButtons: false,
        pageDots: true,
        selectedAttraction: 0.01,
        autoPlay: true,
        friction: 0.15,
        adaptiveHeight: false,
        autoPlay: 5000,
      on: {
        ready: function() {
            let video = document.querySelector('.blueprint__wrap .is-selected video');
            video.play();
            let activeCallout = document.querySelectorAll('.is-selected .call--outs');
            TweenMax.to(activeCallout, 1, {
              opacity: 1,
              y: 0,
              delay: 1,
              ease: Power2.easeOut
            }, 0.2);
        }
      }
    });

    flktyContentSlider.on( 'change', function() {
      let video = document.querySelector('.blueprint__wrap .is-selected video');
      let videos = document.querySelectorAll('.blueprint__wrap video');
      let activeCallout = document.querySelectorAll('.is-selected .call--outs');
      TweenMax.to(activeCallout, 1, {
        opacity: 1,
        y: 0,
        delay: 1,
        ease: Power2.easeOut
      }, 0.2);
      for(let video of videos) {
          video.pause();
      }
      video.play();
    });

}