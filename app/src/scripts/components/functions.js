/* Progress Circle */
function progressChart(element, text, value, duration) {
    var circle = new ProgressBar.Circle(element, {
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
                    value: 'translate(-50%, -50%)'
                }
            },
            autoStyleContainer: true,
            alignToBottom: true
        },
        svgStyle: {
            display: 'block',
            width: '100%'
        },
        duration: duration,
        easing: 'easeOut'
    });

    circle.animate(value); // Number from 0.0 to 1.0
}

/* Progress Line */
function progressLine(element, text, value, duration) {
    var line = new ProgressBar.Line(element, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: duration,
        color: moira.vars.themeColor,
        trailColor: moira.progress.trailColor,
        trailWidth: 4,
        svgStyle: {
            width: '100%',
            height: '100%'
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
                    value: 'translate(0, 0)'
                }
            },
            autoStyleContainer: true
        }
    });

    line.animate(value);  // Number from 0.0 to 1.0
}

/* Element In Viewport */
function isElemInViewport(el, vpart) {
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top + vpart <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function elemsInViewport(elems, vpart) {
    for (var i = 0; i < elems.length; i++) {
        var item = elems[i];

        if (item.classList.contains(moira.animation.selectorBefore) && isElemInViewport(item, vpart)) {
            item.classList.remove(moira.animation.selectorBefore);
            item.classList.add(moira.animation.selectorAfter);

            // Animate Progress Chart
            if(item.classList.contains(moira.progress.classChart)){
                var chart = item.querySelector(moira.progress.selectorBar);
                progressChart(chart, chart.getAttribute(moira.progress.attributeText), chart.getAttribute(moira.progress.attributeValue), 1000);
            }

            // Animate Progress Line
            if(item.classList.contains(moira.progress.classLine)){
                var line = item.querySelector(moira.progress.selectorBar);
                progressLine(line, line.getAttribute(moira.progress.attributeText), line.getAttribute(moira.progress.attributeValue), 1000);
            }
        }
    }
}

function appearElems(elems, vpart) {
    elemsInViewport(elems, vpart);

    window.addEventListener('resize', function() {
        elemsInViewport(elems, vpart);
    });

    window.addEventListener('scroll', function() {
        elemsInViewport(elems, vpart);
    });
}

function manualProgressTrigger(){
    // Animate Progress Bullets
    moira.progress.bullets = document.querySelectorAll(moira.progress.selectorBullets);
    for (var i = 0; i < moira.progress.bullets.length; i++) {
        var bullet = moira.progress.bullets[i];

        bullet.classList.remove(moira.animation.selectorBefore);
        bullet.classList.add(moira.animation.selectorAfter);
    }

    // Animate Progress Chart
    moira.progress.charts = document.querySelectorAll(moira.progress.classChart);
    for (var i = 0; i < moira.progress.charts.length; i++) {
        var chartItem = moira.progress.charts[i],
            chart = chartItem.querySelector(moira.progress.selectorBar);

        progressChart(chart, chart.getAttribute(moira.progress.attributeText), chart.getAttribute(moira.progress.attributeValue), 1);
    }

    // Animate Progress Line
    moira.progress.lines = document.querySelectorAll(moira.progress.classLine);
    for (var i = 0; i < moira.progress.lines.length; i++) {
        var lineItem = moira.progress.lines[i],
            line = lineItem.querySelector(moira.progress.selectorBar);

        progressLine(line, line.getAttribute(moira.progress.attributeText), line.getAttribute(moira.progress.attributeValue), 1);
    }
}

function expander(){
    var triggers = document.querySelectorAll(moira.expander.selectorTrigger);

    for (var i = 0, len = triggers.length; i < len; i++) {
        var trigger = triggers[i];
        trigger.addEventListener('click', function(e) {
            var triggered = this,
                triggerContent = triggered.nextElementSibling,
                triggerText = triggered.innerText,
                triggerTextAlt = triggered.getAttribute(moira.expander.attributeTextAlt),
                triggerOnce = triggered.hasAttribute(moira.expander.attributeTriggerOnce);

            /**
             * Add triggered state to trigger
             * */
            if(!triggered.classList.contains(moira.expander.classTrigger)){
                triggered.classList.add(moira.expander.classTrigger);
            } else{
                triggered.classList.remove(moira.expander.classTrigger);
            }

            /**
             * If initially hidden > show, otherwise hide
             * */
            if(!triggerContent.classList.contains(moira.expander.classVisible)){
                triggerContent.classList.add(moira.expander.classVisible);
            } else{
                triggerContent.classList.remove(moira.expander.classVisible);
            }

            /**
             * Add trigger once class
             * */
            if(triggerOnce){
                triggered.classList.add(moira.expander.classOnce);
            } else if(triggerTextAlt){
                /**
                 * Switch text with alt text
                 * */
                triggered.innerText = triggerTextAlt;
                triggered.setAttribute(moira.expander.attributeTextAlt, triggerText);
            }
        });
    }
}


