"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectMethod_1 = require("./Object/objectMethod"); //深拷贝
//数组方法
var arrayMethod_1 = require("./Object/arrayMethod");
//工具函数
var debounce_1 = require("./Function/debounce"); //防抖
var throttle_1 = require("./Function/throttle"); //节流
var timeFormat_1 = require("./Function/timeFormat"); //时间格式化
var timeFrom_1 = require("./Function/timeFrom"); //时间格式化多少时间前
var common_1 = require("./Function/common");
exports.default = {
    //函数部分
    deepClone: objectMethod_1.deepClone,
    //数组部分
    randomArray: arrayMethod_1.randomArray,
    toRepeatArray: arrayMethod_1.toRepeatArray,
    unionArray: arrayMethod_1.unionArray,
    intersectArray: arrayMethod_1.intersectArray,
    divisionArray: arrayMethod_1.divisionArray,
    //函数部分
    throttle: throttle_1.throttle,
    debounce: debounce_1.debounce,
    timeFormat: timeFormat_1.timeFormat,
    timeFrom: timeFrom_1.timeFrom,
    create: common_1.create,
};
