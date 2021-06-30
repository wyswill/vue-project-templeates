/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-10 15:46:46
 */
import { Module } from '@nestjs/common';
import { RpcQueryModule } from '@src/rpc-query/rpc-query.module';

@Module({
  imports: [RpcQueryModule],
})
export class AppModule {}
