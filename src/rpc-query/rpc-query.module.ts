/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-10 11:03:05
 * @LastEditTime: 2021-06-10 11:04:26
 */
import { Module } from '@nestjs/common';
import { RpcQueryService } from './rpc-query.service';

@Module({
  providers: [RpcQueryService],
  exports: [RpcQueryService],
})
export class RpcQueryModule {}
