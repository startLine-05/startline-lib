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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.debounce = void 0;\r\nvar timeout = null;\r\n/**\r\n * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数\r\n *\r\n * @param {Function} func 要执行的回调函数\r\n * @param {Number} wait 延时的时间\r\n * @return null\r\n */\r\nexports.debounce = function (fnc, wait) {\r\n    if (timeout) {\r\n        clearTimeout(timeout);\r\n        timeout = null;\r\n    }\r\n    timeout = setTimeout(function () {\r\n        typeof fnc === \"function\" && fnc();\r\n        clearTimeout(timeout);\r\n    }, wait);\r\n};\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Function/debounce.js?");

/***/ }),

/***/ "./test/Function/throttle.js":
/*!***********************************!*\
  !*** ./test/Function/throttle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.throttle = void 0;\r\nvar time;\r\nvar flag = false;\r\n/**\r\n * 节流原理：在一定时间内，只能触发一次\r\n *\r\n * @param {Function} func 要执行的回调函数\r\n * @param {Number} wait 延时的时间\r\n * @param {Boolean} immediate 是否立即执行\r\n * @return null\r\n */\r\nexports.throttle = function (fnc, wait, immediate) {\r\n    if (immediate) {\r\n        if (!flag) {\r\n            flag = true;\r\n            // 如果是立即执行，则在wait毫秒内开始时执行\r\n            typeof fnc === \"function\" && fnc();\r\n            time = setTimeout(function () {\r\n                flag = false;\r\n            }, wait);\r\n        }\r\n    }\r\n    else {\r\n        if (!flag) {\r\n            flag = true;\r\n            // 如果是非立即执行，则在wait毫秒内的结束处执行\r\n            time = setTimeout(function () {\r\n                typeof fnc === \"function\" && fnc();\r\n                flag = false;\r\n            }, wait);\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Function/throttle.js?");

/***/ }),

/***/ "./test/Function/timeFormat.js":
/*!*************************************!*\
  !*** ./test/Function/timeFormat.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.timeFormat = void 0;\r\n// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序\r\n// 所以这里做一个兼容polyfill的兼容处理\r\nif (!String.prototype.padStart) {\r\n    // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解\r\n    String.prototype.padStart = function (maxLength, fillString) {\r\n        if (fillString === void 0) { fillString = ' '; }\r\n        if (Object.prototype.toString.call(fillString) !== \"[object String]\")\r\n            throw new TypeError('fillString must be String');\r\n        var str = this;\r\n        // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉\r\n        if (str.length >= maxLength)\r\n            return String(str);\r\n        var fillLength = maxLength - str.length, times = Math.ceil(fillLength / fillString.length);\r\n        while (times >>= 1) {\r\n            fillString += fillString;\r\n            if (times === 1) {\r\n                fillString += fillString;\r\n            }\r\n        }\r\n        return fillString.slice(0, fillLength) + str;\r\n    };\r\n}\r\n// 其他更多是格式化有如下:\r\n// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合\r\nfunction timeFormat(dateTime, fmt) {\r\n    if (dateTime === void 0) { dateTime = null; }\r\n    if (fmt === void 0) { fmt = 'yyyy-mm-dd'; }\r\n    dateTime = Number(dateTime);\r\n    // 如果为null,则格式化当前时间\r\n    if (!dateTime)\r\n        dateTime = Number(new Date());\r\n    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式\r\n    if (dateTime.toString().length == 10)\r\n        dateTime *= 1000;\r\n    var date = new Date(dateTime);\r\n    var ret;\r\n    var opt = {\r\n        \"y+\": date.getFullYear().toString(),\r\n        \"m+\": (date.getMonth() + 1).toString(),\r\n        \"d+\": date.getDate().toString(),\r\n        \"h+\": date.getHours().toString(),\r\n        \"M+\": date.getMinutes().toString(),\r\n        \"s+\": date.getSeconds().toString() // 秒\r\n        // 有其他格式化字符需求可以继续添加，必须转化成字符串\r\n    };\r\n    for (var k in opt) {\r\n        ret = new RegExp(\"(\" + k + \")\").exec(fmt);\r\n        if (ret) {\r\n            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, \"0\")));\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    return fmt;\r\n}\r\nexports.timeFormat = timeFormat;\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Function/timeFormat.js?");

/***/ }),

