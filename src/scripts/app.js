(function () {
  document.addEventListener('DOMContentLoaded', function () {
    /**
     * Set global variables
     **/
    moira.initGlobalVars();

    /**
     * Animate Elements
     */
    if (moira.animation.global || (!moira.vars.mobile && moira.animation.mobile)) {
      appearElems(moira.vars.animateEl, moira.animation.visibleBeforeAnimation);
    } else {
      manualAnimationTrigger();
    }

    /**
     * Initialize non mobile logic
     **/
    if (!moira.vars.mobile) {
      /**
       * Initialize smooth anchor scrolling
       **/
      initSmoothScrolling();

      /**
       * Initiate scrollspy
       *  Changelog:
       *  - gumshoe.js line 9 | changed this.window to window
       * */
      gumshoe.init(moira.scrollspy);
    }

    /**
     * Initiate expander
     * */
    expander();

    /**
     * Set skype link
     * */
    setSkypeLink(moira.skype.type, moira.skype.id);

    /**
     * Initiate mood listener
     * */
    moodListener();
  });

  window.addEventListener('resize', function () {
    // Re Init Vars
    moira.vars.windowW = window.innerWidth;
    moira.vars.windowH = window.innerHeight;
    moira.vars.windowScrollTop = window.pageYOffset;
  });

  window.addEventListener('scroll', function () {
    moira.vars.windowScrollTop = window.pageYOffset;
  });

  window.addEventListener('load', function () {
    /**
     * Listen for print actions
     */
    listenPrintEvent();
  });
})();
