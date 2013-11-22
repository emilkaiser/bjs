/* global setTimeout, clearTimeout */
(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }

  /**
   * Loop that does not block the ui/js-thread
   * @param Array/Object mixed the collection to loop over
   * @param Function worker is called at every step with the current value
   * @param Function tick is called at every step with progress information, to update ui etc (optional)
   * @param Function done is called at the end of the loop (optional)
   * @author emilk
   */
  root.bjs.asyncLoop = (function () {
    var sleep = 1, // timeout sleep time
      workers = 5, // How many times the work callback will be called before a timeout is triggered
      itself;
    function asyncLoopInternal(remains, increment, worker, tick, done) {
      var timer, c;
      (function work() {
        c = 0;
        while (remains() && c < workers) {
          worker();
          increment();
          c = c + 1;
        }
        tick();
        if (remains()) {
          timer = setTimeout(work, sleep);
        } else {
          done();
          clearTimeout(timer);
        }
      }());
    }
    itself = function asyncLoop(mixed, worker, tick, done) {
      var i = 0, prop, props = [], workerInternal, length;
      // If it is not an array, prepare it and count keys
      if (Object.prototype.toString.call(mixed) === '[object Array]') {
        length = mixed.length;
        workerInternal = function () {
          worker.call(mixed[i]);
        };
      } else {
        for (prop in mixed) {
          if (mixed.hasOwnProperty(prop)) {
            props.push(prop);
          }
        }
        length = props.length;
        workerInternal = function () {
          worker.call(mixed[props[i]], props[i]);
        };
      }
      asyncLoopInternal(
        function () {
          return i < length;
        },
        function () {
          i = i + 1;
        },
        workerInternal,
        function () {
          if (tick) {
            tick(i, length);
          }
        },
        function () {
          if (done) {
            done(i, length);
          }
        }
      );
    };
    return itself;
  }());
}(this));
