const log = (text) => () => console.log(text);

setTimeout(log('1 | setTimeout'), 0);
setTimeout(log('2 | setTimeout'), 0);
setTimeout(log('3 | setTimeout'), 0);

process.nextTick(log('4 | nextTick'));
process.nextTick(() => {
  log('5 | nextTick')();

  process.nextTick(log('6 | nextTick nested'));
});

process.nextTick(log('7 | nextTick'));

Promise
  .resolve()
  .then(log('8 | promise'));

Promise
  .resolve()
  .then(() => {
    log('9 | promise')();

    process.nextTick(log('10 | nextTick nested in promise'))
});

Promise
  .resolve()
  .then(log('11 | promise'));