/***/ "./test/Function/timeFrom.js":
/*!***********************************!*\
  !*** ./test/Function/timeFrom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.timeFrom = void 0;\r\nvar timeFormat_1 = __webpack_require__(/*! ./timeFormat */ \"./test/Function/timeFormat.js\");\r\n/**\r\n * 时间戳转为多久之前\r\n * @param String timestamp 时间戳\r\n * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；\r\n * 如果为布尔值false，无论什么时间，都返回多久以前的格式\r\n */\r\nfunction timeFrom(dateTime, format) {\r\n    if (dateTime === void 0) { dateTime = null; }\r\n    if (format === void 0) { format = 'yyyy-mm-dd'; }\r\n    dateTime = Number(dateTime);\r\n    // 如果为null,则格式化当前时间\r\n    if (!dateTime)\r\n        dateTime = Number(new Date());\r\n    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式\r\n    if (dateTime.toString().length == 10)\r\n        dateTime *= 1000;\r\n    var timestamp = +new Date(dateTime);\r\n    var timer = (Number(new Date()) - timestamp) / 1000;\r\n    // 如果小于5分钟,则返回\"刚刚\",其他以此类推\r\n    var tips = '';\r\n    switch (true) {\r\n        case timer < 300:\r\n            tips = '刚刚';\r\n            break;\r\n        case timer >= 300 && timer < 3600:\r\n            tips = Math.floor(timer / 60) + '分钟前';\r\n            break;\r\n        case timer >= 3600 && timer < 86400:\r\n            tips = Math.floor(timer / 3600) + '小时前';\r\n            break;\r\n        case timer >= 86400 && timer < 2592000:\r\n            tips = Math.floor(timer / 86400) + '天前';\r\n            break;\r\n        default:\r\n            // 如果format为false，则无论什么时间戳，都显示xx之前\r\n            if (format === false) {\r\n                if (timer >= 2592000 && timer < 365 * 86400) {\r\n                    tips = Math.floor(timer / (86400 * 30)) + '个月前';\r\n                }\r\n                else {\r\n                    tips = Math.floor(timer / (86400 * 365)) + '年前';\r\n                }\r\n            }\r\n            else {\r\n                tips = timeFormat_1.timeFormat(timestamp, format);\r\n            }\r\n    }\r\n    return tips;\r\n}\r\nexports.timeFrom = timeFrom;\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Function/timeFrom.js?");

/***/ }),

/***/ "./test/Object/arrayMethod.js":
/*!************************************!*\
  !*** ./test/Object/arrayMethod.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.intersectArray = exports.toRepeatArray = exports.randomArray = void 0;\r\n//打乱数组\r\nexports.randomArray = function (arr) {\r\n    // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0\r\n    return arr.sort(function () { return Math.random() - 0.5; });\r\n};\r\n//数组去重复\r\nexports.toRepeatArray = function (arr) {\r\n    return Array.from(new Set(arr));\r\n};\r\n//数组取并集\r\nexports.intersectArray = function (arr1, arr2) {\r\n    return exports.toRepeatArray(arr1.concat(arr2));\r\n};\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Object/arrayMethod.js?");

/***/ }),

/***/ "./test/Object/deepClone.js":
/*!**********************************!*\
  !*** ./test/Object/deepClone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.deepClone = void 0;\r\n// 判断arr是否为一个数组，返回一个bool值\r\nfunction isArray(arr) {\r\n    return Object.prototype.toString.call(arr) === \"[object Array]\";\r\n}\r\n// 深度克隆\r\nexports.deepClone = function (obj) {\r\n    if ([null, undefined, NaN, false].includes(obj)) {\r\n        return obj;\r\n    }\r\n    if (typeof obj !== \"object\" && typeof obj !== \"function\") {\r\n        return obj;\r\n    }\r\n    var newObJ = isArray(obj) ? [] : {};\r\n    for (var i in obj) {\r\n        if (obj.hasOwnProperty(i)) {\r\n            newObJ[i] = typeof obj[i] === \"object\" ? exports.deepClone(obj[i]) : obj[i];\r\n        }\r\n    }\r\n    return newObJ;\r\n};\r\n\n\n//# sourceURL=webpack://startline-lib/./test/Object/deepClone.js?");

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar deepClone_1 = __webpack_require__(/*! ./Object/deepClone */ \"./test/Object/deepClone.js\"); //深拷贝\r\n//数组方法\r\nvar arrayMethod_1 = __webpack_require__(/*! ./Object/arrayMethod */ \"./test/Object/arrayMethod.js\");\r\n//工具函数\r\nvar debounce_1 = __webpack_require__(/*! ./Function/debounce */ \"./test/Function/debounce.js\"); //防抖\r\nvar throttle_1 = __webpack_require__(/*! ./Function/throttle */ \"./test/Function/throttle.js\"); //节流\r\nvar timeFormat_1 = __webpack_require__(/*! ./Function/timeFormat */ \"./test/Function/timeFormat.js\"); //时间格式化\r\nvar timeFrom_1 = __webpack_require__(/*! ./Function/timeFrom */ \"./test/Function/timeFrom.js\"); //时间格式化多少时间前\r\nexports.default = {\r\n    //函数部分\r\n    deepClone: deepClone_1.deepClone,\r\n    //数组部分\r\n    randomArray: arrayMethod_1.randomArray,\r\n    toRepeatArray: arrayMethod_1.toRepeatArray,\r\n    intersectArray: arrayMethod_1.intersectArray,\r\n    //函数部分\r\n    throttle: throttle_1.throttle,\r\n    debounce: debounce_1.debounce,\r\n    timeFormat: timeFormat_1.timeFormat,\r\n    timeFrom: timeFrom_1.timeFrom,\r\n};\r\nvar a = [2, 7, 4, 1, 5];\r\nvar b = [2, 3, 4];\r\nconsole.log(arrayMethod_1.randomArray(a));\r\nconsole.log(arrayMethod_1.intersectArray(a, b));\r\n\n\n//# sourceURL=webpack://startline-lib/./test/index.js?");

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