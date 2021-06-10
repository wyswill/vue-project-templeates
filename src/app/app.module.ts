/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-10 15:22:03
 */
import { Module }         from "@nestjs/common";
import { RpcQueryModule } from "@src/rpc-query/rpc-query.module";
import { AppController }  from "./app.controller";
import { AppService }     from "./app.service";
import LibModule          from "@libs/lib.module";

@Module( {
  imports    : [ RpcQueryModule, RpcQueryModule, LibModule ],
  controllers: [ AppController ],
  providers  : [ AppService ]
} )
export class AppModule {}
