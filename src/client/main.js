/**
 * Main.js
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
require('babel-runtime/regenerator');
require('react-hot-loader/patch');
require('babel-core/register');
require('webpack-hot-middleware/client?reload=true');
/* eslint-enable */
require('./main.scss');
require('./index.html');
require('./app');

const greet = async (args) => {
  const { a, b } = args;
  await console.log('Hello ES2008 from ES2018 & ESNext', a, b);
  console.log('Done');
};

greet({
  a: 1,
  b: 2,
});
