var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin("main.css");

var BUILD_DIR = path.resolve(__dirname, 'static');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',

  output: {
    path: BUILD_DIR,
    publicPath: '/static/',
    filename: 'bundle.js'
  },

  module : {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: APP_DIR,
        options: {
          presets: [ "es2015", "react", "stage-0" ]
        }
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        }),
      },
    ],
  },

  plugins: [
    extractSass,
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: './.eslintrc'
        },
        postcss: function() {
          return [autoprefixer, precss];
        }
      }
    })
  ],

  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;