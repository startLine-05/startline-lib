import { deepClone } from "./Object/objectMethod"; //深拷贝
//数组方法
import {
  randomArray, //打乱数组
  toRepeatArray, //去重
  unionArray, //取并集
  intersectArray, //取交集
  divisionArray, //数组分割
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
  unionArray,
  intersectArray,
  divisionArray,
  //函数部分
  throttle,
  debounce,
  timeFormat,
  timeFrom,
};
let a = [2, 7, 4, 1, 5];
let b = [2, 3, 4];
console.log(timeFormat("1411613805", "y-|-mm-|-d"));
