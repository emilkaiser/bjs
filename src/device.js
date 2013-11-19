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
  root.bjs.device = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    PHONE: 'phone',
    _type: 'desktop',
    initialize: function () {
      this._type = this.getType(true);
    },
    setType: function () {
      if (root.getComputedStyle) {
        this._type = root.getComputedStyle(document.body, ':after').getPropertyValue('content').replace(/\"/g, '') || this._type;
      }
    },
    getType: function (recalculate) {
      if (recalculate) {
        this.setType();
      }
      return this._type;
    },
    isType: function (check) {
      return this.get() === check;
    },
    isTouch: function () {
      return (window.hasOwnProperty && window.hasOwnProperty('ontouchstart')) || (window.DocumentTouch && document instanceof DocumentTouch);
    }
  };
}(this));
