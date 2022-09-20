const fs = require('fs');

// where to readt the data from
const readStream = fs.createReadStream('./docs/blog2.txt', {
  encoding: 'utf-8',
});
//write stream
const writeStream = fs.createWriteStream('./docs/blog3.txt');

//it is an event listener listening to incoming data
readStream.on('data', (chunk) => {
  console.log('>>>new chunk<<<');
  console.log(chunk);
  writeStream.write('write chunk');
  writeStream.write(chunk);
});

//piping(should be from reable to writable)
readStream.pipe(writeStream);
