//Greet.js
var msg = require('./msg.json');
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "the webpack is worked. this message from Greet.js. Oh......." + msg.greetText;
  return greet;
}
