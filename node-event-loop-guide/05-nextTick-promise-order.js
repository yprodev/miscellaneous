process.nextTick(() => console.log('1 | nextTick'));
process.nextTick(() => {
  console.log('2 | nextTick');

  process.nextTick(() => console.log('3 | nextTick nested'));
});
process.nextTick(() => console.log('4 | nextTick'));

Promise
  .resolve()
  .then(() => console.log('5 | promise'));

Promise
  .resolve()
  .then(() => {
    console.log('6 | promise');

    process.nextTick(() => console.log('7 | nextTick nested in Promise'));
  });


Promise
  .resolve()
  .then(() => console.log('8 | promise'));

