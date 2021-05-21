import { deepClone } from "./Object/deepClone"; //深拷贝
//数组方法
import {
  randomArray,
  toRepeatArray,
  intersectArray,
} from "./Object/arrayMethod";
//工具函数
import { debounce } from "./Function/debounce"; //防抖
import { throttle } from "./Function/throttle"; //节流
import { timeFormat } from "./Function/timeFormat"; //时间格式化
import { timeFrom } from "./Function/timeFrom"; //时间格式化多少时间前
export default {
  //函数部分
  deepClone,
  //数组部分
  randomArray,
  toRepeatArray,
  intersectArray,
  //函数部分
  throttle,
  debounce,
  timeFormat,
  timeFrom,
};
let a = [2, 7, 4, 1, 5];
let b = [2, 3, 4];
console.log(randomArray(a));
console.log(intersectArray(a, b));
