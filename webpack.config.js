const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'test', 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './index.html' })],
};
