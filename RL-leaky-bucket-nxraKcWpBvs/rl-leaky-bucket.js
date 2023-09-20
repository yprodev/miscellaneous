class LeakyBucket {
  // Leaky Bucket needs to have blocking queue
  queueLength = 0;
  queue = [];

  // IMPRTANT! The only thing, which is not implemented here
  // is the time limitation. Consider the case that the user reached
  // the maximum number of requests. How is it possible for the user
  // to keep using the system?
  constructor(capacity) {
    this.capacity = capacity;
  }

  // Simplification to create blocking queue in JS
  isFullQueue() {
    if (this.queue.length <= this.capacity) {
      return false;
    }

    return true;
  }

  grantAccess() {
    if (!this.isFullQueue()) {
      // the value, which is going to be written to the queue
      // it is a theoretical / abstract request
      const REQUEST = 1;
      this.queue.unshift(REQUEST);

      return true;
    }

    return false;
  }

}

module.exports = LeakyBucket;

