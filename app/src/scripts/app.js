(function () {

    document.addEventListener('DOMContentLoaded', function() {
        /**
         * Set global variables
         **/
        moira.initGlobalVars();

        /**
         * Initialize smooth anchor scrolling
         **/
        initSmoothScrolling();

        /**
         * Initialize sticky elements
         **/
        new Sticky('.sticky');

        /**
         * Animate Elements
         */
        if(moira.progress.animation && !moira.vars.mobile) {
            appearElems(moira.vars.animateEl, 150);
        }

        /**
         * Circle & Line Charts
         */
        if(!moira.progress.animation || moira.vars.mobile) {
            manualProgressTrigger();
        }

        /**
         * Listen for print actions
         */
        listenPrintEvent();

        /**
         * Initiate scrollspy
         *  Changelog:
         *  - gumshoe.js line 9 | changed this.window to window
         * */
        gumshoe.init(moira.scrollspy);

        /**
         * Initiate expander
         * */
        expander();
    });

    window.addEventListener('resize', function() {
        // Re Init Vars
        moira.vars.windowW = window.innerWidth;
        moira.vars.windowH = window.innerHeight;
        moira.vars.windowScrollTop = window.pageYOffset;
    });

    window.addEventListener('scroll', function() {
        moira.vars.windowScrollTop = window.pageYOffset;
    });

    window.addEventListener('load', function() {
    });
}());
