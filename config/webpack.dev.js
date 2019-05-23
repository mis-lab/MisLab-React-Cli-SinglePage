const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // 服务器根路径
    contentBase: './dist',
    // 打包后自动打开浏览器，设置为 false 即可关闭
    open: true,
    // 端口号
    port: 8090,
    // 开始模块热更替
    hot: true,
    // 及时HMR不生效，也不让浏览器自动刷新
    hotOnly: true,
    // 配置代理
    proxy: {}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  }
}

module.exports = devConfig