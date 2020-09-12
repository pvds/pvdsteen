/**
 * Progress Circle
 * @param {string} element
 * @param {string} text
 * @param {string} value
 * @param {number} duration
 */
function progressChart(element, text, value, duration) {
  const circle = new ProgressBar.Circle(element, {
    color: moira.vars.themeColor,
    strokeWidth: 5,
    trailWidth: 0,
    text: {
      value: text,
      className: moira.progress.classText,
      style: {
        top: '50%',
        left: '50%',
        color: moira.progress.textColor,
        position: 'absolute',
        margin: 0,
        padding: 0,
        transform: {
          prefix: true,
          value: 'translate(-50%, -50%)',
        },
      },
      autoStyleContainer: true,
      alignToBottom: true,
    },
    svgStyle: {
      display: 'block',
      width: '100%',
    },
    duration: duration,
    easing: 'easeOut',
  });

  circle.animate(value); // Number from 0.0 to 1.0
}

/**
 * Progress Line
 * @param {Object} element
 * @param {string} text
 * @param {string} value
 * @param {number} duration
 */
function progressLine(element, text, value, duration) {
  const line = new ProgressBar.Line(element, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: duration,
    color: moira.vars.themeColor,
    trailColor: moira.progress.trailColor,
    trailWidth: 4,
    svgStyle: {
      width: '100%',
      height: '100%',
    },
    text: {
      value: text,
      className: moira.progress.classText,
      style: {
        top: '-24px',
        right: '0',
        color: moira.progress.textColor,
        position: 'absolute',
        margin: 0,
        padding: 0,
        transform: {
          prefix: true,
          value: 'translate(0, 0)',
        },
      },
      autoStyleContainer: true,
    },
  });

  line.animate(value); // Number from 0.0 to 1.0
}

/**
 * Element In Viewport
 * @param {Object} el
 * @param {number} vpart
 * @return {boolean|boolean}
 */
function isElemInViewport(el, vpart) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top + vpart <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Elements In Viewport
 * @param {Object[]} elems
 * @param {number} vpart
 */
function elemsInViewport(elems, vpart) {
  for (let i = 0; i < elems.length; i++) {
    const item = elems[i];

    if (item.classList.contains(moira.animation.selectorBefore) && isElemInViewport(item, vpart)) {
      item.classList.remove(moira.animation.selectorBefore);
      item.classList.add(moira.animation.selectorAfter);

      // Animate Progress Chart
      if (item.classList.contains(moira.progress.classChart)) {
        const chart = item.querySelector(moira.progress.selectorBar);
        progressChart(
          chart,
          chart.getAttribute(moira.progress.attributeText),
          chart.getAttribute(moira.progress.attributeValue),
          1000
        );
      }

      // Animate Progress Line
      if (item.classList.contains(moira.progress.classLine)) {
        const line = item.querySelector(moira.progress.selectorBar);
        progressLine(
          line,
          line.getAttribute(moira.progress.attributeText),
          line.getAttribute(moira.progress.attributeValue),
          1000
        );
      }
    }
  }
}

/**
 *
 * @param {Object[]} elems
 * @param {number} vpart
 */
function appearElems(elems, vpart) {
  elemsInViewport(elems, vpart);

  window.addEventListener('resize', function () {
    elemsInViewport(elems, vpart);
  });

  window.addEventListener('scroll', function () {
    elemsInViewport(elems, vpart);
  });
}

/**
 * Trigger animation manually
 */
function manualAnimationTrigger() {
  // Animate Progress Bullets
  moira.progress.bullets = document.querySelectorAll(moira.progress.selectorBullets);
  for (let i = 0; i < moira.progress.bullets.length; i++) {
    const bullet = moira.progress.bullets[i];

    bullet.classList.remove(moira.animation.selectorBefore);
    bullet.classList.add(moira.animation.selectorAfter);
  }

  // Animate Progress Chart
  moira.progress.charts = document.querySelectorAll(moira.progress.selectorChart);
  for (let i = 0; i < moira.progress.charts.length; i++) {
    const chartItem = moira.progress.charts[i];
    const chart = chartItem.querySelector(moira.progress.selectorBar);

    progressChart(
      chart,
      chart.getAttribute(moira.progress.attributeText),
      chart.getAttribute(moira.progress.attributeValue),
      1
    );
  }

  // Animate Progress Line
  moira.progress.lines = document.querySelectorAll(moira.progress.selectorLine);
  for (let i = 0; i < moira.progress.lines.length; i++) {
    const lineItem = moira.progress.lines[i];
    const line = lineItem.querySelector(moira.progress.selectorBar);

    progressLine(
      line,
      line.getAttribute(moira.progress.attributeText),
      line.getAttribute(moira.progress.attributeValue),
      1
    );
  }
}

