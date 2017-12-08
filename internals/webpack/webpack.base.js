const path          = require('path');
const merge         = require('webpack-merge');
const webpackConfig = require('./config/webpack.config');
const cwd           = process.cwd();

const webpackBase = merge([
  {
    bail: true,

    resolve: webpackConfig.defaults.resolve,

    output: webpackConfig.defaults.output,

  },

  webpackConfig.loaders.loadJSON(),

  webpackConfig.loaders.loadFonts(),

  webpackConfig.loaders.loadImages(),

  webpackConfig.plugins.extractHtml({
    template: path.join(cwd, 'src/index.html'),
  }),

  webpackConfig.plugins.useEnvironmentVars({
    NODE_ENV: 'development',
  }),

]);

module.exports = webpackBase;
