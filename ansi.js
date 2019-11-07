const ansi = require('ansi');
const cursor = ansi(process.stdout);

cursor.blue().bg.yellow().write('Hello NodeJS').reset().bg.reset().write('\n');