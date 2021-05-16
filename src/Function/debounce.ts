let timeout: any = null;
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @return null
 */
export const debounce = (fnc: Function, wait: number) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  timeout = setTimeout(() => {
    typeof fnc === "function" && fnc();
    clearTimeout(timeout);
  }, wait);
};
