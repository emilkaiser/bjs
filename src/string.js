(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.string = {
    ucFirst: function (str) {
      str = str + '';
      return str.charAt(0).toUpperCase() + str.substr(1);
    },
    random: function (length) {
      var i,
      text = '',
      possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (i = 0; i < length; i = i + 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    hash: function (str) {
      var hash = 0, i, l, c;
      if (str.length === 0) {
        return hash;
      }
      for (i = 0, l = str.length; i < l; i = i + 1) {
        c  = str.charCodeAt(i);
        hash  = ((hash<<5)-hash)+c;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
  };
}(this));
