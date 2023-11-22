// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const secret = 'SUPER SECRET'
// const grace = 'grace';
// const stella = 'stella';

// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

// sayHi('felix');
// sayHi(grace);
// sayHi(stella);

const names = require('./04-names');
const { grace, stella } = require('./04-names');
const sayHi = require('./05-utils');

// console.log(names);
// console.log(names.grace);
// console.log(names.stella);
require('./07-mind-granade');
sayHi('felix');
sayHi(grace);
sayHi(stella);
