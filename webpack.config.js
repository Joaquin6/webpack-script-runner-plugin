const path = require('path');
const webpack = require('webpack');

const WebpackShellPlugin = require('./lib');

module.exports = {
  watch: true,
  entry: path.resolve(__dirname, 'test/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  /*devServer: {
    contentBase: path.resolve(__dirname, 'test')
  },*/
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['node test.js'],
      onBuildEnd:['echo "Webpack End"'],
      safe: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
