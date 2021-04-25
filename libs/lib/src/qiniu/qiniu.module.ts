/*
 * @LastEditors: wyswill
 * @Description: 
 * @Date: 2021-04-25 17:48:57
 * @LastEditTime: 2021-04-25 17:49:03
 */
import { Global, Module } from "@nestjs/common";
import { Qiniu } from "@libs/lib/qiniu/qiniu";
import DbModule from "@libs/lib/db/db.module";

@Global()
@Module({ providers: [Qiniu], exports: [Qiniu], imports: [DbModule] })
export class QiniuModule {}
