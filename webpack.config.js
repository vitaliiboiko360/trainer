const webpack = require('webpack');
const path = require('path');

const PORT = 4001;

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    app: ['./js/main.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    publicPath: '/js/',
    filename: 'bundle.js',
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  devServer: {
    port: PORT,
    hot: true,
    historyApiFallback: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
    static: {
      directory: path.resolve(__dirname),
      watch: true,
    },
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new VueLoaderPlugin()],
};
