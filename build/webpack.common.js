'use strict';

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import scss from './parts/scss';
import javascript from './parts/javascript';
import linting from './parts/linting';

export default merge([
  {
    entry: path.resolve(__dirname, '../src/index.jsx'),

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../static/dist'),
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    // Plugins for all environments
    plugins: [

      // Make the jQuery available globally
      new webpack.ProvidePlugin({
        'window.jQuery': 'jquery',
        'jQuery': 'jquery',
        '$': 'jquery',
      }),

      // Use MiniCssExtractPlugin to generate a .css file
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
    ],
  },

  javascript(),

  scss(),

  linting(),
]);
