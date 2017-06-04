/**
 * TODO: separate logic into main.js and theme.js
 **/
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
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                console.log('onbeforeprint equivalent');
                manualProgressTrigger();
            } else {
                console.log('onafterprint equivalent');
            }
        });

        /**
         * Initiate scrollspy
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
