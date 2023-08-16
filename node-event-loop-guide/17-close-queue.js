const fs = require('fs');

const log = (text) => () => console.log(text);
const readStream = fs.createReadStream(__filename);

readStream.on('close', log('1 | close queue (close event)');

