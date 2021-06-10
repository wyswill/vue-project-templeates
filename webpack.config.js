/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-09 16:39:38
 * @LastEditTime: 2021-06-10 14:06:49
 */
require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pkg = require('./package.json');
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
    path: path.join(__dirname, pkg.name),
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
  console.log(alias);
};
syncTsConf2Alias();
module.exports = config;
