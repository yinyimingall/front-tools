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
    生成bundle.js

## package.json中的npm脚本
package.json中的snippet

    "scripts": {
      "start": "webpack",
    }

package.json默认指向node_modules/.bin/

npm的`start`是一个特殊的脚本名称。可使用`npm start`执行脚本，其他名称则要使用`npm run {script name}`
