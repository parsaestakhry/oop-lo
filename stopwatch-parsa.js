function StopWatch() {
  let startTime = null;
  let endTime = null;
  let running = false;
  let duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch is already running.");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");

    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  this.getDuration = function () {
    return duration;
  };
}
