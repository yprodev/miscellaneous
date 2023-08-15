const fs = require('fs');

console.log('first'); // Main Thread

fs.readFile(__filename, () => {
  console.log('second');
}); // callback will be off-loaded to libuv

console.log('third');

// Output:
// fist
// third
// second

