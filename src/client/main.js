/**
 * Main.js
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
require('babel-runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');
/* eslint-enable */
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
