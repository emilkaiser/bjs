(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.number = {
    pad: function (n, width, z) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z || '0') + n;
    },
    round: function (n, acc) {
      var factor = Math.pow(10, acc);
      return Math.round(n * factor) / factor;
    },
    // localized to sv_SE, use opts to change
    format: function (n, options) {
      var opts = options || {},
      parts = n.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, opts.thousand || ' ');
      if (parts[1] && opts.decimals) {
        parts[1] = this.round(parseFloat('0.' + parts[1]), opts.decimals).toString().split('.')[1];
        return parts.join(opts.decimal || ',');
      }
      return parts[0];
    },
    random: function (length) {
      return parseInt((Math.random() + '').slice(2,2 + length), 10);
    }
  };
}(this));
