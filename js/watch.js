function Stopwatch() {
	var time = 0;
  var interval;
  var now;
  
  function update() {};
  function timepassed() {};
  function timems() {};

  this.isOn = false;

  this.start = function () {
    if (!this.isOn) {
      interval = setInterval(update, 10);
      now = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function () {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };
  this.reset = function () {
    time = 0;
  };
}

