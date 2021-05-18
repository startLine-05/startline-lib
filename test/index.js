"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepClone_1 = require("./Object/deepClone"); //深拷贝
//工具函数 
var debounce_1 = require("./Function/debounce"); //防抖 
var throttle_1 = require("./Function/throttle"); //节流
var timeFormat_1 = require("./Function/timeFormat"); //时间格式化
var timeFrom_1 = require("./Function/timeFrom"); //时间格式化多少时间前
exports.default = {
    deepClone: deepClone_1.deepClone,
    throttle: throttle_1.throttle,
    debounce: debounce_1.debounce,
    timeFormat: timeFormat_1.timeFormat,
    timeFrom: timeFrom_1.timeFrom
};
