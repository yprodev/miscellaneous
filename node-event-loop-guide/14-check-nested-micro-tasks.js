const fs = require('fs');

const log = (text) => () => console.log(text);

fs.readFile(__filename, () => {
  log('1 | io')();

  setImmediate(log('2 | check (setImmediate) nested'));

  process.nextTick(log('3 | nextTick nested'));

  Promise
    .resolve()
    .then(log('4 | promise nested'));

});


process.nextTick(log('5 | nextTick'));

Promise
  .resolve()
  .then(log('6 | promise'));

setTimeout(log('7 | timers'));

for (let i = 0; i < 2_000_000_000; i++) {}

