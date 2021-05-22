"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisionArray = exports.intersectArray = exports.unionArray = exports.toRepeatArray = exports.randomArray = void 0;
//打乱数组
var randomArray = function (arr) {
    // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0
    return arr.sort(function () { return Math.random() - 0.5; });
};
exports.randomArray = randomArray;
//数组去重复
var toRepeatArray = function (arr) {
    return Array.from(new Set(arr));
};
exports.toRepeatArray = toRepeatArray;
//两数组取并集
var unionArray = function (arr1, arr2) {
    return exports.toRepeatArray(arr1.concat(arr2));
};
exports.unionArray = unionArray;
//两取数组的交集
var intersectArray = function (arr1, arr2) {
    return arr1.filter(function (v) {
        return arr2.indexOf(v) > -1;
    });
};
exports.intersectArray = intersectArray;
//数组等份分割
var divisionArray = function (arr, number) {
    var index = 0;
    var length = arr.length;
    var newArr = [];
    while (index < length) {
        newArr.push(arr.slice(index, (index += number)));
    }
    return newArr;
};
exports.divisionArray = divisionArray;
