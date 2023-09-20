class TokenBucket {
  bucketCapacity = 0;
  refreshRate = 0; // in seconds
  currentCapacity = 0;
  lastTimeUpdated = null;

  constructor(bucketCapacity, refreshRate) {
    this.bucketCapacity = bucketCapacity;
    this.refreshRate = refreshRate;
    this.currentCapacity = bucketCapacity;
    this.lastTimeUpdated = Date.now();
  }

  grantAccess() {
    this.refreshBucket();

    if (this.currentCapacity > 0) {
      this.currentCapacity = this.currentCapacity - 1;

      return true;
    }

    return false;
  }

  refreshBucket() {
    const currentTime = Date.now();
    const deltaTime = ((currentTime - this.lastTimeUpdated) / 1000);
    const additionalToken = deltaTime * this.refreshRate;

    // If capacity limit exceeded, use bucket capacity instead
    this.currentCapacity = Math.min(
      this.currentCapacity + additionalToken,
      this.bucketCapacity
    );

    this.lastTimeUpdated = currentTime;

    console.log('-------------------------------');
    console.log('cur cap: ', this.currentCapacity);
    console.log('last up: ', this.lastTimeUpdated);
  }
}

module.exports = TokenBucket;

