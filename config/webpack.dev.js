/**
 * WebPack Config: Dev
 */

const path = require('path');

module.exports = {
  entry: {
    main: ['./src/js/main.js'],
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: '/js',
  },
  devServer: {
    contentBase: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
