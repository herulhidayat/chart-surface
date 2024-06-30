/* eslint-disable @typescript-eslint/no-unused-vars */
window.FontAwesomeKitConfig = {
  asyncLoading: {
    enabled: false,
  },
  autoA11y: {
    enabled: true,
  },
  baseUrl: 'https://kit-pro.fontawesome.com',
  detectConflictsUntil: null,
  license: 'pro',
  method: 'js',
  minify: {
    enabled: true,
  },
  v4FontFaceShim: {
    enabled: true,
  },
  v4shim: {
    enabled: true,
  },
  version: 'latest',
};
!(function () {
  // document.querySelectorAll('.ei').forEach((elem) => {
  //   console.log(elem.getAttribute('class'));
  // });

  // document.addEventListener('DOMContentLoaded', function(event) {
  //   console.log('DOMContentLoaded before classapp:', document.getElementById('root').outerHTML);
  //   console.log(document.getElementById("ei"))
  // });

  function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

// ready(function(){
//   console.log(document.getElementById("ei"))
// });
  
  function r(e) {
    var t,
      n = [],
      i = document,
      o = i.documentElement.doScroll,
      r = 'DOMContentLoaded',
      a = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);
    a ||
      i.addEventListener(
        r,
        (t = function () {
          for (i.removeEventListener(r, t), a = 1; (t = n.shift()); ) t();
        })
      ),
      a ? setTimeout(e, 0) : n.push(e);
  }
  !(function () {
    if (
      !(void 0 === window.Element || 'classList' in document.documentElement)
    ) {
      var e,
        t,
        n,
        i = Array.prototype,
        o = i.push,
        r = i.splice,
        a = i.join;
      (d.prototype = {
        add: function (e) {
          this.contains(e) ||
            (o.call(this, e), (this.el.className = this.toString()));
        },
        contains: function (e) {
          return -1 != this.el.className.indexOf(e);
        },
        item: function (e) {
          return this[e] || null;
        },
        remove: function (e) {
          if (this.contains(e)) {
            for (var t = 0; t < this.length && this[t] != e; t++);
            r.call(this, t, 1), (this.el.className = this.toString());
          }
        },
        toString: function () {
          return a.call(this, ' ');
        },
        toggle: function (e) {
          return (
            this.contains(e) ? this.remove(e) : this.add(e), this.contains(e)
          );
        },
      }),
        (window.DOMTokenList = d),
        (e = Element.prototype),
        (t = 'classList'),
        (n = function () {
          return new d(this);
        }),
        Object.defineProperty
          ? Object.defineProperty(e, t, {
              get: n,
            })
          : e.__defineGetter__(t, n);
    }

    function d(e) {
      for (
        var t = (this.el = e).className.replace(/^\s+|\s+$/g, '').split(/\s+/),
          n = 0;
        n < t.length;
        n++
      )
        o.call(this, t[n]);
    }
  })();

  function a(e) {
    var t, n, i, o;
    (prefixesArray = e || ['fa']),
      (prefixesSelectorString = '.' + Array.prototype.join.call(e, ',.')),
      (t = document.querySelectorAll(prefixesSelectorString)),
      Array.prototype.forEach.call(t, function (e) {
        (n = e.getAttribute('title')),
          e.setAttribute('aria-hidden', 'true'),
          (i =
            !e.nextElementSibling ||
            !e.nextElementSibling.classList.contains('sr-only')),
          n &&
            i &&
            (((o = document.createElement('span')).innerHTML = n),
            o.classList.add('sr-only'),
            e.parentNode.insertBefore(o, e.nextSibling));
      });
  }
  var d = function (e, t) {
      var n = document.createElement('link');
      (n.href = e),
        (n.media = 'all'),
        (n.rel = 'stylesheet'),
        t &&
          t.detectingConflicts &&
          t.detectionIgnoreAttr &&
          n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),
        document.getElementsByTagName('head')[0].appendChild(n);
    },
    c = function (e, t) {
      !(function (e, t) {
        var n,
          i = (t && t.before) || void 0,
          o = (t && t.media) || void 0,
          r = window.document,
          a = r.createElement('link');
        if (
          (t &&
            t.detectingConflicts &&
            t.detectionIgnoreAttr &&
            a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),
          i)
        )
          n = i;
        else {
          var d = (r.body || r.getElementsByTagName('head')[0]).childNodes;
          n = d[d.length - 1];
        }
        var c = r.styleSheets;
        (a.rel = 'stylesheet'),
          (a.href = e),
          (a.media = 'only x'),
          (function e(t) {
            if (r.body) return t();
            setTimeout(function () {
              e(t);
            });
          })(function () {
            n.parentNode.insertBefore(a, i ? n : n.nextSibling);
          });
        var s = function (e) {
          for (var t = a.href, n = c.length; n--; )
            if (c[n].href === t) return e();
          setTimeout(function () {
            s(e);
          });
        };

        function l() {
          a.addEventListener && a.removeEventListener('load', l),
            (a.media = o || 'all');
        }
        a.addEventListener && a.addEventListener('load', l),
          (a.onloadcssdefined = s)(l);
      })(e, t);
    },
    e = function (e, t, n) {
      var i = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
        o = t && void 0 !== t.async ? t.async : void 0,
        r = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
        a = document.createElement('script'),
        d = document.scripts[0];
      (a.src = e),
        void 0 !== r && a.setAttribute('data-auto-a11y', r ? 'true' : 'false'),
        i &&
          (a.setAttributeNode(document.createAttribute('data-auto-fetch-svg')),
          a.setAttribute('data-fetch-svg-from', t.fetchSvgFrom)),
        o && a.setAttributeNode(document.createAttribute('defer')),
        n &&
          n.detectingConflicts &&
          n.detectionIgnoreAttr &&
          a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)),
        d.parentNode.appendChild(a);
    };

  function s(e, t) {
    var n = (t && t.addOn) || '',
      i = (t && t.baseFilename) || e.license + n,
      o = t && t.minify ? '.min' : '',
      r = (t && t.fileSuffix) || e.method,
      a = (t && t.subdir) || e.method;
    return (
      e.baseUrl +
      '/releases/' +
      ('latest' === e.version ? 'latest' : 'v'.concat(e.version)) +
      '/' +
      a +
      '/' +
      i +
      o +
      '.' +
      r
    );
  }
  var t, n, i, o, l;
  try {
    if (window.FontAwesomeKitConfig) {
      var u,
        f = window.FontAwesomeKitConfig,
        m = {
          detectingConflicts:
            f.detectConflictsUntil &&
            new Date() <= new Date(f.detectConflictsUntil),
          detectionIgnoreAttr: 'data-fa-detection-ignore',
          detectionTimeoutAttr: 'data-fa-detection-timeout',
          detectionTimeout: null,
        };

      'js' === f.method &&
        ((o = m),
        (l = {
          async: (i = f).asyncLoading.enabled,
          autoA11y: i.autoA11y.enabled,
        }),
        'pro' === i.license &&
          ((l.autoFetchSvg = !0),
          (l.fetchSvgFrom =
            i.baseUrl +
            '/releases/' +
            ('latest' === i.version ? 'latest' : 'v'.concat(i.version)) +
            '/svgs')),
        i.v4shim.enabled &&
          e(
            s(i, {
              addOn: '-v4-shims',
              minify: i.minify.enabled,
            })
          ),
        e(
          s(i, {
            minify: i.minify.enabled,
          }),
          l,
          o
        )),
        'css' === f.method &&
          (function (e, t) {
            var n,
              i = a.bind(a, ['fa', 'fab', 'fas', 'far', 'fal', 'fad']);
            e.autoA11y.enabled &&
              (r(i),
              (n = i),
              'undefined' != typeof MutationObserver &&
                new MutationObserver(n).observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              e.v4shim.enabled &&
                (e.license,
                e.asyncLoading.enabled
                  ? c(
                      s(e, {
                        addOn: '-v4-shims',
                        minify: e.minify.enabled,
                      }),
                      t
                    )
                  : d(
                      s(e, {
                        addOn: '-v4-shims',
                        minify: e.minify.enabled,
                      }),
                      t
                    ));
            e.v4FontFaceShim.enabled &&
              (e.asyncLoading.enabled
                ? c(
                    s(e, {
                      addOn: '-v4-font-face',
                      minify: e.minify.enabled,
                    }),
                    t
                  )
                : d(
                    s(e, {
                      addOn: '-v4-font-face',
                      minify: e.minify.enabled,
                    }),
                    t
                  ));
            var o = s(e, {
              minify: e.minify.enabled,
            });
            e.asyncLoading.enabled ? c(o, t) : d(o, t);
          })(f, m),
        m.detectingConflicts &&
          ((u = document.currentScript.getAttribute(m.detectionTimeoutAttr)) &&
            (m.detectionTimeout = u),
          document.currentScript.setAttributeNode(
            document.createAttribute(m.detectionIgnoreAttr)
          ),
          (t = f),
          (n = m),
          r(function () {
            var e = document.createElement('script');
            n &&
              n.detectionIgnoreAttr &&
              e.setAttributeNode(
                document.createAttribute(n.detectionIgnoreAttr)
              ),
              n &&
                n.detectionTimeoutAttr &&
                n.detectionTimeout &&
                e.setAttribute(n.detectionTimeoutAttr, n.detectionTimeout),
              (e.src = s(t, {
                baseFilename: 'conflict-detection',
                fileSuffix: 'js',
                subdir: 'js',
                minify: t.minify.enabled,
              })),
              (e.async = !0),
              document.body.appendChild(e);
          }));
    }
  } catch (e) {}
})();


