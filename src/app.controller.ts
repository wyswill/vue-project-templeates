/*
 * @LastEditors: wyswill
* @Description:
* @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-09 18:41:48
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
