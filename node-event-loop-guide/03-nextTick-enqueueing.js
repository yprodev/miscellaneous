console.log('log 1');
process.nextTick(() => console.log('this is process.nextTick log'));
console.log('log 2');

// Output
// log 1
// log 2
// this is process.nextTick log

