const fs = require('fs');

const log = (text) => () => console.log(text);
const readStream = fs.createReadStream(__filename);

// emits close event
readStream.close()

readStream.on('close', log('1 | close'));
setImmediate(log('2 | check'));
setTimeout(log('3 | timer'), 0);

Promise
  .resolve()
  .then(log('4 | promise'));

process.nextTick(log('5 | nextTick'));

