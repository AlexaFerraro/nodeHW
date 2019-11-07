var ansi = require('ansi');
var cursor = ansi(process.stdout);
cursor.beep();

const hello = require('./hello');
console.log(hello);