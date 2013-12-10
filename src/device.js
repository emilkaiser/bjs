/*global DocumentTouch, document, window */
(function (root) {
  'use strict';
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
    getType: function () {
      var type;
      if (root.getComputedStyle) {
        type = root
          .getComputedStyle(document.body, ':after')
          .getPropertyValue('content').replace(/\"/g, '');
      }
      return type || this.DESKTOP;
    },
    is: function (type) {
      if (type === 'touch') {
        return (window.hasOwnProperty && window.hasOwnProperty('ontouchstart')) ||
        (window.DocumentTouch && document instanceof DocumentTouch);
      } else {
        return this.getType() === type;
      }
    },
    not: function (type) {
      return !this.is(type);
    }
  };
}(this));
