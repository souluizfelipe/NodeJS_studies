const { EventEmitter } = require("events");
const ev = new EventEmitter();

ev.on('saySomething', (message) => {
    console.log(`eu te ouvi, ${message}` );
});

ev.emit('saySomething', 'Luiz');
ev.emit('saySomething', 'Thaina');
ev.emit('saySomething', 'Jade');