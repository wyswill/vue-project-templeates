/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-09 18:25:32
 * @LastEditTime: 2021-06-10 18:25:12
 */

import path from 'path';
import { promisify } from 'util';
import { aha } from '../src/rpc/bundle';
import RpcQuery from './base';
const rq = new RpcQuery({
  host: 'localhost:50051',
  filepath: path.resolve(__dirname, '../dist/rpc/aha.proto'),
  packge: 'aha',
  service: 'aha_service',
});
const client = rq.getClient<aha.aha_service>();
client.login = promisify(client.login);
async function asd() {
  const res = await client.login({
    userInfo: { name: 'aaa', age: 12, mony: 1000 },
  });
  console.log(res);
}
asd();
