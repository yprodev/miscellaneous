Promise.resolve().then(() => console.log('Promise log'));
process.nextTick(() => console.log('nextTick log'));

// Output:
// nextTick log
// Promise log

