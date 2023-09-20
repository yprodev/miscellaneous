const SlidingWindow = require('./rl-sliding-window.js');

class UserBucketCreator {
  bucket = null;
  
  constructor(id) {
    this.bucket = {};
    this.bucket[id] = new SlidingWindow(1, 10);
  }

  accessApplication(id) {
    if (this.bucket[id].grantAccess()) {
      return console.log('Accessing the application');
    }
    
    return console.log('429: Too many requests');
  }
}

function run() {
  const bucket = new UserBucketCreator('unique_id_1');

  console.log(bucket);

  const interval = setInterval(() => {
    bucket.accessApplication('unique_id_1');
  }, 200);
}

run();

