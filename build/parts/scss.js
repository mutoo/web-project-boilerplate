'use strict';

import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

let sourceMap = true;
let styleDirectory = path.resolve(__dirname, './../../src/scss');

// Convert windows style path (c:\path\to\project) to unix style
// path (c:/path/to/project) otherwise it will cause issues in json-parse
styleDirectory = styleDirectory.replace(/\\/g, '/');

const scssUse = [
    // css-loader - Translates CSS into CommonJS
    {
        loader: 'css-loader',
        options: {
            sourceMap,
        },
    },

    // postcss-loader - Runs the CSS through 'post-css' which
    // adds auto-prefixing and logs CSS errors to the console
    {
        loader: 'postcss-loader',
        options: {
            sourceMap,
            // see more options in postcss.config.js
        },
    },

    // sass-loader - Compiles Scss into CSS
    {
        loader: 'sass-loader',
        options: {
            // Minify if using a production build
            outputStyle: process.env.NODE_ENV === 'production' ?
                'compressed' :
                'nested',

            // Inject the commonly used variables and mixins and an Scss
            // variable so the css can be aware of the environment
            // (used for visible breakpoints)
            data: '@import \'variables\'; @import \'mixins\'; $env: ' +
            process.env.NODE_ENV + ';',

            // allow components import file form these directories
            includePaths: [styleDirectory],

            sourceMap,
        },
    },
];

export default () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                oneOf: [
                    {
                        use: [
                            process.env.NODE_ENV === 'production' ?
                                MiniCssExtractPlugin.loader : 'style-loader',
                            ...scssUse,
                        ],
                    },
                ],
            },
        ],
    },
});
