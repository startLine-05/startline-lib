//打乱数组
export const randomArray = <T>(arr: Array<T>): Array<T> => {
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.5大于或者小于0
  return arr.sort(() => Math.random() - 0.5);
};
//数组去重复
export const toRepeatArray = <T>(arr: Array<T>): Array<T> => {
  return Array.from(new Set(arr));
};
//两数组取并集
export const unionArray = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> => {
  return toRepeatArray(arr1.concat(arr2));
};
//两取数组的交集
export const intersectArray = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> => {
  return arr1.filter((v) => {
    return arr2.indexOf(v) > -1;
  });
};
//数组等份分割
export const divisionArray = <T>(arr: Array<T>, number: number): Array<T> => {
  let index = 0;
  let length = arr.length;
  let newArr: Array<any> = [];
  while (index < length) {
    newArr.push(arr.slice(index, (index += number)));
  }
  return newArr;
};
