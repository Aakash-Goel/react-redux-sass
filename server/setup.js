/*
 * * @Description:
 * Setup file to bootstrap Express app in Prod or dev mode
 * also sets up basic express routes for static resources, dll files etc
 *
 */
import path from 'path';
import express from 'express';
import compression from 'compression';
import { NODE_ENV } from './config/app.config';

// Development middlewares
const addDevMiddlewares = (app, webpackConfig) => {
  // eslint-disable-next-line global-require
  const webpack = require('webpack');
  // eslint-disable-next-line global-require
  const webpackDevMiddleware = require('webpack-dev-middleware');
  // eslint-disable-next-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
};

// Production middlewares
const addProdMiddlewares = (app, options) => {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'dist');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));
};

/**
 * setup middlewares as per environment
 */
const serverSetUp = (app, options) => {
  const isProd = NODE_ENV === 'production';

  if (isProd) {
    // add production middlewares like compression & set static paths
    addProdMiddlewares(app, options);
  } else {
    // add development middlewares like HMR & DLL path
    // eslint-disable-next-line global-require
    const webpackConfig = require('../internals/webpack/webpack.dev');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};

module.exports = serverSetUp;
