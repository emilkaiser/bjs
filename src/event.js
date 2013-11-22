(function (root) {
  'use strict';
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.event = {
    getCharCode: function (ev) {
      return parseInt((typeof ev.which == 'number') ? ev.which : ev.keyCode, 10);
    },
    key: {
      BACKSPACE: 8,
      TAB:       9,
      RETURN:   13,
      ESC:      27,
      LEFT:     37,
      UP:       38,
      RIGHT:    39,
      DOWN:     40,
      DELETE:   46,
      HOME:     36,
      END:      35,
      PAGEUP:   33,
      PAGEDOWN: 34,
      INSERT:   45
    }
  };
}(this));
