const webpack = require('webpack');
const path = require('path');

const PORT = 4002;

const { VueLoaderPlugin } = require('vue-loader');

const vuePlugin = new VueLoaderPlugin();
const vueConstants = new webpack.DefinePlugin({
  __VUE_OPTIONS_API__: false,
  __VUE_PROD_DEVTOOLS__: false,
  __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
});

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
    extensions: ['.js', '.ts', '.vue', '.scss'],
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
        options: {
          modules: true,
          loaders: {
            scss: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  esModule: false,
                },
              },
              { loader: 'sass-loader' },
            ],
          },
        },
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
  plugins: [vuePlugin, vueConstants],
};
