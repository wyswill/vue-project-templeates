/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-09 18:25:32
 * @LastEditTime: 2021-06-10 13:44:34
 */

import { aha } from '@src/rpc/bundle';
import path from 'path';
import RpcQuery from './base';

const rq = new RpcQuery({
  host: 'localhost:50051',
  filepath: path.resolve('../src/rpc/aha.proto'),
  packge: 'aha',
  service: 'AhaService',
});
const client = rq.getClient<aha.aha_service>();
client.findOne({ id: 3 }, (err, res) => {
  if (err) console.log(err);
  console.log(res);
});
