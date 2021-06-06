const { EventEmitter } = require("events");
const ev = new EventEmitter();

ev.once('saySomething', (message) => {
    console.log(`eu te ouvi, ${message}` );
});

ev.emit('saySomething', 'Jade');
ev.emit('saySomething', 'Thaina');
ev.emit('saySomething', 'Luiz');