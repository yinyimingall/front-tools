# 入门webpack

How to start webpack

    $ npm init
    $ npm install webpack -g
    $ npm install webpack --save-dev
    $ webpack app/main.js public/bundle.js

## 通过配置文件使用webpack

编写webpack.config.js
```js
//webpack.config.js
module.exports = {
  entry: __dirname + '/app/main.js', //入口文件 - 注：__dirname是nodejs中的全局变量，指向当前脚本执行所在的目录
  output: {
    path: __dirname + '/public', //打包后存放路径
    filename: 'bundle.js' //打包后输出文件名
  }
}
```
    $ webpack
    //生成bundle.js

## package.json中的npm脚本
package.json中的snippet

    "scripts": {
      "start": "webpack",
    }

package.json默认指向node_modules/.bin/

npm的`start`是一个特殊的脚本名称。可使用`npm start`执行脚本，其他名称则要使用`npm run {script name}`

## 生成Source Maps利于调试
    //package.json
    devtool: 'eval-source-map'

devtool选项：`source-map`、`cheap-module-source-map`、`eval-source-map`、`cheap-module-eval-source-map`依次构建速度加快

## webpack构建本地服务器
可监听文件修改，并自动刷新。需要安装`webpack-dev-server`

package.json

    "start": "webpack & webpack-dev-server"

execute

      $ npm install webpack-dev-server --save-dev
      $ npm start

## loaders
loaders作用是将其他格式的文件转换为js。从而通过js管理各式各样的文件

laoders配置项
* `test` 匹配loader所处理的文件扩展名的正则表达式（required）
* `loader` loader的名称 （required）
* `include/execute` 添加必须处理/屏蔽不需处理的文件/文件夹
* `query` 额外设置

以json-loader为例。在Greet.js中通过

    var msg = require('./msg.json');

引入msg.json中的数据

webpack.config.js中的配置
```js
module: {
  loaders: [
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
  ]
}
```

## 用babel写es6
    $ npm install babel-core babel-loader babel-preset-es2015

webpack.config.js中的配置
```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015']
  }
}
```
es6 is elegant.

### 关于babel
babel的配置项可在webpack.config.js中配置
