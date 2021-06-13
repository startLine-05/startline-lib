// 建立接口声明文件 https://ts.xcatliu.com/basics/declaration-files.html
declare global {
  interface Function {
    myCall(ontext: any, ...arr: any[]): any;
    myApply(ontext: any, ...arr: any[]): any;
    myBind(context: any, ...arr: any[]);
  }
}
export {};
