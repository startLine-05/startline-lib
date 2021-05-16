/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["startline-lib"] = factory();
	else
		root["startline-lib"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./test/Function/debounce.js":
/*!***********************************!*\
  !*** ./test/Function/debounce.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.debounce = void 0;\r\nvar timeout = null;\r\n/**\r\n * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数\r\n *\r\n * @param {Function} func 要执行的回调函数\r\n * @param {Number} wait 延时的时间\r\n * @param {Boolean} immediate 是否立即执行\r\n * @return null\r\n */\r\nvar debounce = function (fnc, wait, immediate) {\r\n    if (timeout) {\r\n        clearTimeout(timeout);\r\n        timeout = null;\r\n    }\r\n    timeout = setTimeout(function () {\r\n        typeof fnc === \"function\" && fnc();\r\n        clearTimeout(timeout);\r\n    }, wait);\r\n};\r\nexports.debounce = debounce;\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Function/debounce.js?");

/***/ }),

/***/ "./test/Function/throttle.js":
/*!***********************************!*\
  !*** ./test/Function/throttle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.throttle = void 0;\r\nvar time;\r\nvar flag = false;\r\n/**\r\n * 节流原理：在一定时间内，只能触发一次\r\n *\r\n * @param {Function} func 要执行的回调函数\r\n * @param {Number} wait 延时的时间\r\n * @param {Boolean} immediate 是否立即执行\r\n * @return null\r\n */\r\nvar throttle = function (fnc, wait, immediate) {\r\n    if (immediate) {\r\n        if (!flag) {\r\n            flag = true;\r\n            // 如果是立即执行，则在wait毫秒内开始时执行\r\n            typeof fnc === \"function\" && fnc();\r\n            time = setTimeout(function () {\r\n                flag = false;\r\n            }, wait);\r\n        }\r\n    }\r\n    else {\r\n        if (!flag) {\r\n            flag = true;\r\n            // 如果是非立即执行，则在wait毫秒内的结束处执行\r\n            time = setTimeout(function () {\r\n                typeof fnc === \"function\" && fnc();\r\n                flag = false;\r\n            }, wait);\r\n        }\r\n    }\r\n};\r\nexports.throttle = throttle;\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Function/throttle.js?");

/***/ }),

/***/ "./test/Object/deepClone.js":
/*!**********************************!*\
  !*** ./test/Object/deepClone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.deepClone = void 0;\r\n// 判断arr是否为一个数组，返回一个bool值\r\nfunction isArray(arr) {\r\n    return Object.prototype.toString.call(arr) === \"[object Array]\";\r\n}\r\n// 深度克隆\r\nvar deepClone = function (obj) {\r\n    if ([null, undefined, NaN, false].includes(obj)) {\r\n        return obj;\r\n    }\r\n    if (typeof obj !== \"object\" && typeof obj !== \"function\") {\r\n        return obj;\r\n    }\r\n    var newObJ = isArray(obj) ? [] : {};\r\n    for (var i in obj) {\r\n        if (obj.hasOwnProperty(i)) {\r\n            newObJ[i] = typeof obj[i] === \"object\" ? exports.deepClone(obj[i]) : obj[i];\r\n        }\r\n    }\r\n    return newObJ;\r\n};\r\nexports.deepClone = deepClone;\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Object/deepClone.js?");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar deepClone_1 = __webpack_require__(/*! ./Object/deepClone */ \"./test/Object/deepClone.js\");\r\nvar debounce_1 = __webpack_require__(/*! ./Function/debounce */ \"./test/Function/debounce.js\");\r\nvar throttle_1 = __webpack_require__(/*! ./Function/throttle */ \"./test/Function/throttle.js\");\r\nexports.default = {\r\n    deepClone: deepClone_1.deepClone,\r\n    throttle: throttle_1.throttle,\r\n    debounce: debounce_1.debounce,\r\n};\r\n//测试用例\r\n\n\n//# sourceURL=webpack://startline-lib/./test/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./test/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});