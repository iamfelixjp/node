const path = require('path');

// console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath); // => \content\subfolder\test.txt

const baseName = path.basename(filePath);
// console.log(baseName); // => test.txt

const absolutePath = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'test.txt'
);
console.log(absolutePath);
