(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

/**
 * Dependant on these rules in css. Change px breakpoints if needed.
 * body:after {
 *   content: 'desktop';
 *   display: none;
 * }
 * @media only screen and (min-device-width: 768px) and (max-device-width: 1023px) {
 *   body:after {
 *     content: 'tablet';
 *   }
 * }
 * @media only screen and (max-device-width: 767px) {
 *   body:after {
 *     content: 'phone';
 *   }
 * }
 */
  root.bjs.screen = {
    _currentScreen: 'desktop',
    initialize: function () {
      this._currentScreen = this.getRecalculated();
    },
    set: function () {
      var screen = this._currentScreen;
      if (root.getComputedStyle) {
        screen = root.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/\"/g, '');
      }
      this._currentScreen = screen || this._currentScreen;
    },
    get: function () {
      return this._currentScreen;
    },
    getRecalculated: function () {
      this.set();
      return this.get();
    },
    is: function (check) {
      return this.get() === check;
    }
  };
}(this));
