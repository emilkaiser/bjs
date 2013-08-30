(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.track = {
    event: function (category, action, opt_label, opt_value) {
      if (window._gaq) {
        _gaq.push(['_trackEvent', category, action, opt_label, opt_value]);
      }
    }
  };
}(this));
