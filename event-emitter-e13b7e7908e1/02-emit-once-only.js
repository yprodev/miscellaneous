const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('eventOne', () => {
  console.log('will be emitted only once!');
});


myEmitter.emit('eventOne');
myEmitter.emit('eventOne');
myEmitter.emit('eventOne');
myEmitter.emit('eventOne');



