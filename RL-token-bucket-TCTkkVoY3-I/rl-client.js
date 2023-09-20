const TokenBucket = require('./rl-token-bucket.js');

class UserBucketCreator {
  bucket = null;
  
  constructor(id) {
    this.bucket = {};
    // Every second we are refreshing to ten tokens only
    this.bucket[id] = new TokenBucket(10, 1);
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

