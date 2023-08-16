const log = (text) => () => console.log(text);

setImmediate(log('1 | check'));
setImmediate(() => {
  log('2 | check')();

  process.nextTick(log('3 | nextTick nested'));

  Promise
    .resolve()
    .then(log('4 | promise nested'));

});
setImmediate(log('5 | check'));

