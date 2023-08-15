const fs = require('fs');
const log = (text) => () => console.log(text);

fs.readFile(__filename, log('1 | io callback'));

process.nextTick(log('2 | nextTick'));

Promise
  .resolve()
  .then(log('3 | promise'));




