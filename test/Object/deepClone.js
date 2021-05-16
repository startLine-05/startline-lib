"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}
// 深度克隆
var deepClone = function (obj) {
    if ([null, undefined, NaN, false].includes(obj)) {
        return obj;
    }
    if (typeof obj !== "object" && typeof obj !== "function") {
        return obj;
    }
    var newObJ = isArray(obj) ? [] : {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            newObJ[i] = typeof obj[i] === "object" ? exports.deepClone(obj[i]) : obj[i];
        }
    }
    return newObJ;
};
exports.deepClone = deepClone;
