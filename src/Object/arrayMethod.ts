//打乱数组
export const randomArray = <T>(arr: Array<T>): Array<T> => {
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0
  return arr.sort(() => Math.random() - 0.5);
};
//数组去重复
export const toRepeatArray = <T>(arr: Array<T>): Array<T> => {
  return Array.from(new Set(arr));
};
//数组取并集
export const intersectArray = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> => {
  return toRepeatArray(arr1.concat(arr2));
};
