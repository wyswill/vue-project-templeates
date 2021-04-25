/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:20:45
 */
import { Global, Module } from "@nestjs/common";
import { Auth } from "./auth.provider";

@Global()
@Module({
  providers: [Auth],
  exports: [Auth],
})
export default class AuthModule {}
