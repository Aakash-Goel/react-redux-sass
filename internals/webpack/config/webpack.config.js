const webpackDefaults = require('./webpack-defaults.config');
const webpackLoaders  = require('./webpack-loaders.config');
const webpackPlugins  = require('./webpack-plugins.config');

module.exports = {
  defaults: webpackDefaults,
  loaders: webpackLoaders,
  plugins: webpackPlugins,
};
