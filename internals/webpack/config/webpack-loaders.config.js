const webpackLoaders = {

  loadJavaScript: ({ include, options } = {}) => ({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include,
          options,
        },
      ],
    },
  }),

  loadFonts: () => ({
    module: {
      rules: [
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader',
        },
      ],
    },
  }),

  loadJSON: () => ({
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
  }),

  loadImages: ({ options } = {}) => ({
    module: {
      rules: [
        {
          test: /\.(jpg|png|gif)$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options,
            },
          ],
        },
      ],
    },
  }),

};

module.exports = webpackLoaders;
