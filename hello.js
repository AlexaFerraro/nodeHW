// const http = require('http');
// http.createServer(function(request, response) {
//     response.end('Hello NodeJS');
// }).listen(3000, "127.0.0.1", function() {
//     console.log('Сервер начал прослушивание запросов на порту 3000');
// });

const os = require('os');
const greeting = require('./greeting');
const User = require('./user');

var userName = os.userInfo().username;
var alex = new User(userName, 32);

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

alex.displayInfo();
alex.sayHi();

console.log(userName);

