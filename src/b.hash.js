(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.hash = function (str) {
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
  };
}(this));
