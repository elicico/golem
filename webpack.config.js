var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
/* var ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "main.css"
}); ~ uncomment in order to separate js from stylesheets */

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
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      /* {
        test: /\.scss$/,
        use: extractSass.extract({
          // use style-loader in development
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        }),
      }, ~ uncomment and replace rule above in order to separate js from stylesheets */
    ],
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    // extractSass, ~ uncomment in order to separate js from stylesheets
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
  ]
};

module.exports = config;