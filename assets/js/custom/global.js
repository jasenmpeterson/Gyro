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