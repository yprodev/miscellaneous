const log = (text) => () => console.log(text);

setTimeout(log('1 | setTimeout: 1000'), 1000);
setTimeout(log('2 | setTimeout: 500'), 500);
setTimeout(log('3 | setTimeout: 0'), 0);

// Output: run the code to see

