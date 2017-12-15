const merge      = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = () =>
  merge([
    baseConfig,
    {
      name: 'test',
      devtool: 'inline-source-map',

      module: {
        rules: [
          {
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader',
            exclude: /node_modules+[\\/](?!(ansi-styles)+[\\/]).*/,
          },
        ],
      },
    },
  ]);
