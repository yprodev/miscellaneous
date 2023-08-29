const log = (text) => () => console.log(text);

setTimeout(log('1 | timers'), 0);
setImmediate(log('2 | check (setImmediate)'));

