/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-08 11:16:01
 * @LastEditTime: 2021-06-10 14:16:28
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { IncomingMessage }                                            from "http";
import { catchError, tap }                                            from "rxjs/operators";

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept( context: ExecutionContext, next: CallHandler ) {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<IncomingMessage>();
    const rsp = ctx.getResponse();
    const msg = {
      url   : req.url,
      method: req.method,
      body  : req[ "body" ],
      query : req[ "query" ],
      params: req[ "params" ]
    };
    console.log( `请求|`, JSON.stringify( msg ) );
    const now = Date.now();
    return next.handle()
      .pipe(
        tap( res => {
          console.log( `响应|`, JSON.stringify( res ), `| ${ Date.now() - now }ms` );
        } ),
        catchError( async err => {
          console.error( `异常|`, err );
          if ( process.env.isDebug !== "dev" ) {
          }
          return err;
        } )
      );
  }
}
