
'use strict';

import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default merge([
    {
        // Plugins for production only
        plugins: [
            new UglifyJSPlugin(),
        ],
    },
]);
