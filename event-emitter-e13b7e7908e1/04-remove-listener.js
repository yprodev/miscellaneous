const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const callbackOne = () => {
  console.log('first event fires');
};

const callbackTwo = () => {
  console.log('second event fires');
};

myEmitter.on('firstEvent', callbackOne);
myEmitter.on('secondEvent', callbackTwo);

myEmitter.emit('firstEvent');
myEmitter.emit('secondEvent');

// Remove listener
myEmitter.off('firstEvent', callbackOne);

// The first event will be skipped
myEmitter.emit('firstEvent');
myEmitter.emit('secondEvent');

