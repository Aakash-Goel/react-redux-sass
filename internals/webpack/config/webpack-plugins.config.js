// https://webpack.js.org/plugins/define-plugin
const DefinePlugin = require('webpack/lib/DefinePlugin');

// https://webpack.js.org/plugins/environment-plugin
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin');

// https://webpack.js.org/plugins/banner-plugin
const BannerPlugin = require('webpack/lib/BannerPlugin');

// https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// https://github.com/webpack-contrib/babel-minify-webpack-plugin
const MinifyPlugin = require('babel-minify-webpack-plugin');

// https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/plugins/commons-chunk-plugin
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// https://webpack.js.org/plugins/no-emit-on-errors-plugin/
const NoEmitOnErrorsPlugin = require('webpack/lib/NoEmitOnErrorsPlugin');

// https://webpack.js.org/plugins/hot-module-replacement-plugin
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

// https://github.com/FormidableLabs/webpack-stats-plugin
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const webpackPlugins = {

  defineConstants: (constants = {}) => ({
    plugins: [new DefinePlugin(constants)],
  }),

  useEnvironmentVars: (defaults = {}) => ({
    plugins: [new EnvironmentPlugin(defaults)],
  }),

  addBanner: (options = {}) => ({
    plugins: [new BannerPlugin(options)],
  }),

  uglifyJavaScript: () => ({
    plugins: [new UglifyJsPlugin()],
  }),

  minifyJavaScript: () => ({
    plugins: [
      new MinifyPlugin(
        {
          booleans: false,
          builtIns: false,
          consecutiveAdds: false,
          evaluate: false,
          flipComparisons: false,
          guards: false,
          infinity: false,
          // Not needed since linting prevents it
          memberExpressions: false,
          removeConsole: false,
          removeDebugger: false,
          simplify: false,
          simplifyComparisons: false,
          typeConstructors: false,
        },
        // Plugin options
        {
          comments: false,
        } // eslint-disable-line
      ),
    ],
  }),

  extractHtml: (options = {}) => ({
    plugins: [new HtmlWebpackPlugin(options)],
  }),

  extractBundles: bundles => ({
    plugins: bundles.map(bundle => new CommonsChunkPlugin(bundle)),
  }),

  dontEmitOnErrors: () => ({
    plugins: [new NoEmitOnErrorsPlugin()],
  }),

  useHotModules: () => ({
    plugins: [new HotModuleReplacementPlugin()],
  }),

  writeStats: (options = {}) => ({
    plugins: [new StatsWriterPlugin(options)],
  }),

};

module.exports = webpackPlugins;
