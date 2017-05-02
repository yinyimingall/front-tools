//main.js  webpack的单一入口文件
var greet = require('./Greet.js');
var babel = require('./babel.js');
require('./main.css');
var $root = document.getElementById('root');
$root.appendChild(greet());
babel();
