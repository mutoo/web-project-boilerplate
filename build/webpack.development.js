import merge from 'webpack-merge';
import path from 'path';

let devServer = {
  host: 'localhost',
  port: 9000,
  // // provide the ssl for https if neened
  // https: {
  //   key: fs.readFileSync(path.resolve(__dirname, '../setup/ssl/privkey.pem')),
  //   cert: fs.readFileSync(path.resolve(__dirname, '../setup/ssl/cert.pem')),
  //   ca: fs.readFileSync(path.resolve(__dirname, '../setup/ssl/fullchain.pem')),
  // },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  contentBase: path.join(__dirname, '../static'),
  historyApiFallback: true,
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

    // Turn off the minimize on development
    optimization: {
      minimize: false,
    },
  },
]);
