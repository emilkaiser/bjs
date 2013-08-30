(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.rnd = {
    alnum: function (length) {
      var i, text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (i = 0; i < length; i = i + 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    num: function (length) {
      return parseInt((Math.random() + '').slice(2,2 + length), 10);
    }
  };
}(this));
