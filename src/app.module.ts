/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-10 11:04:55
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RpcQueryModule } from './rpc-query/rpc-query.module';

@Module({
  imports: [RpcQueryModule, RpcQueryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
