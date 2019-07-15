/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      // Optimization for loading React.
      react: path.resolve(path.join(__dirname, './node_modules/react')),
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              ['@babel/env', { targets: { browsers: 'last 2 versions' } }],
              '@babel/typescript',
              '@babel/react'
            ],
            plugins: [
              ['@babel/proposal-class-properties', { loose: true }], 
              'react-hot-loader/babel'
            ]
          }
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin(), new HtmlWebpackPlugin()]
};