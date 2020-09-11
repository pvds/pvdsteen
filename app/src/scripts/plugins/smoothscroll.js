function initSmoothScrolling() {
    if (isCssSmoothSCrollSupported()) {
        return;
    }

    // TODO: add to moira variables
    var duration = 400,
        initialOffset = -20,
        anchorTargetAnimationHeight = 150;

    var pageUrl = location.hash
        ? stripHash(location.href)
        : location.href
    ;

    //delegatedLinkHijacking();
    directLinkHijacking();

    function delegatedLinkHijacking() {
        document.body.addEventListener('click', onClick, false);

        function onClick(e) {
            if (!isInPageLink(e.target))
                return;

            e.stopPropagation();
            e.preventDefault();

            jump(e.target.hash, {
                duration: duration,
                offset: offset,
                callback: function() {
                    setFocus(e.target.hash);
                }
            });
        }
    }

    function directLinkHijacking() {
        [].slice.call(document.querySelectorAll('a'))
            .filter(isInPageLink)
            .forEach(function(a) { a.addEventListener('click', onClick, false); })
        ;

        function onClick(e) {
            e.stopPropagation();
            e.preventDefault();

            var navAnchor = this.hash,
                anchorTarget = document.querySelector(navAnchor),
                offset = initialOffset;

            // TODO: check why e.target.hash is sometimes undefined
            // console.log(navAnchor);
            // console.log(e.target.hash);
            // console.log(anchorTarget);

            if(anchorTarget.classList.contains('is-animate')){
                offset = initialOffset - anchorTargetAnimationHeight;
            }

            jump(navAnchor, {
                duration: duration,
                offset: offset,
            });
        }

    }

    function isInPageLink(n) {
        return n.tagName.toLowerCase() === 'a'
            && n.hash.length > 0
            && stripHash(n.href) === pageUrl
        ;
    }

    function stripHash(url) {
        return url.slice(0, url.lastIndexOf('#'));
    }

    function isCssSmoothSCrollSupported() {
        return 'scrollBehavior' in document.documentElement.style;
    }

    // Adapted from:
    // https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
    function setFocus(hash) {
        var element = document.getElementById(hash.substring(1));

        if (element) {
            if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                element.tabIndex = -1;
            }

            element.focus();
        }
    }

}
