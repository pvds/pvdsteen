(function () {
  const aa =
    'function' == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (c.get || c.set) throw new TypeError('ES3 does not support getters and setters.');
          a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };
  const g =
    'undefined' != typeof window && window === this
      ? this
      : 'undefined' != typeof global && null != global
      ? global
      : this;
  function k() {
    k = function () {};
    g.Symbol || (g.Symbol = ba);
  }
  let ca = 0;
  function ba(a) {
    return 'jscomp_symbol_' + (a || '') + ca++;
  }
  function l() {
    k();
    let a = g.Symbol.iterator;
    a || (a = g.Symbol.iterator = g.Symbol('iterator'));
    'function' != typeof Array.prototype[a] &&
      aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return m(this);
        },
      });
    l = function () {};
  }
  function m(a) {
    let b = 0;
    return da(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function da(a) {
    l();
    a = { next: a };
    a[g.Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function n(a) {
    if (!(a instanceof Array)) {
      l();
      let b = a[Symbol.iterator];
      a = b ? b.call(a) : m(a);
      for (var c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function ea(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.J = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    for (const d in b)
      if (Object.defineProperties) {
        const e = Object.getOwnPropertyDescriptor(b, d);
        e && Object.defineProperty(a, d, e);
      } else a[d] = b[d];
  }
  const p = window.Element.prototype;
  const q =
    p.matches ||
    p.matchesSelector ||
    p.webkitMatchesSelector ||
    p.mozMatchesSelector ||
    p.msMatchesSelector ||
    p.oMatchesSelector;
  function r(a, b) {
    if (a && 1 == a.nodeType && b) {
      if ('string' == typeof b || 1 == b.nodeType) return a == b || t(a, b);
      if ('length' in b) for (var c = 0, d; (d = b[c]); c++) if (a == d || t(a, d)) return !0;
    }
    return !1;
  }
  function t(a, b) {
    if ('string' != typeof b) return !1;
    if (q) return q.call(a, b);
    b = a.parentNode.querySelectorAll(b);
    for (var c = 0, d; (d = b[c]); c++) if (d == a) return !0;
    return !1;
  }
  function fa(a) {
    for (var b = []; a && a.parentNode && 1 == a.parentNode.nodeType; )
      (a = a.parentNode), b.push(a);
    return b;
  }
  function u(a, b, c) {
    function d(a) {
      let d;
      if (h.composed && 'function' == typeof a.composedPath)
        for (var e = a.composedPath(), f = 0, w; (w = e[f]); f++)
          1 == w.nodeType && r(w, b) && (d = w);
      else
        a: {
          if ((d = a.target) && 1 == d.nodeType && b)
            for (d = [d].concat(fa(d)), e = 0; (f = d[e]); e++)
              if (r(f, b)) {
                d = f;
                break a;
              }
          d = void 0;
        }
      d && c.call(d, a, d);
    }
    const e = document;
    var h = { composed: !0, s: !0 };
    var h = void 0 === h ? {} : h;
    e.addEventListener(a, d, h.s);
    return {
      i: function () {
        e.removeEventListener(a, d, h.s);
      },
    };
  }
  function ha(a) {
    const b = {};
    if (!a || 1 != a.nodeType) return b;
    a = a.attributes;
    if (!a.length) return {};
    for (var c = 0, d; (d = a[c]); c++) b[d.name] = d.value;
    return b;
  }
  const ia = /:(80|443)$/;
  const v = document.createElement('a');
  const x = {};
  function y(a) {
    a = a && '.' != a ? a : location.href;
    if (x[a]) return x[a];
    v.href = a;
    if ('.' == a.charAt(0) || '/' == a.charAt(0)) return y(v.href);
    var b = '80' == v.port || '443' == v.port ? '' : v.port;
    var b = '0' == b ? '' : b;
    const c = v.host.replace(ia, '');
    return (x[a] = {
      hash: v.hash,
      host: c,
      hostname: v.hostname,
      href: v.href,
      origin: v.origin ? v.origin : v.protocol + '//' + c,
      pathname: '/' == v.pathname.charAt(0) ? v.pathname : '/' + v.pathname,
      port: b,
      protocol: v.protocol,
      search: v.search,
    });
  }
  const z = [];
  function A(a, b) {
    const c = this;
    this.context = a;
    this.o = b;
    this.f = (this.c = /Task$/.test(b)) ? a.get(b) : a[b];
    this.b = [];
    this.a = [];
    this.g = function (a) {
      for (var b = [], d = 0; d < arguments.length; ++d) b[d - 0] = arguments[d];
      return c.a[c.a.length - 1].apply(null, [].concat(n(b)));
    };
    this.c ? a.set(b, this.g) : (a[b] = this.g);
  }
  function B(a, b) {
    a.b.push(b);
    C(a);
  }
  function D(a, b) {
    b = a.b.indexOf(b);
    -1 < b && (a.b.splice(b, 1), 0 < a.b.length ? C(a) : a.i());
  }
  function C(a) {
    a.a = [];
    for (var b, c = 0; (b = a.b[c]); c++) {
      const d = a.a[c - 1] || a.f.bind(a.context);
      a.a.push(b(d));
    }
  }
  A.prototype.i = function () {
    const a = z.indexOf(this);
    -1 < a &&
      (z.splice(a, 1), this.c ? this.context.set(this.o, this.f) : (this.context[this.o] = this.f));
  };
  function E(a, b) {
    let c = z.filter(function (c) {
      return c.context == a && c.o == b;
    })[0];
    c || ((c = new A(a, b)), z.push(c));
    return c;
  }
  function F(a, b, c, d, e, h) {
    if ('function' == typeof d) {
      const f = c.get('buildHitTask');
      return {
        buildHitTask: function (c) {
          c.set(a, null, !0);
          c.set(b, null, !0);
          d(c, e, h);
          f(c);
        },
      };
    }
    return G({}, a, b);
  }
  function H(a, b) {
    const c = ha(a);
    const d = {};
    Object.keys(c).forEach(function (a) {
      if (!a.indexOf(b) && a != b + 'on') {
        let e = c[a];
        'true' == e && (e = !0);
        'false' == e && (e = !1);
        a = ja(a.slice(b.length));
        d[a] = e;
      }
    });
    return d;
  }
  function ka(a) {
    let b;
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
      clearTimeout(b);
      b = setTimeout(function () {
        return a.apply(null, [].concat(n(d)));
      }, 500);
    };
  }
  function la(a) {
    function b() {
      c || ((c = !0), a());
    }
    var c = !1;
    setTimeout(b, 2e3);
    return b;
  }
  var G =
    Object.assign ||
    function (a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
      for (var d = 0, e = c.length; d < e; d++) {
        const h = Object(c[d]);
        var f;
        for (f in h) Object.prototype.hasOwnProperty.call(h, f) && (a[f] = h[f]);
      }
      return a;
    };
  function ja(a) {
    return a.replace(/[\-\_]+(\w?)/g, function (a, c) {
      return c.toUpperCase();
    });
  }
  const na = function ma(b) {
    return b
      ? (b ^ ((16 * Math.random()) >> (b / 4))).toString(16)
      : '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, ma);
  };
  function I(a, b) {
    const c = window.GoogleAnalyticsObject || 'ga';
    window[c] =
      window[c] ||
      function (a) {
        for (var b = [], d = 0; d < arguments.length; ++d) b[d - 0] = arguments[d];
        (window[c].q = window[c].q || []).push(b);
      };
    window.gaDevIds = window.gaDevIds || [];
    0 > window.gaDevIds.indexOf('i5iSjo') && window.gaDevIds.push('i5iSjo');
    window[c]('provide', a, b);
    window.gaplugins = window.gaplugins || {};
    window.gaplugins[a.charAt(0).toUpperCase() + a.slice(1)] = b;
  }
  const J = { C: 1, u: 2, D: 3, F: 4, G: 5, w: 6, H: 7, I: 8, A: 9, v: 10 };
  const K = Object.keys(J).length;
  function L(a, b) {
    a.set('\x26_av', '2.4.1');
    var c = a.get('\x26_au');
    var c = parseInt(c || '0', 16).toString(2);
    if (c.length < K) for (let d = K - c.length; d; ) (c = '0' + c), d--;
    b = K - b;
    c = c.substr(0, b) + 1 + c.substr(b + 1);
    a.set('\x26_au', parseInt(c || '0', 2).toString(16));
  }
  function M(a, b) {
    const c = this;
    L(a, J.u);
    if (window.addEventListener) {
      this.a = G({ events: ['click'], fieldsObj: {}, attributePrefix: 'ga-' }, b);
      this.f = a;
      this.c = this.c.bind(this);
      const d = '[' + this.a.attributePrefix + 'on]';
      this.b = {};
      this.a.events.forEach(function (a) {
        c.b[a] = u(a, d, c.c);
      });
    }
  }
  M.prototype.c = function (a, b) {
    var c = this.a.attributePrefix;
    if (
      !(
        0 >
        b
          .getAttribute(c + 'on')
          .split(/\s*,\s*/)
          .indexOf(a.type)
      )
    ) {
      var c = H(b, c);
      const d = G({}, this.a.fieldsObj, c);
      this.f.send(
        c.hitType || 'event',
        F({ transport: 'beacon' }, d, this.f, this.a.hitFilter, b, a)
      );
    }
  };
  M.prototype.remove = function () {
    const a = this;
    Object.keys(this.b).forEach(function (b) {
      a.b[b].i();
    });
  };
  I('eventTracker', M);
  function N(a, b) {
    const c = this;
    L(a, J.w);
    window.addEventListener &&
      ((this.a = G(
        {
          events: ['click'],
          linkSelector: 'a, area',
          shouldTrackOutboundLink: this.shouldTrackOutboundLink,
          fieldsObj: {},
          attributePrefix: 'ga-',
        },
        b
      )),
      (this.c = a),
      (this.f = this.f.bind(this)),
      (this.b = {}),
      this.a.events.forEach(function (a) {
        c.b[a] = u(a, c.a.linkSelector, c.f);
      }));
  }
  N.prototype.f = function (a, b) {
    const c = this;
    if (this.a.shouldTrackOutboundLink(b, y)) {
      const d = b.getAttribute('href') || b.getAttribute('xlink:href');
      var e = y(d);
      var e = {
        transport: 'beacon',
        eventCategory: 'Outbound Link',
        eventAction: a.type,
        eventLabel: e.href,
      };
      const h = G({}, this.a.fieldsObj, H(b, this.a.attributePrefix));
      const f = F(e, h, this.c, this.a.hitFilter, b, a);
      if (
        navigator.sendBeacon ||
        'click' != a.type ||
        '_blank' == b.target ||
        a.metaKey ||
        a.ctrlKey ||
        a.shiftKey ||
        a.altKey ||
        1 < a.which
      )
        this.c.send('event', f);
      else {
        var W = function () {
          window.removeEventListener('click', W);
          if (!a.defaultPrevented) {
            a.preventDefault();
            const b = f.hitCallback;
            f.hitCallback = la(function () {
              'function' == typeof b && b();
              location.href = d;
            });
          }
          c.c.send('event', f);
        };
        window.addEventListener('click', W);
      }
    }
  };
  N.prototype.shouldTrackOutboundLink = function (a, b) {
    a = a.getAttribute('href') || a.getAttribute('xlink:href');
    b = b(a);
    return b.hostname != location.hostname && 'http' == b.protocol.slice(0, 4);
  };
  N.prototype.remove = function () {
    const a = this;
    Object.keys(this.b).forEach(function (b) {
      a.b[b].i();
    });
  };
  I('outboundLinkTracker', N);
  function oa() {
    this.b = {};
  }
  oa.prototype.B = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    (this.b[a] = this.b[a] || []).forEach(function (a) {
      return a.apply(null, [].concat(n(c)));
    });
  };
  const O = {};
  let P = !1;
  let Q;
  function R(a, b) {
    b = void 0 === b ? {} : b;
    this.b = {};
    this.a = a;
    this.l = b;
    this.h = null;
  }
  ea(R, oa);
  function pa(a, b, c) {
    a = ['autotrack', a, b].join(':');
    O[a] || ((O[a] = new R(a, c)), P || (window.addEventListener('storage', qa), (P = !0)));
    return O[a];
  }
  function S() {
    if (null != Q) return Q;
    try {
      window.localStorage.setItem('autotrack', 'autotrack'),
        window.localStorage.removeItem('autotrack'),
        (Q = !0);
    } catch (a) {
      Q = !1;
    }
    return Q;
  }
  R.prototype.get = function () {
    if (this.h) return this.h;
    if (S())
      try {
        this.h = T(window.localStorage.getItem(this.a));
      } catch (a) {}
    return (this.h = G({}, this.l, this.h));
  };
  R.prototype.set = function (a) {
    this.h = G({}, this.l, this.h, a);
    if (S())
      try {
        const b = JSON.stringify(this.h);
        window.localStorage.setItem(this.a, b);
      } catch (c) {}
  };
  function ra(a) {
    a.h = {};
    if (S())
      try {
        window.localStorage.removeItem(a.a);
      } catch (b) {}
  }
  R.prototype.i = function () {
    delete O[this.a];
    Object.keys(O).length || (window.removeEventListener('storage', qa), (P = !1));
  };
  function qa(a) {
    const b = O[a.key];
    if (b) {
      const c = G({}, b.l, T(a.oldValue));
      a = G({}, b.l, T(a.newValue));
      b.h = a;
      b.B('externalSet', a, c);
    }
  }
  function T(a) {
    let b = {};
    if (a)
      try {
        b = JSON.parse(a);
      } catch (c) {}
    return b;
  }
  const U = {};
  function V(a, b, c) {
    this.f = a;
    this.timeout = b || sa;
    this.timeZone = c;
    b = this.b = this.b.bind(this);
    B(E(a, 'sendHitTask'), b);
    try {
      this.c = new Intl.DateTimeFormat('en-US', { timeZone: this.timeZone });
    } catch (d) {}
    this.a = pa(a.get('trackingId'), 'session', { hitTime: 0, isExpired: !1 });
    this.a.get().id || this.a.set({ id: na() });
  }
  V.prototype.isExpired = function (a) {
    a = void 0 === a ? this.a.get().id : a;
    if (a != this.a.get().id) return !0;
    a = this.a.get();
    if (a.isExpired) return !0;
    let b = a.hitTime;
    return b &&
      ((a = new Date()),
      (b = new Date(b)),
      a - b > 6e4 * this.timeout || (this.c && this.c.format(a) != this.c.format(b)))
      ? !0
      : !1;
  };
  V.prototype.b = function (a) {
    const b = this;
    return function (c) {
      a(c);
      var d = c.get('sessionControl');
      c = 'start' == d || b.isExpired();
      var d = 'end' == d;
      const e = b.a.get();
      e.hitTime = +new Date();
      c && ((e.isExpired = !1), (e.id = na()));
      d && (e.isExpired = !0);
      b.a.set(e);
    };
  };
  V.prototype.i = function () {
    const a = this.b;
    D(E(this.f, 'sendHitTask'), a);
    this.a.i();
    delete U[this.f.get('trackingId')];
  };
  var sa = 30;
  function X(a, b) {
    L(a, J.v);
    if (window.addEventListener) {
      this.b = G({ increaseThreshold: 20, sessionTimeout: sa, fieldsObj: {} }, b);
      this.f = a;
      this.c = ta(this);
      this.g = ka(this.g.bind(this));
      this.m = this.m.bind(this);
      this.a = pa(a.get('trackingId'), 'plugins/max-scroll-tracker');
      b = this.b.sessionTimeout;
      const c = this.b.timeZone;
      const d = a.get('trackingId');
      this.j = U[d] ? U[d] : (U[d] = new V(a, b, c));
      b = this.m;
      B(E(a, 'set'), b);
      ua(this);
    }
  }
  function ua(a) {
    100 > (a.a.get()[a.c] || 0) && window.addEventListener('scroll', a.g);
  }
  X.prototype.g = function () {
    var a = document.documentElement;
    var b = document.body;
    var a = Math.min(
      100,
      Math.max(
        0,
        Math.round(
          (window.pageYOffset /
            (Math.max(a.offsetHeight, a.scrollHeight, b.offsetHeight, b.scrollHeight) -
              window.innerHeight)) *
            100
        )
      )
    );
    var b = this.j.a.get().id;
    b != this.a.get().sessionId && (ra(this.a), this.a.set({ sessionId: b }));
    if (this.j.isExpired(this.a.get().sessionId)) ra(this.a);
    else if (
      ((b = this.a.get()[this.c] || 0),
      a > b &&
        ((100 != a && 100 != b) || window.removeEventListener('scroll', this.g),
        (b = a - b),
        100 == a || b >= this.b.increaseThreshold))
    ) {
      const c = {};
      this.a.set(((c[this.c] = a), (c.sessionId = this.j.a.get().id), c));
      a = {
        transport: 'beacon',
        eventCategory: 'Max Scroll',
        eventAction: 'increase',
        eventValue: b,
        eventLabel: String(a),
        nonInteraction: !0,
      };
      this.b.maxScrollMetricIndex && (a['metric' + this.b.maxScrollMetricIndex] = b);
      this.f.send('event', F(a, this.b.fieldsObj, this.f, this.b.hitFilter));
    }
  };
  X.prototype.m = function (a) {
    const b = this;
    return function (c, d) {
      a(c, d);
      const e = {};
      ('object' == typeof c && null !== c ? c : ((e[c] = d), e)).page &&
        ((c = b.c), (b.c = ta(b)), b.c != c && ua(b));
    };
  };
  function ta(a) {
    a = y(a.f.get('page') || a.f.get('location'));
    return a.pathname + a.search;
  }
  X.prototype.remove = function () {
    this.j.i();
    window.removeEventListener('scroll', this.g);
    const a = this.m;
    D(E(this.f, 'set'), a);
  };
  I('maxScrollTracker', X);
  function Y(a, b) {
    L(a, J.A);
    history.pushState &&
      window.addEventListener &&
      ((this.a = G(
        {
          shouldTrackUrlChange: this.shouldTrackUrlChange,
          trackReplaceState: !1,
          fieldsObj: {},
          hitFilter: null,
        },
        b
      )),
      (this.g = a),
      (this.j = location.pathname + location.search),
      (this.c = this.c.bind(this)),
      (this.f = this.f.bind(this)),
      (this.b = this.b.bind(this)),
      (a = this.c),
      B(E(history, 'pushState'), a),
      (a = this.f),
      B(E(history, 'replaceState'), a),
      window.addEventListener('popstate', this.b));
  }
  Y.prototype.c = function (a) {
    const b = this;
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
      a.apply(null, [].concat(n(d)));
      Z(b, !0);
    };
  };
  Y.prototype.f = function (a) {
    const b = this;
    return function (c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
      a.apply(null, [].concat(n(d)));
      Z(b, !1);
    };
  };
  Y.prototype.b = function () {
    Z(this, !0);
  };
  function Z(a, b) {
    setTimeout(function () {
      const c = a.j;
      const d = location.pathname + location.search;
      c != d &&
        a.a.shouldTrackUrlChange.call(a, d, c) &&
        ((a.j = d),
        a.g.set({ page: d, title: document.title }),
        (b || a.a.trackReplaceState) &&
          a.g.send('pageview', F({ transport: 'beacon' }, a.a.fieldsObj, a.g, a.a.hitFilter)));
    }, 0);
  }
  Y.prototype.shouldTrackUrlChange = function (a, b) {
    return !(!a || !b);
  };
  Y.prototype.remove = function () {
    let a = this.c;
    D(E(history, 'pushState'), a);
    a = this.f;
    D(E(history, 'replaceState'), a);
    window.removeEventListener('popstate', this.b);
  };
  I('urlChangeTracker', Y);
})();
// # sourceMappingURL=autotrack.custom.js.map
