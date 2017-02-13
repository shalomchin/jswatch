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
    }
  };
  this.stop = function () {};
  this.reset = function () {};
}

