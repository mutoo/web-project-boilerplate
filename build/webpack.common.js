'use strict';

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import scss from './parts/scss';
import javascript from './parts/javascript';
import vueComponent from './parts/vue.component';
import linting from './parts/linting';

export default merge([
    {
        entry: path.resolve(__dirname, '../src/index.js'),

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../static/dist'),
        },

        resolve: {
            alias: {
                'vue': 'vue/dist/vue.common.js',
            },
        },

        // Plugins for all environments
        plugins: [

            // Make the jQuery and Vue libraries available globally
            new webpack.ProvidePlugin({
                'window.jQuery': 'jquery',
                'jQuery': 'jquery',
                '$': 'jquery',
                'Vue': 'vue',
            }),

            // Use MiniCssExtractPlugin to generate a .css file
            new MiniCssExtractPlugin({
                filename: 'bundle.css',
            }),
        ],
    },

    javascript(),

    scss(),

    vueComponent(),

    linting(),
]);
