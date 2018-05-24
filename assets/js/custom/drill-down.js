let drillDownButton = document.querySelectorAll(".drill__down li.parent > button");

let openMenu = (e) => {
    let menu = e.target.parentNode;
    let drillDownDropDown = menu.querySelector(".drill__down__drop__down.parent");
    let drillDownChild = drillDownDropDown.querySelectorAll(".drill__down__drop__down.child");
    let title = menu.querySelectorAll("span");
    let dropDownList = menu.querySelectorAll(".drill__down__drop__down.parent > li");
    console.log(dropDownList);
    if(!drillDownDropDown.classList.contains("active")) {
        TweenMax.to(drillDownDropDown, 0.3, {
            opacity: 1,
            scaleY: 1,
            display: "block",
            transformOrigin: 'center top',
            ease: Power2.easeOut
        });
        TweenMax.to(title, 0.3, {
            opacity: 1,
            x: 0,
            delay: 0.3,
            ease: Power2.easeOut
        });
        TweenMax.staggerTo(drillDownChild, 0.3, {
            opacity: 1,
            x: 0,
            delay: 0.3,
        }, 0.2);
        drillDownDropDown.classList.add("active");
    } else {
        TweenMax.to(title, 0.3, {
            opacity: 0,
            x: -10,
            ease: Power2.easeOut
        });
        TweenMax.staggerTo(drillDownChild, 0.1, {
            opacity: 0,
            x: -10
        }, 0.1);
        TweenMax.to(drillDownDropDown, 0.6, {
            opacity: 0,
            scaleY: 0,
            display: "none",
            delay: 0.2,
            ease: Power2.easeOut
        });
        drillDownDropDown.classList.remove("active");
    }
};

for(let button of drillDownButton) {
    button.addEventListener("click", openMenu)
}

// This is the important part!

function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        requestAnimationFrame(function() {
            element.style.height = 0 + 'px';
        });
    });

    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';

    // when the next css transition finishes (which should be the one we just triggered)
    element.addEventListener('transitionend', function(e) {
        // remove this event listener so it only gets triggered once
        element.removeEventListener('transitionend', arguments.callee);

        // remove "height" from the element's inline styles, so it can return to its initial value
        element.style.height = null;
    });

    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
}

let toggleButton = document.querySelectorAll( '.toggle > a');

for( let button of toggleButton ) {
    button.addEventListener( 'click', function(e) {
        e.preventDefault();
        let sub = button.parentNode.querySelector( '.drill__down' );
        if( !sub.classList.contains( 'open' ) ) {
            sub.classList.add( 'open' );
            this.classList.add( 'active' );
            TweenLite.set( sub, { height: 'auto' } );
            TweenLite.from( sub, 0.2, { height: 0 } );
            TweenLite.to( sub, 0.2, { opacity: 1 } );
        } else {
            sub.classList.remove( 'open' );
            this.classList.remove( 'active' );
            TweenLite.to( sub, 0.2, { opacity: 0, height: 0 } );
        }
    })
}

let mobileMenuToggle = document.querySelectorAll( '.mobile__menu .menu-item-has-children > a' );

for( let mobileButton of mobileMenuToggle ) {
    mobileButton.addEventListener( 'click', function(e) {
        e.preventDefault();
        let sub = mobileButton.parentNode.querySelector( '.sub-menu' );
        if( !sub.classList.contains( 'open' ) ) {
            sub.classList.add( 'open' );
            this.classList.add( 'active' );
            this.parentNode.classList.add( 'active' );
            TweenLite.set( sub, { height: 'auto' } );
            TweenLite.from( sub, 0.2, { height: 0 } );
            TweenLite.to( sub, 0.2, { opacity: 1 } );
        } else {
            sub.classList.remove( 'open' );
            this.classList.remove( 'active' );
            this.parentNode.classList.remove( 'active' );
            TweenLite.to( sub, 0.2, { opacity: 0, height: 0 } );
        }
    })
}