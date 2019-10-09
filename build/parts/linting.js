'use strict';

export default () => ({
  module: {
    rules: [
      {
        // To be safe, use enforce: "pre" section to check source files,
        // not modified by other loaders (like babel-loader)
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
          /libs/,
        ],
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint/lib/cli-engine/formatters/codeframe'),
          },
        },
      },
    ],
  },
});
