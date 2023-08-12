const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const callbackOne = () => {
  console.log('first event fires');
};

const callbackTwo = () => {
  console.log('second event fires');
};

const callbackThree = () => {
  console.log('third event fires');
};

myEmitter.on('firstEvent', callbackOne);
myEmitter.on('firstEvent', callbackTwo);
myEmitter.on('firstEvent', callbackThree);

myEmitter.emit('firstEvent');

console.log('Listeners registered --->', myEmitter.listenerCount('firstEvent'));

// Remove listener
myEmitter.off('firstEvent', callbackOne);

// The first event will be skipped
myEmitter.emit('firstEvent');

console.log('Listeners registered --->', myEmitter.listenerCount('firstEvent'));

// You will get the function signatures with names if possible
console.log('RAW listeners registered --->', myEmitter.rawListeners('firstEvent'));

