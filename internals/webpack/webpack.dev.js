const path          = require('path');
const merge         = require('webpack-merge');
const baseConfig    = require('./webpack.base');
const webpackConfig = require('./config/webpack.config');
const cwd           = process.cwd();

const webpackDev = merge([
  baseConfig,

  {
    name: 'dev',

    devtool: 'cheap-module-eval-source-map',

    entry: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?reload=true',
      path.join(cwd, 'src/app.js'),
    ],

    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },

    performance: {
      hints: false,
    },
  },

  webpackConfig.loaders.loadJavaScript({
    options: {
      presets: ['react-hmre'],
    },
  }),

  webpackConfig.plugins.useEnvironmentVars({
    BROWSER: true,
  }),

  webpackConfig.plugins.useHotModules(),

  webpackConfig.plugins.dontEmitOnErrors(),
]);

module.exports = webpackDev;
