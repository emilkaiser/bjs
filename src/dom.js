/* global document */
(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.dom = (function (d) {
    var el, id;
    function inject (src, type, options) {
      options = options || {};
      id = 'bjsdl_' + root.bjs.string.hash(src);
      if (d.getElementById(id)) {
        return;
      }
      el = d.createElement(type);
      el.src = src;
      el.id = id;
      if (type !== 'script') {
        el.width = '1';
        el.height = '1';
        el.style.position = 'absolute';
        el.style.left = '-2000px';
        el.style.top = '-2000px';
      } else {
        el.async = true;
      }
      for (var key in options) {
        if (options.hasOwnProperty(key)) {
          el[key] = options[key];
        }
      }
      d.body.appendChild(el);
    }
    return {
      script: function (src, options) {
        inject(src, 'script', options);
      },
      iframe: function (src, options) {
        inject(src, 'iframe', options);
      },
      img: function (src, options) {
        inject(src, 'img', options);
      }
    };
  }(document));
}(this));
