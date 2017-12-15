const getWebpackTestConfig = require('../webpack/webpack.test');

const getReporters = ({ coverage }) => {
  const reporters = ['mocha'];

  if (coverage) {
    return [...reporters, 'coverage'];
  }

  return reporters;
};

const karmaConfig = (config) => {
  config.set({
    basePath: '',
    customContextFile: 'custom.html',
    frameworks: ['mocha'],
    files: [
      {
        pattern: './test-bundler.js',
        watched: false,
      },
    ],
    preprocessors: {
      './test-bundler.js': ['webpack', 'sourcemap'],
    },
    mochaReporter: {
      showDiff: true,
    },
    reporters: getReporters(config),
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity,
    webpack: getWebpackTestConfig(config),
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },
  });
};

module.exports = karmaConfig;
