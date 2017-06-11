/**
 * Moira Options
 */
var moira = {
    vars: {
        // Set theme primary color
        themeColor: '#dc6e12'
    },
    nav: {
        linkSelector: 'nav a'
    },
    mood: {
        animationType: 'click',
        idMood: 'mood',
    },
    animation: {
        global: true,
        mobile: true,
        selectorBefore: 'is-animate',
        selectorAfter: 'is-animated'
    },
    expander: {
        selectorTrigger: '.expander-trigger',
        selectorContent: '.expander-content',
        attributeTextAlt: 'data-text-alt',
        attributeTriggerOnce: 'data-trigger-once',
        classVisible: 'is-visible',
        classOnce: 'is-once',
        classTrigger: 'is-triggered'
    },
    progress: {
        textColor: 'inherit', // set text color
        trailColor: 'rgba(0,0,0,0.07)', // set trail color
        attributeText: 'data-text',
        attributeValue: 'data-value',
        classText: 'progress-text',
        classLine: 'progress-line',
        classChart: 'progress-chart',
        selectorBar: '.progress-bar',
        selectorBullets: '.progress-bullets',
        selectorLine: '.progress-line',
        selectorChart: '.progress-chart',
    },
    scrollspy: {
        selector: '#nav-wrap a', // Default link selector (must use a valid CSS selector)
        selectorHeader: 'header', // Fixed header selector (must use a valid CSS selector)
        container: window, // The element to spy on scrolling in (must be a valid DOM Node)
        offset: 70, // Distance in pixels to offset calculations
        activeClass: 'is-active', // Class to apply to active navigation link and its parent list item
        scrollDelay: false, // Wait until scrolling has stopped before updating the navigation
        callback: function (nav) {
        } // Callback to run after setting active link
    }
};
