var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'static');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',

  module : {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        include: APP_DIR,
        query: {
          presets: [ "es2015", "react", "react-hmre", "stage-0" ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "raw!postcss") //ExtractTextPlugin.extract("style", ['raw', 'sass', 'postcss'])
      }
    ]
  },

  eslint: {
    configFile: './.eslintrc'
  },

  plugins: [
    new ExtractTextPlugin("main.css")
  ],

  output: {
    path: BUILD_DIR,
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  devServer: {
    historyApiFallback: true
  },

  postcss: function() {
    return [autoprefixer, precss];
  }
};

module.exports = config;