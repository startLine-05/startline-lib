"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersectArray = exports.toRepeatArray = exports.randomArray = void 0;
//打乱数组
exports.randomArray = function (arr) {
    // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0
    return arr.sort(function () { return Math.random() - 0.5; });
};
//数组去重复
exports.toRepeatArray = function (arr) {
    return Array.from(new Set(arr));
};
//数组取并集
exports.intersectArray = function (arr1, arr2) {
    return exports.toRepeatArray(arr1.concat(arr2));
};
