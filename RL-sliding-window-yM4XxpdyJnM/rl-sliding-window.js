// Sliding Window concept - limit the number of requests in specific time.
class SlidingWindow {
  queue = [];
  windowTime = 0; // in seconds: 1s = 1000ms
  capacity = 0; // number of request could be handled in particular time frame

  constructor(windowTime, capacity) {
    this.windowTime = windowTime;
    this.capacity = capacity;
  }

  grantAccess() {
    const newRequestTime = Date.now();

    console.log(this.queue);

    this.checkAndUpdateQueue(newRequestTime);

    // Check if there is space for new requests
    if (this.queue.length < this.capacity) {
      this.queue.push(newRequestTime);
      return true;
    }

    return false;
  }

  checkAndUpdateQueue(currentTime) {
    if (!this.queue.length) return;
    
    let timeSecondsCalculated = this.calculateTime(currentTime);

    while (timeSecondsCalculated >= this.windowTime) {
      this.queue.pop();

      if (!this.queue.length) break;

      timeSecondsCalculated = this.calculateTime(currentTime);
    }
  }

  calculateTime(currentTime) {
    const lastQueueIdx = this.queue.length - 1;
    
    return (currentTime - this.queue[lastQueueIdx]) / 1000;
  }
}

module.exports = SlidingWindow;

