/*
 * @LastEditors: wyswill
 * @Description: 
 * @Date: 2021-06-04 17:10:08
 * @LastEditTime: 2021-06-09 16:48:59
 */
import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: 'aha',// 这里的包名和proto 里的包要一致
    protoPath: join(__dirname, './rpc/aha.proto'),
  },
};
