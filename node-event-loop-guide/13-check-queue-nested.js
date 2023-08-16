const fs = require('fs');

const log = (text) => () => console.log(text);

fs.readFile(__filename, () => {
  log('1 | io')();

  setImmediate(log('2 | check (setImmediated) nested'));
});

process.nextTick(log('3 | nextTick'));

Promise
  .resolve()
  .then(log('4 | promise'));

setTimeout(log('5 | timers'));

for (let i = 0; i < 2_000_000_000; i++) {}

