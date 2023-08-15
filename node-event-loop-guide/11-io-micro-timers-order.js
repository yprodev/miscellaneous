const fs = require('fs');
const log = (text) => () => console.log(text);

fs.readFile(__filename, log('1 | io'));

process.nextTick(log('2 | nextTick'));

Promise
  .resolve()
  .then(log('3 | promise'));

setTimeout(log('4 | setTimeout'), 0);

/*
  *
  * To avoid any timer issues from the previous experiment,
  * we add a for loop that does nothing. This ensures that 
  * when control enters the timer queue, the setTimeout() 
  * timer has already elapsed, and the callback is ready to
  * be executed.
  *
  */
for (let i = 0; i < 2_000_000_000; i++) {}

