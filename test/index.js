"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepClone_1 = require("./Object/deepClone");
var debounce_1 = require("./Function/debounce");
var throttle_1 = require("./Function/throttle");
exports.default = {
    deepClone: deepClone_1.deepClone,
    throttle: throttle_1.throttle,
    debounce: debounce_1.debounce,
};
//测试用例
