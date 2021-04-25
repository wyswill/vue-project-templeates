/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:06:58
 */
import LibService from "@libs/lib/lib.service";
import { Controller, Get, Session } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly appService: LibService) {}

  @Get("queryAuthCode")
  getCode(@Session() session: Record<string, any>) {
    const code: number = this.appService.authCode();
    session.code = code;
    return code;
  }
}
