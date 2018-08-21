'use strict';

import {VueLoaderPlugin} from 'vue-loader';

export default () => ({
    module: {
        rules: [
            // Vue single file component
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false,
                    },
                },
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
});
