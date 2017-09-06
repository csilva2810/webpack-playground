var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new UglifyJsPlugin(),
  ]
});