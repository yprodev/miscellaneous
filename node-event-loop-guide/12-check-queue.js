const fs = require('fs');

const log = (text) => () => console.log(text);

fs.readFile(__filename, log('1 | io'));

process.nextTick(log('2 | nextTick'));

Promise
  .resolve()
  .then(log('3 | promise'));

setTimeout(log('4 | timers'));

setImmediate(log('5 | check'));

for (let i = 0; i < 2_000_000_000; i++) {}

// Output:
// 2 | nextTick
// 3 | promise
// 4 | timers
// 5 | check
// 1 | io

