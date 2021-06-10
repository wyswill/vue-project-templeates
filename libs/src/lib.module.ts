/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-10 14:18:00
 * @LastEditTime: 2021-06-10 14:18:59
 */
import { Global, Module } from "@nestjs/common";
import LibService         from "./lib.service";
import LogModule          from "./log/log.module";

@Global()
@Module( { imports: [ LogModule ], providers: [ LibService ], exports: [ LibService ] } )
export default class LibModule {}