var ready = (function(){

  var readyList,
      DOMContentLoaded,
      class2type = {};
      class2type["[object Boolean]"] = "boolean";
      class2type["[object Number]"] = "number";
      class2type["[object String]"] = "string";
      class2type["[object Function]"] = "function";
      class2type["[object Array]"] = "array";
      class2type["[object Date]"] = "date";
      class2type["[object RegExp]"] = "regexp";
      class2type["[object Object]"] = "object";

  var ReadyObj = {
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: false,
      // A counter to track how many items to wait for before
      // the ready event fires. See #6781
      readyWait: 1,
      // Hold (or release) the ready event
      holdReady: function( hold ) {
          if ( hold ) {
              ReadyObj.readyWait++;
          } else {
              ReadyObj.ready( true );
          }
      },
      // Handle when the DOM is ready
      ready: function( wait ) {
          // Either a released hold or an DOMready/load event and not yet ready
          if ( (wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady) ) {
              // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
              if ( !document.body ) {
                  return setTimeout( ReadyObj.ready, 1 );
              }

              // Remember that the DOM is ready
              ReadyObj.isReady = true;
              // If a normal DOM Ready event fired, decrement, and wait if need be
              if ( wait !== true && --ReadyObj.readyWait > 0 ) {
                  return;
              }
              // If there are functions bound, to execute
              readyList.resolveWith( document, [ ReadyObj ] );

              // Trigger any bound ready events
              //if ( ReadyObj.fn.trigger ) {
              //    ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
              //}
          }
      },
      bindReady: function() {
          if ( readyList ) {
              return;
          }
          readyList = ReadyObj._Deferred();

          // Catch cases where $(document).ready() is called after the
          // browser event has already occurred.
          if ( document.readyState === "complete" ) {
              // Handle it asynchronously to allow scripts the opportunity to delay ready
              return setTimeout( ReadyObj.ready, 1 );
          }

          // Mozilla, Opera and webkit nightlies currently support this event
          if ( document.addEventListener ) {
              // Use the handy event callback
              document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
              // A fallback to window.onload, that will always work
              window.addEventListener( "load", ReadyObj.ready, false );

          // If IE event model is used
          } else if ( document.attachEvent ) {
              // ensure firing before onload,
              // maybe late but safe also for iframes
              document.attachEvent( "onreadystatechange", DOMContentLoaded );

              // A fallback to window.onload, that will always work
              window.attachEvent( "onload", ReadyObj.ready );

              // If IE and not a frame
              // continually check to see if the document is ready
              var toplevel = false;

              try {
                  toplevel = window.frameElement == null;
              } catch(e) {}

              if ( document.documentElement.doScroll && toplevel ) {
                  doScrollCheck();
              }
          }
      },
      _Deferred: function() {
          var // callbacks list
              callbacks = [],
              // stored [ context , args ]
              fired,
              // to avoid firing when already doing so
              firing,
              // flag to know if the deferred has been cancelled
              cancelled,
              // the deferred itself
              deferred  = {

                  // done( f1, f2, ...)
                  done: function() {
                      if ( !cancelled ) {
                          var args = arguments,
                              i,
                              length,
                              elem,
                              type,
                              _fired;
                          if ( fired ) {
                              _fired = fired;
                              fired = 0;
                          }
                          for ( i = 0, length = args.length; i < length; i++ ) {
                              elem = args[ i ];
                              type = ReadyObj.type( elem );
                              if ( type === "array" ) {
                                  deferred.done.apply( deferred, elem );
                              } else if ( type === "function" ) {
                                  callbacks.push( elem );
                              }
                          }
                          if ( _fired ) {
                              deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
                          }
                      }
                      return this;
                  },

                  // resolve with given context and args
                  resolveWith: function( context, args ) {
                      if ( !cancelled && !fired && !firing ) {
                          // make sure args are available (#8421)
                          args = args || [];
                          firing = 1;
                          try {
                              while( callbacks[ 0 ] ) {
                                  callbacks.shift().apply( context, args );//shifts a callback, and applies it to document
                              }
                          }
                          finally {
                              fired = [ context, args ];
                              firing = 0;
                          }
                      }
                      return this;
                  },

                  // resolve with this as context and given arguments
                  resolve: function() {
                      deferred.resolveWith( this, arguments );
                      return this;
                  },

                  // Has this deferred been resolved?
                  isResolved: function() {
                      return !!( firing || fired );
                  },

                  // Cancel
                  cancel: function() {
                      cancelled = 1;
                      callbacks = [];
                      return this;
                  }
              };

          return deferred;
      },
      type: function( obj ) {
          return obj == null ?
              String( obj ) :
              class2type[ Object.prototype.toString.call(obj) ] || "object";
      }
  }
  // The DOM ready check for Internet Explorer
  function doScrollCheck() {
      if ( ReadyObj.isReady ) {
          return;
      }

      try {
          // If IE is used, use the trick by Diego Perini
          // http://javascript.nwbox.com/IEContentLoaded/
          document.documentElement.doScroll("left");
      } catch(e) {
          setTimeout( doScrollCheck, 1 );
          return;
      }

      // and execute any waiting functions
      ReadyObj.ready();
  }
  // Cleanup functions for the document ready method
  if ( document.addEventListener ) {
      DOMContentLoaded = function() {
          document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
          ReadyObj.ready();
      };

  } else if ( document.attachEvent ) {
      DOMContentLoaded = function() {
          // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
          if ( document.readyState === "complete" ) {
              document.detachEvent( "onreadystatechange", DOMContentLoaded );
              ReadyObj.ready();
          }
      };
  }
  function ready( fn ) {
      // Attach the listeners
      ReadyObj.bindReady();

      var type = ReadyObj.type( fn );

      // Add the callback
      readyList.done( fn );//readyList is result of _Deferred()
  }
  return ready;
})();

// ready(function(){
//   console.log(document.getElementById("ei"))
// });