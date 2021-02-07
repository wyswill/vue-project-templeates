const path = require('path')
const webpack = require('webpack')
const {appPublic} = require('./paths')

const vendors = [
  'react',
  'react-dom',
  'react-router',
  'mobx',
  'mobx-react',
  'antd-mobile',
  'lodash',
  'swiper'
];

module.exports = {
  mode   : "production",
  entry  : {
    vendor: vendors
  },
  output : {
    path    : path.resolve(appPublic),
    filename: '[name].dll.js',
    library : '[name]_lib',
  },
  plugins: [
    new webpack.DllPlugin({
                            path   : path.resolve(appPublic, 'manifest.json'),
                            name   : '[name]_lib',
                            context: appPublic,
                          }),
  ],
}
