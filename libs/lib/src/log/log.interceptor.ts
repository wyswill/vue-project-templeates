/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-08 11:16:01
 * @LastEditTime: 2021-04-25 17:57:14
 */
import { BaseResponse } from "@util/index";
import {
  BadGatewayException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, throwError } from "rxjs";
import { logger } from "@util/log";
import { catchError, tap } from "rxjs/operators";
import { IncomingMessage } from "http";
import MailService from "@libs/lib/meil/mail.service";

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<IncomingMessage>();
    const msg = {
      url: req.url,
      method: req.method,
      body: req["body"],
      query: req["query"],
      params: req["params"],
    };
    logger.mark(`请求|`, JSON.stringify(msg));
    const now = Date.now();
    return next.handle().pipe(
      tap(res => {
        logger.mark(`响应|`, JSON.stringify(res), `| ${Date.now() - now}ms`);
      }),
      catchError(async err => {
        logger.error(`异常|`, err);
        if (process.env.isDebug !== "dev") {
          await MailService.sendMail("err", JSON.stringify(err));
        }
        return throwError(
          err instanceof BaseResponse
            ? new BadGatewayException(err)
            : Object.assign(new BadGatewayException(), err),
        );
      }),
    );
  }
}
