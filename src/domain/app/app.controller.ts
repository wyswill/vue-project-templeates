import { Get } from "@nestjs/common";
/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:23:03
 */
import { Controller } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("htllo")
  heello() {
    return "ok";
  }
}
