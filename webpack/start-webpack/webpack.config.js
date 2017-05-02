var webpack = require('webpack')
module.exports = {
  devtool: 'eval-source-map', //生成Source Maps利于调试
  entry: __dirname + '/app/main.js', //入口文件 - 注：__dirname是nodejs中的全局变量，指向当前脚本执行所在的目录
  output: {
    path: __dirname + '/public', //打包后存放路径
    filename: 'bundle.js' //打包后输出文件名
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        //这里的配置项可移至 .babelrc
        // query: {
        //   presets: ['es2015']
        // }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' // !作用是使同一文件可以使用不同的loader
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('this file si created by Martin Yin'),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: './public', //加载目录
    port: "3000", //默认8080
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
}
