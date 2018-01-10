/**
 * Main.js
 */

/* eslint-disable import/no-extraneous-dependencies */
require('babel-runtime/regenerator');
/* eslint-enable */
require('webpack-hot-middleware/client');
require('./main.css');
require('./index.html');

const greet = async (args) => {
  const { a, b } = args;
  await console.log('Hello ES2008 from ES2018 & ESNext', a, b);
  console.log('Done');
};

greet({
  a: 1,
  b: 2,
});
