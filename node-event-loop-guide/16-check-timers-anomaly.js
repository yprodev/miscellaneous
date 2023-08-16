const log = (text) => () => console.log(text);

setTimeout(log('1 | timers'), 0);
setTimeout(log('2 | check (setImmediate)'));

