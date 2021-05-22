"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
var time;
var flag = false;
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
var throttle = function (fnc, wait, immediate) {
    if (immediate) {
        if (!flag) {
            flag = true;
            // 如果是立即执行，则在wait毫秒内开始时执行
            typeof fnc === "function" && fnc();
            time = setTimeout(function () {
                flag = false;
            }, wait);
        }
    }
    else {
        if (!flag) {
            flag = true;
            // 如果是非立即执行，则在wait毫秒内的结束处执行
            time = setTimeout(function () {
                typeof fnc === "function" && fnc();
                flag = false;
            }, wait);
        }
    }
};
exports.throttle = throttle;
