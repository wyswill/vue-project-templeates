/*
 * @LastEditors: wyswill
 * @Description: 
 * @Date: 2021-06-04 17:10:08
 * @LastEditTime: 2021-06-10 15:34:43
 */
import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';
import pkg from '../package.json'
export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: pkg.name,// 这里的包名和proto 里的包要一致
    protoPath: join(__dirname, `rpc/${pkg.name}.proto`),
  },
};
