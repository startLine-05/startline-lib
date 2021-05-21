"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepClone_1 = require("./Object/deepClone"); //深拷贝
//数组方法
var arrayMethod_1 = require("./Object/arrayMethod");
//工具函数
var debounce_1 = require("./Function/debounce"); //防抖
var throttle_1 = require("./Function/throttle"); //节流
var timeFormat_1 = require("./Function/timeFormat"); //时间格式化
var timeFrom_1 = require("./Function/timeFrom"); //时间格式化多少时间前
exports.default = {
    //函数部分
    deepClone: deepClone_1.deepClone,
    //数组部分
    randomArray: arrayMethod_1.randomArray,
    toRepeatArray: arrayMethod_1.toRepeatArray,
    intersectArray: arrayMethod_1.intersectArray,
    //函数部分
    throttle: throttle_1.throttle,
    debounce: debounce_1.debounce,
    timeFormat: timeFormat_1.timeFormat,
    timeFrom: timeFrom_1.timeFrom,
};
var a = [2, 7, 4, 1, 5];
var b = [2, 3, 4];
console.log(arrayMethod_1.randomArray(a));
console.log(arrayMethod_1.intersectArray(a, b));
