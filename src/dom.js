(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.dom = (function (d) {
    var el, id;
    function inject (src, type) {
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
      d.body.appendChild(el);
    }
    return {
      script: function (src) {
        inject(src, 'script');
      },
      iframe: function (src) {
        inject(src, 'iframe');
      },
      img: function (src) {
        inject(src, 'img');
      }
    };
  }(document));
}(this));


