// animations
import { historyHomeAnimation } from "./historyHomeAnimation";
import { historyChartAnimation} from "./historyChartAnimation";
import {technologyHomeAnimation} from "./technologyHomeAnimation";
import {newsHomeAnimation} from "./newsHomeAnimation";

export let animationFlag = false;

// emergence

emergence.init({
    offsetTop: 250,
    elemCushion: 0.5,
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
        }
    }
});