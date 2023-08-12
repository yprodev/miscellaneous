const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function firstCallback() {
  console.log('an event occurred!');
}

function secondCallback() {
  console.log('yet another event occurred!');
}

myEmitter.on('eventOne', firstCallback); // registered listener
myEmitter.on('eventOne', secondCallback); // registered listener

myEmitter.emit('eventOne');

