const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', (msg) => {console.log(msg)});

myEmitter.emit('someEvent', 'the event was emitted');