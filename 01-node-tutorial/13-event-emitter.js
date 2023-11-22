// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

const EventEmitter = require('events');

const customeEmitter = new EventEmitter();

customeEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customeEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customeEmitter.emit('response', 'felix', 45);
