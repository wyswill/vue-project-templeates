const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback');
const config = require('./package.json');
const apppath = config.name;
const filePath =
  process.env.NODE_ENV === 'development'
    ? `${config.name}WebServer/${config.name}`
    : config.name;
app.use(
  `/${apppath}`,
  express.static(path.join(__dirname, `./${filePath}`), {
    maxage: 1000 * 60 * 60 * 24 * 30, // a month
  }),
);
app.use(
  history({
    verbose: true,
    index: '/',
  }),
);
app.use(`/`, function (req, res) {
  res.sendFile(path.join(__dirname, `./${filePath}/index.html`));
});
app.listen(8082, () => {
  console.log('server start http://localhost:8082');
});
