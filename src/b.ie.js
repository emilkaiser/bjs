(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.ie = (function () {
    var undef, v = 3, div = document.createElement('div');
    while (
      div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
      div.getElementsByTagName('i')[0]
    );
    return v> 4 ? v : undef;
  }());
  if (window.Booli) {
    Booli.ie = bjs.ie;
  } else {
    window.Booli = {ie: bjs.ie};
  }
}(this));
