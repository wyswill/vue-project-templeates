const config = require('./package.json');
module.exports = {
  publicPath: `/${config.name}/`,
  outputDir: `${config.name}WebServer/${config.name}`,
};
