"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeFormat = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
    // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
    String.prototype.padStart = function (maxLength, fillString) {
        if (fillString === void 0) { fillString = ' '; }
        if (Object.prototype.toString.call(fillString) !== "[object String]")
            throw new TypeError('fillString must be String');
        var str = this;
        // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
        if (str.length >= maxLength)
            return String(str);
        var fillLength = maxLength - str.length, times = Math.ceil(fillLength / fillString.length);
        while (times >>= 1) {
            fillString += fillString;
            if (times === 1) {
                fillString += fillString;
            }
        }
        return fillString.slice(0, fillLength) + str;
    };
}
// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat(dateTime, fmt) {
    if (dateTime === void 0) { dateTime = null; }
    if (fmt === void 0) { fmt = 'yyyy-mm-dd'; }
    dateTime = Number(dateTime);
    // 如果为null,则格式化当前时间
    if (!dateTime)
        dateTime = Number(new Date());
    // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
    if (dateTime.toString().length == 10)
        dateTime *= 1000;
    var date = new Date(dateTime);
    var ret;
    var opt = {
        "y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "h+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "s+": date.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
        ;
    }
    ;
    return fmt;
}
exports.timeFormat = timeFormat;
