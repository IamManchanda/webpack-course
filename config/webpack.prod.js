/**
 * WebPack Config: Prod
 */

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: [
      './src/client/main.js',
    ],
  },
  output: {
    filename: 'js/[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
            },
          },
        ],
      },
      {
        test: /\.(jpg|gif|png)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /* eslint-disable */
    new OptimizeCssAssetsPlugin({
      assetsNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        }
      },
      canPrint: true,
    }),
    /* eslint-enable */
    new ExtractTextPlugin('[name]-[hash:8].css'),
    new webpack.NamedModulesPlugin(),
    new HTMLWebpackPlugin({
      template: './src/client/index.html',
    }),
  ],
};
