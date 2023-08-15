const fs = require('fs');
const log = (text) => () => console.log(text);

setTimeout(log('1 | setTimeout: 0'), 0);

fs.readFile(__filename, log('2 | io callback'));

// IMPORTANT: run this piece of code several times 
// and check the results

