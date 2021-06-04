/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-08 11:16:01
 * @LastEditTime: 2021-06-04 17:30:53
 */
const autocannon = require('autocannon');
const baseurl = 'http://localhost:3000/', //'http://weita.online',
  interface = '/tapi/twitter/queryListByRandom';
const instance = autocannon({
  url: baseurl,
  pipelining: 8,
  connections: 1000,
  duration: 30,
  timeout: 20,
  method: 'GET',
});
autocannon.track(instance, { renderProgressBar: true });
