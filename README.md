# 基于TS 编写的常用工具函数

## 常用JS工具函数


### 安装构建工具
#### 1.安装TS编译
```
npm install -g typescript
```

#### 2.安装webpack
```
npm i webpack webpack-cli -D
```
#### 3.安装VsCode
安装Live Serve 插件

### 运行打包
##### 1.vsCode可以使用如下操作监听TS编译
在vscode中按 Ctrl + Shift + B 弹出对话框
- tsc watch是自动监听，下次保存文件就自动编译
- tsc build是编译一次

##### 2.使用webPaack 监听编译打包
```
npm run watch
```
##### 3.使用Live serve 插件
找到test(测试环境) 目录下index.html,右键Open with Live serve

### 二：使用文档

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


