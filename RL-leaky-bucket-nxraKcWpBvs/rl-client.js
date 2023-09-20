const LeakyBucket = require('./rl-leaky-bucket.js');

class UserBucketCreator {
  bucket = null;
  
  constructor(id) {
    this.bucket = {};
    this.bucket[id] = new LeakyBucket(10);
  }

  accessApplication(id) {
    if (this.bucket[id].grantAccess()) {
      return console.log('Accessing the application');
    }
    
    return console.log('429: Too many requests');
  }
}

function run() {
  const bucket = new UserBucketCreator('leaky_bucket_user_1');

  console.log(bucket);

  const interval = setInterval(() => {
    bucket.accessApplication('leaky_bucket_user_1');
  }, 200);
}

run();

