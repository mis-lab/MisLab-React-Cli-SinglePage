const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  }
}

module.exports = prodConfig;