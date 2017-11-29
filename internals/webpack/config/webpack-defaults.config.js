const path = require('path');
const cwd = process.cwd();

const webpackDefaults = {
  resolve: {
    modules: ['./node_modules', './app'],
    extensions: ['.js', '.jsx'],
  },

  output: {
    path: path.resolve(cwd, 'dist'),
    publicPath: '/',
  },
};

module.exports = webpackDefaults;
