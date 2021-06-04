/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 17:14:23
 * @LastEditTime: 2021-06-04 18:27:46
 */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param() parm) {
    return this.appService.getHero(parm);
  }
}
