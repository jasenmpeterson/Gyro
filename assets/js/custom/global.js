// animations
import {historyHomeAnimation } from "./historyHomeAnimation";
import {historyChartAnimation} from "./historyChartAnimation";
import {technologyHomeAnimation} from "./technologyHomeAnimation";
import {newsHomeAnimation} from "./newsHomeAnimation";
import {coreValuesAnimation} from "./coreValuesAnimations";
import {historyBlocksAnimation} from "./aboutHistoryBlocksAnimation";
import {technologyPageAnimation} from "./technologyPageAnimation";
import {newsroomPageAnimation} from "./newsroomPageAnimation";
import {documentList} from "./documentList";

(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

// emergence
emergence.init({
    elemCushion: 0.2 ,
    reset: false,
    callback: function(element,state) {
        if (state === 'visible') {
            // history -- home page
            historyHomeAnimation(element);
            // history chart - our company - history page
            historyChartAnimation(element);
            // technology -- home page
            technologyHomeAnimation(element);
            // news -- home page
            newsHomeAnimation(element);
            // core values -- history/about page
            coreValuesAnimation(element);
            // history blocks -- history/about page
            historyBlocksAnimation(element);
        }
    }
});

// technology page -- technology & solutions
technologyPageAnimation();
// newsroom page
newsroomPageAnimation();
// documents list
documentList();

// contact form floating labels;
jQuery(document).ready(function(){
    jQuery(document).on('focus', '.form__wrapper input[type=text], .form__wrapper input[type=tel], .form__wrapper input[type=email], .form__wrapper textarea', function(e){
        var ph = jQuery(this).attr('placeholder');
        if( ph ){
            jQuery(this).attr('ph', jQuery(this).attr('placeholder') );
            jQuery(this).attr('placeholder', '');
            jQuery(this).animate({'padding-top':'30px', 'padding-bottom':'15px', 'position' : 'relative'}, 100);
            jQuery(this).parent().append('<div class="floating-label">' + ph + '</div>');
            jQuery(this).parent().find('.floating-label').fadeIn();
        }
    });
});