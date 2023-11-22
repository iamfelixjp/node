const { createReadStream } = require('fs');

// const stream = createReadStream('./01-node-tutorial/content/big.txt');

// stream.on('data', (result) => {
//     console.log(result);
//   });

const stream = createReadStream('./content/big.txt', {
  highWaterMark: 30000,
  encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (err) => console.log(err));
