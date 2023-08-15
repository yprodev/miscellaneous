const log = (text) => () => console.log(text);

setTimeout(log('1 | setTimeout'), 0);
setTimeout(() => {
  log('2 | setTimeout')();

  process.nextTick(log('3 | nextTick nested in setTimeout'));
}, 0);
setTimeout(log('4 | setTimeout'), 0);

process.nextTick(log('5 | nextTick'));
process.nextTick(() => {
  log('6 | nextTick')();

  process.nextTick(log('7 | nextTick nested in nextTick'));
});
process.nextTick(log('8 | nextTick'));

Promise
  .resolve()
  .then(log('9 | promise'));

Promise
  .resolve()
  .then(() => {
    log('10 | promise')();

    process.nextTick(log('11 | nextTick nested in promise'));
});

Promise
  .resolve()
  .then(log('12 | promise'));

