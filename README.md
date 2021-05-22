# 基于 TS 编写的常用工具函数

## 常用 JS 工具函数

### 安装构建工具

#### 1.安装 TS 编译

```
npm install -g typescript
```

#### 2.安装 webpack

```
npm i webpack webpack-cli -D
```

#### 3.安装 VsCode

安装 Live Serve 插件

### 运行打包

##### 1.vsCode 可以使用如下操作监听 TS 编译

在 vscode 中按 Ctrl + Shift + B 弹出对话框

- tsc watch 是自动监听，下次保存文件就自动编译
- tsc build 是编译一次

##### 2.使用 webPaack 监听编译打包

```
npm run watch
```

##### 3.使用 Live serve 插件

找到 test(测试环境) 目录下 index.html,右键 Open with Live serve

### 二：使用文档

### 函数类

#### 1.深拷贝函数 deepClone()

```
var obj = {
    a:{
        b:c
    }
}
var newObj = deepClone(obj)
```

#### 2.节流函数 throttle()

```
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
var newObj = deepClone(fnc,wait,immediate)
```

#### 3.防抖函数 debounce()

```
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @return null
 */
var newObj = deepClone(fnc,wait)
```

#### 4.时间格式化

```
/**
 * yyyy:mm:dd|yyyy-mm|yyyy年：mm月：dd日|yyyy年 - mm月 - dd日
 * hh时MM分等,可自定义组合
 * @param {string,number} dateTime 时间戳
 * @param {string} fmt 输出的时间格式
 * @return string
 */
timeFormat(dateTime, fmt):
```

#### 4.时间格式化多久多久以前

```
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 * @return string
 */
timeFrom(dateTime, format)
```

### 数组拓展

#### 1.数组打乱

```
export const randomArray = <T>(arr: Array<T>): Array<T> => {};
```

#### 2.数组去重

```
export const toRepeatArray = <T>(arr: Array<T>): Array<T> => {};
```

#### 3.数组取并集

```
export const unionArray = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> => {};
```

#### 4.两数组取交集

```
const intersectArray = <T>(arr1: Array<T>, arr2: Array<T>): Array<T> => {};
```

#### 5.数组等份分割

```
/**
 * @param Array | arr 数组
 * @param Number | number 多少为一份份数组
 * @return Array
 */
export const divisionArray = <T>(arr: Array<T>, number: number): Array<T> => {};
```
