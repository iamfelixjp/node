const { readFileSync, writeFileSync } = require('fs');
// another way to access the function readFile()
// const fs = require('fs')
// fs.readFileSync()

// synchronous - readFileSync, writeFileSync
// asynchronous - readFile, writeFile

// Read File
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first);
// console.log(secon);

// Write File - overwrite content if file exist
// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`
// );
// Write File - append content if file exist
writeFileSync('./content/result-sync.txt', ` UPDATED`, { flag: 'a' });
