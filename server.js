var user = require('./user');
// require('./user');
var vasya = new user.User("Вася");
var petya = new user.User("Петя");
// var vasya = new User("Вася");
// var petya = new User("Петя");

vasya.hello(petya);