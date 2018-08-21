'use strict';

import merge from 'webpack-merge';

let devServer = {
    host: 'localhost',
    port: 9000,
    // // provide the ssl for https if neened
    // https: {
    //     key: fs.readFileSync(path.resolve(__dirname, '../setup/ssl/privkey.pem')),
    //     cert: fs.readFileSync(path.resolve(__dirname, '../setup/ssl/cert.pem')),
    //     ca: fs.readFileSync(path.resolve(__dirname, '../setup/ssl/fullchain.pem')),
    // },
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    inline: true,
};

let publicPath;

if (devServer.host && devServer.port) {
    publicPath = devServer.https ? 'https://' : 'http://';
    publicPath += devServer.host;
    publicPath += ':' + devServer.port + '/';
}

export default merge([
    {
        devtool: 'eval-source-map',

        devServer,

        output: {
            publicPath,
        },
    },
]);
