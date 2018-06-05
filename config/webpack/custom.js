var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.optimize.UglifyJsPlugin
  ]
}
