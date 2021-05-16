let time: any;
let flag: boolean = false;
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
export const throttle = (fnc: Function, wait: number, immediate: boolean) => {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof fnc === "function" && fnc();
      time = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      time = setTimeout(() => {
        typeof fnc === "function" && fnc();
        flag = false;
      }, wait);
    }
  }
};
