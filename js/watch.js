function Stopwatch(elem) {
	var time = 0;
  var interval;
  var offset;
  
  function update() {
    if (this.isOn) {
      time += timepassed();
    }
    var newtime = formattime(time);
    elem.textContent = newtime;
    // figure out how to replace elam
  }

  function timepassed() {
    var now = Date.now();
    var timepassed = now - offset;
    offset = now;
    return timepassed; 
  };

  function formattime(milliseconds) {
    var time = new Date(milliseconds);
    //TODO: figure out how to replace new
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return minutes + ' : ' + seconds + ' : ' + milliseconds;
  };

  this.isOn = false;

  this.start = function() {
    if (!this.isOn) { 
      //TODO: this isOn needs work
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      // interval = null;
      this.isOn = false;
    }
  };
  this.reset = function() {
    time = 0;
    update();
  };
}

