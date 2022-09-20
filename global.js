//node has a global object which can be used for accessing methods
console.log(global);

global.setTimeout(() => {
  console.log('>>>hello waiting<<<');
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log('>>>in interval<<<');
}, 1000);

const os = require('os');
console.log('>>>os<<<', os.platform(), os.homedir());
