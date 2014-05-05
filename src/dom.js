/* global document */
(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }

  var imageAndIframeOptions = function (src, options) {
    options = options || {};
    options.src = options.src || src;
    options.width = options.width || 1;
    options.height = options.height || 1;
    options.style = options.style || {};
    options.style.position = 'absolute';
    options.style.left = '-2000px';
    options.style.top = '-2000px';
    return options;
  };

  var isHash = function (obj) {
    return !!(obj && (typeof obj === 'object'));
  };

  var merge = function (dst, src) {
    for (var key in src) {
      if (hasOwnProperty.call(src, key)) {
        if (isHash(src[key])) {
          if (!dst[key]) {
            dst[key] = {};
          }
          merge(dst[key], src[key]);
        } else {
          dst[key] = src[key];
        }
      }
    }
  };

  root.bjs.dom = (function (d) {
    var el, id;
    function inject (hashSeed, type, options) {
      options = options || {};
      id = 'bjsdl_' + root.bjs.string.hash(hashSeed);
      if (d.getElementById(id)) {
        return;
      }
      el = d.createElement(type);
      el.id = id;
      merge(el, options);
      d.body.appendChild(el);
    }
    return {
      script: function (src, options) {
        options = options || {};
        options.async = options.async === undefined ? true : options.async;
        options.src = options.src || src;
        inject(src, 'script', options);
      },
      inlineScript: function (content, options) {
        options = options || {};
        options.innerHTML = options.innerHTML || content;
        inject(options.innerHTML, 'script', options);
      },
      iframe: function (src, options) {
        options = imageAndIframeOptions(src, options);
        inject(src, 'iframe', options);
      },
      img: function (src, options) {
        options = imageAndIframeOptions(src, options);
        inject(src, 'img', options);
      }
    };
  }(document));
}(this));
