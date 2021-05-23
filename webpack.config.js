const path = require("path"); //引入寻找文件的包，这个node 自带的
const { library } = require("webpack");
module.exports = {
  mode: "production", //development: 开发模式（ production： 线上模式）
  entry: path.resolve(__dirname, "test", "index.js"), //通过文件查找包 查找文件入口（一般源代码都放在src里）
  //打包后的出口
  output: {
    filename: "bundle.js", //打包生成的文件
    // path: path.resolve(__dirname,'dist' ),//打包后的文件夹目录
    path: path.resolve(__dirname, "dist"), //这里生成测试目录下文件 dist test
    library: "startline-lib",
    libraryTarget: "umd", //针对所有模块化
  },
};
