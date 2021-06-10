/*
 * @LastEditors: wyswill
* @Description:
* @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-10 15:05:58
*/
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';
import { aha } from '@src/rpc/bundle';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}
  @GrpcMethod('AhaService', 'FindOne')
  findOne(data: aha.IAddd) {
    return this.service.findOne(data.id);
  }
}
