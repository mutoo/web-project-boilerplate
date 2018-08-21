
'use strict';

import merge from 'webpack-merge';


// Webpack config
// ==============

import commonConfig from './webpack.common';
import developmentConfig from './webpack.development';
import productionConfig from './webpack.production';

module.exports = (mode) => {
    switch (mode) {
        case 'production': // Production build
            return merge(commonConfig, productionConfig, {mode});

        default: // Development build
            return merge(commonConfig, developmentConfig, {mode});
    }
};
