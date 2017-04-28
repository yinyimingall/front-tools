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
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: './public', //加载目录
    port: "3000", //默认8080
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
}
