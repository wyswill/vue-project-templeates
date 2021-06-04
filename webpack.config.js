require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: ['webpack/hot/poll?100', './src/domain/main.ts'],
  watch: true,
  target: 'node',
  externals: [nodeExternals({ allowlist: ['webpack/hot/poll?100'] })],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: [path.resolve('node_modules'), path.resolve('test')],
      },
    ],
  },
  mode: process.env.isDebug === 'dev' ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {},
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin()],
  output: {
    path: path.join(__dirname, 'twitter-server'),
    filename: 'main.js',
  },
};
const syncTsConf2Alias = () => {
  const tsConf = require('./tsconfig.json');
  const { paths } = tsConf.compilerOptions;
  const keys = Object.keys(paths);
  const alias = {};
  keys.forEach(k => {
    let value = paths[k][0];
    value = value.replace('/*', '');
    k = k.replace('/*', '');
    alias[k] = path.resolve(value);
  });
  config.resolve.alias = alias;
};
syncTsConf2Alias();
module.exports = config;
