const path          = require('path');
const merge         = require('webpack-merge');
const baseConfig    = require('./webpack.base');
const webpackConfig = require('./config/webpack.config');
const cwd           = process.cwd();

const webpackProd = merge([
  baseConfig,

  {
    name: 'prod',

    entry: [
      path.join(cwd, 'src/app.js'),
    ],

    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },

    performance: {
      assetFilter: assetFilename =>
        !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
  },

  webpackConfig.loaders.loadJavaScript(),

  webpackConfig.plugins.minifyJavaScript(),

  webpackConfig.plugins.extractBundles([
    {
      name: 'vendor',
      chlidren: true,
      minChunks: 2,
      async: true,
    },
  ]),

  webpackConfig.plugins.useEnvironmentVars({
    BROWSER: true,
  }),

  webpackConfig.plugins.writeStats({
    filename: 'stats.json',
    fields: null,
  }),
]);

module.exports = webpackProd;
