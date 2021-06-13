"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacefunc = exports.create = void 0;
/**
 * 模拟实现 new 函数
 * @param Fn: Function 构造函数
 * @param items: any[] 传递给构造函数的任意参数 ；
 * @return string
 */
//第一个必须是构造函数,剩下的是传递给构造函数的参数
function create(Fn) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    //创建新的对象
    var obj = new Object();
    //获取构造函数 同时构造函数 和 剩下的参数区分下来 此时arguments剩下的都是传递的参数
    var con = Array.prototype.shift.call(arguments);
    //绑定原型
    obj.__proto__ = con.prototype;
    //将传递的参数指向构造函数使用 同时判断构造函数是否有返回值
    var res = con.apply(obj, arguments);
    return res instanceof Object ? res : obj;
}
exports.create = create;
/**
 * 模拟实现 call 函数
 * @param context: 绑定对象上构造函数
 * @param arr: any[] 传递给绑定函数的任意参数 ；
 * @return string
 */
Function.prototype.myCall = function (context) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    if (context === null || context === undefined) {
        context = window;
    }
    else {
        // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
        context = Object(context);
    }
    // 用于临时储存函数
    var specialPrototype = Symbol("特殊属性Symbol");
    // 函数的this指向隐式绑定到context上
    context[specialPrototype] = this;
    // 通过隐式绑定执行函数并传递参数 并保存结果
    var res = context[specialPrototype].apply(context, arr);
    // 删除临时上下文对象的属性
    delete context[specialPrototype];
    // 返回函数执行结果
    return res;
};
//模拟apply
Function.prototype.myApply = function (context, arr) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    if (context === null || context === undefined) {
        context = window;
    }
    else {
        context = Object(context);
    }
    var specialPrototype = Symbol("特殊属性Symbol");
    context[specialPrototype] = this;
    var res = context[specialPrototype].apply(context, arr);
    delete context[specialPrototype];
    return res;
};
//模拟bind
Function.prototype.myBind = function (context) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    //保存调用函数函数
    var self = this;
    return function () {
        self.myCall.apply(self, __spreadArray([context], arr));
    };
};
//正则表达式
var replacefunc = function (desc) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return desc.replace(/\$\{([^}]+)\}/g, function (match, key) {
        // console.log(match); // ${obj.name} || ${obj.age}
        console.log(key); // obj.name || obj.age
        // console.log(eval(key)); // lily || 90
        return eval(key);
    });
};
exports.replacefunc = replacefunc;
