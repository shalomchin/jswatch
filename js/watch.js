function Stopwatch() {
	var time = 0;
  var interval;
  var offset;
  
  function update() {
    time += timepassed();
    console.log(time);
  }

  function timepassed() {
    var now = Date.now();
    var timepassed = now - offset;
    offset = now;
    return timepassed; 
  };

  function timems() {};

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update, 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };
  this.reset = function() {
    time = 0;
  };
}

