var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
  entry: {
    hotness: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
    ],
    base: [
      './assets/js/base/index',
    ],
    index: [
      './assets/js/index/index',
    ],
    article: [
      './assets/js/article/index',
    ]
  },

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/assets/bundles/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  }
};
