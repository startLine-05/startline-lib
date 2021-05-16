// 判断arr是否为一个数组，返回一个bool值
function isArray(arr: Array<any> | object): boolean {
  return Object.prototype.toString.call(arr) === "[object Array]";
}
//定义任意接口
interface Person {
  [propName: string]: any;
}
// 深度克隆
export const deepClone = (obj: any) => {
  if ([null, undefined, NaN, false].includes(obj)) {
    return obj;
  }
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }
  var newObJ: Person = isArray(obj) ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObJ[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return newObJ;
};
