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
main.js是webpack的入口文件。webpack会分析这个入口文件，解析其中包含的依赖关系的各个文件，这些文件（指模块）通过webpack都打包到bundle.js。webpack给每个模块分配唯一id，通过id索引访问模块。页面启动时会先执行main.js中的代码，其他模块在运行require时再执行。

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
可监听文件修改，并自动刷新。需要安装`webpack-dev-server`。这将默认在本地`localhost:8080`上启动一个express静态资源web服务器并且会以监听模式运行webpack。这是通过socket.io服务实时监听变化并及时刷新的。

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

```js
// webpack.config.js
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

```js
// webpack.config.js
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
babel的配置项可在webpack.config.js中配置,也可写到`.babelrc`文件中

## 处理CSS
```js
// webpack.config.js
{
  test: /\.css$/,
  loader: 'style-loader!css-loader?modules' // !作用是使同一文件可以使用不同的loader, !作用是使用css modules
}
```
这里`?modules`是指使用css modules一个组件css样式只用于对应组件

    require('./main.css');

在相应的js文件中导入css

### css预处理
* `less-loader`
* `sass-loader`
* `stylus-loader`

css处理平台postcss

* `postcss-loader`
* `autoprefixer`

    npm i postcss-loader autoprefixer --save-dev

```js
module: {
  laoders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss'
      }
  ],
  postcss: [
    require('autoprefixer') //引入插件
  ]
}
```

## 插件
插件用来完成loader不能完成的工作。webpack内置了一些常用的插件

通过如下配置使用内置插件，第三方需要`npm install`
```js
// webpack.config.js
var webpack = require('webpack')

module: {
  plugins: [
    new webpack.BannerPlugin('this file si created by Martin Yin')
  ]
}
```
bundle.js顶部中出现了我们写的信息

`UglifyJsPlugin` 内置插件，压缩js代码
```js
plugins: [
  new webpack.BannerPlugin('this file si created by Martin Yin'),
  new webpack.optimize.UglifyJsPlugin()
]
```
再次查看bundle.js代码被压缩

# 参考
* [入门Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f)

* [Webpack 中文指南](http://zhaoda.net/webpack-handbook/index.html)
