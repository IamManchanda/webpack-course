/**
 * Express.js
 */

import express from 'express';

/* eslint-disable no-unused-vars */
import path from 'path';
/* eslint-enable */

const server = express();

const webpack = require('webpack');
const config = require('./../../config/webpack.dev.js');

const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

const staticMiddleware = express.static('dist');

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

server.listen(3000, () => {
  console.log('Server is listening');
});
