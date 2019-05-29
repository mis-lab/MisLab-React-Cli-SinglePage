const path = require('path');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
// const DefinePlugin = require('webpack/lib/DefinePlugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  resolve: {
    // 针对npm中的第三方模块优先用jsnext:main指向ES6模块化语法的的文件
    mainFields: ['jsnext:main', 'browser', 'main']
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  plugins: [
    new ModuleConcatenationPlugin(),
    new DllReferencePlugin({
      // react 动态链接库文件内容
      manifest: require('../dll/react.manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll', 'react.dll.js')
    }),
    // 使用 ParallelUglifyPlugin 并行压缩输出的 JS
    new ParallelUglifyPlugin({
      exclude: /node_modules/,
      // UglifyJS 的参数
      uglifyJS: {
        output: {
          // 紧凑输出
          beautify: false,
          // 去除注释
          comments: false
        },
        compress: {
          // 删除无用代码时不产生警告
          warnings: false,
          // 去除所有的 console
          drop_console: true,
          // 内嵌定义但只用到一次的变量
          collapse_vars: true,
          // 提取出使用多次但没有定义为变量的静态值
          reduce_vars: true
        }
      }
    })
  ]
};

module.exports = prodConfig;
