/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//Greet.js\nvar msg = __webpack_require__(2);\nmodule.exports = function () {\n  var greet = document.createElement('div');\n  greet.textContent = \"the webpack is worked. this message from Greet.js. Oh.......\" + msg.greetText;\n  return greet;\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXQuanM/NzhhZSJdLCJuYW1lcyI6WyJtc2ciLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdyZWV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJncmVldFRleHQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFJQSxNQUFNLG1CQUFBQyxDQUFRLENBQVIsQ0FBVjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsTUFBSUMsUUFBUUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FGLFFBQU1HLFdBQU4sR0FBb0IsaUVBQWlFUCxJQUFJUSxTQUF6RjtBQUNBLFNBQU9KLEtBQVA7QUFDRCxDQUpEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dyZWV0LmpzXHJcbnZhciBtc2cgPSByZXF1aXJlKCcuL21zZy5qc29uJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGdyZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZ3JlZXQudGV4dENvbnRlbnQgPSBcInRoZSB3ZWJwYWNrIGlzIHdvcmtlZC4gdGhpcyBtZXNzYWdlIGZyb20gR3JlZXQuanMuIE9oLi4uLi4uLlwiICsgbXNnLmdyZWV0VGV4dDtcclxuICByZXR1cm4gZ3JlZXQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0dyZWV0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//main.js\nvar greet = __webpack_require__(0);\ndocument.getElementById('root').appendChild(greet());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbImdyZWV0IiwicmVxdWlyZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFaO0FBQ0FDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFdBQWhDLENBQTRDSixPQUE1QyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9tYWluLmpzXHJcbnZhciBncmVldCA9IHJlcXVpcmUoJy4vR3JlZXQuanMnKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKS5hcHBlbmRDaGlsZChncmVldCgpKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"greetText\": \"this message from msg.json. json-loader worded\"\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbXNnLmpzb24/YWJiZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImdyZWV0VGV4dFwiOiBcInRoaXMgbWVzc2FnZSBmcm9tIG1zZy5qc29uLiBqc29uLWxvYWRlciB3b3JkZWRcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9tc2cuanNvblxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);