/**
 * Expand element with selectorTrigger
 */
function expander() {
  const triggers = document.querySelectorAll(moira.expander.selectorTrigger);

  for (let i = 0, len = triggers.length; i < len; i++) {
    const trigger = triggers[i];
    trigger.addEventListener('click', function () {
      const triggered = this;
      const triggeredTargetId = triggered.getAttribute(moira.expander.attributeTriggerTargetId);
      const triggeredTargetEl = document.getElementById(triggeredTargetId);
      const triggerContent = triggeredTargetEl ? triggeredTargetEl : triggered.nextElementSibling;
      const triggerText = triggered.innerText;
      const triggerTextAlt = triggered.getAttribute(moira.expander.attributeTextAlt);
      const triggerOnce = triggered.hasAttribute(moira.expander.attributeTriggerOnce);

      /**
       * Add triggered state to trigger
       * */
      if (!triggered.classList.contains(moira.expander.classTrigger)) {
        triggered.classList.add(moira.expander.classTrigger);
        triggered.setAttribute(moira.expander.attributeExpanded, 'true');
      } else {
        triggered.classList.remove(moira.expander.classTrigger);
        triggered.setAttribute(moira.expander.attributeExpanded, 'false');
      }

      /**
       * If initially hidden > show, otherwise hide
       * */
      if (!triggerContent.classList.contains(moira.expander.classVisible)) {
        triggerContent.setAttribute(moira.expander.attributeExpanded, 'true');
        triggerContent.classList.add(moira.expander.classVisible);
      } else {
        triggerContent.classList.remove(moira.expander.classVisible);
        triggerContent.setAttribute(moira.expander.attributeExpanded, 'false');
      }

      /**
       * Add trigger once class
       * */
      if (triggerOnce) {
        triggered.classList.add(moira.expander.classOnce);
      } else if (triggerTextAlt) {
        /**
         * Switch text with alt text
         * */
        triggered.innerText = triggerTextAlt;
        triggered.setAttribute(moira.expander.attributeTextAlt, triggerText);
      }
    });
  }
}

/**
 * Print event listener
 */
function listenPrintEvent() {
  const mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(function (mql) {
    if (mql.matches) {
      console.log('onbeforeprint equivalent');
      manualAnimationTrigger();
    }
  });
}

/**
 * Get mood from
 * @param {Object} moodField
 */
function getMood(moodField) {
  const moodSource = moira.vars.language === 'en' ? '/data/moods-en.json' : '/data/moods-nl.json';
  const request = new XMLHttpRequest();

  request.open('GET', moodSource, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      const moodList = data.moods;

      setMood(moodList, moodField);
    } else {
      console.warn('Bummer.. mood killer, Status: ' + request.statusText);
      moodField.removeEventListener('click', function () {}, false);
    }
  };
  request.onerror = function () {
    // There was a connection error of some sort
  };
  request.send();
}

/**
 * Set mood
 * @param {string[]} moodList
 * @param {Object} moodField
 */
function setMood(moodList, moodField) {
  moodField.innerText = moodList[Math.floor(Math.random() * moodList.length)];
  highlight(moodField);
}

/**
 * Listen for clicks on moodField
 */
function moodListener() {
  const moodField = document.getElementById(moira.mood.idMood);
  moodField.addEventListener('click', function () {
    getMood(moodField);
  });
}

/**
 * Set skype link
 * @param {string} type
 * @param {string} elId
 */
function setSkypeLink(type, elId) {
  const el = document.getElementById(elId);
  const user = el.innerText;

  el.innerHTML = '<a href="skype:' + user + '?' + type + '">' + user + '</a>';
}

/**
 * Highlight element
 * @param {Object} target
 * @param {number} duration
 */
function highlight(target, duration) {
  const timeout = !!duration ? duration : 750;
  target.classList.add('is-highlight');

  window.setTimeout(function () {
    target.classList.remove('is-highlight');
  }, timeout);
}
