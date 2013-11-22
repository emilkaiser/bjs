/*global jQuery */
/**
 * https://gist.github.com/kares/956897
 * $.parseParams - parse query string paramaters into an object.
 */
(function() {
  'use strict';
  var re = /([^&=]+)=?([^&]*)/g,
  decodeRE = /\+/g,  // Regex for replacing addition symbol with a space
  decode = function (str) {
    return decodeURIComponent( str.replace(decodeRE, ' ') );
  };
  jQuery.parseParams = function(query) {
    var params = {}, e = re.exec(query);
    while (e) {
      var k = decode(e[1]), v = decode(e[2]);
      if (k.substring(k.length - 2) === '[]') {
        k = k.substring(0, k.length - 2);
        (params[k] || (params[k] = [])).push(v);
      } else {
        params[k] = v;
      }
      e = re.exec(query);
    }
    return params;
  };
})();
