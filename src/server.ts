const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');
const appPath = '/';
const path = require('path');
const historys = require('connect-history-api-fallback');
app.use(
  historys({
    verbose: true,
    index: '/',
  }),
);
//@ts-ignore
app.get('/', function(req, res) {
  //@ts-ignore
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
app.listen(8081, () => {
  console.log('server start');
});
