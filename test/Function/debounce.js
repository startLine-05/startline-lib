"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
var timeout = null;
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @return null
 */
exports.debounce = function (fnc, wait) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    timeout = setTimeout(function () {
        typeof fnc === "function" && fnc();
        clearTimeout(timeout);
    }, wait);
};
