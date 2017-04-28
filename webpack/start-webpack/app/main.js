//main.js
var greet = require('./Greet.js');
var babel = require('./babel.js');
var $root = document.getElementById('root');
$root.appendChild(greet());
babel();
