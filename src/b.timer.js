(function (root) {
  if (!root.bjs) {
    root.bjs = {};
  }

  root.bjs.timer = function (start) {
    // sniffing...
    this.d = Date.now || function() {
      return +new Date(); // + (unary) operator casts date to number
    };
    if (start) {
      this.start();
    }
  };

  root.bjs.timer.prototype = {
    start: function () {
      this.startTime = this.d();
      return this;
    },
    stop: function () {
      this.endTime = this.d();
      return this;
    },
    result: function () {
      return ((this.endTime || this.d()) - this.startTime) / 1000;
    }
  };
}(this));
