import { BaseResponse }           from './../../utiles/index';
import {
  BadGatewayException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
}                                 from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { logger }                 from '../../utiles';
import { catchError, tap }        from 'rxjs/operators';
import { IncomingMessage }        from 'http';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<IncomingMessage>();
    const msg = {
      url   : req.url,
      method: req.method,
      body  : req['body'],
      query : req['query'],
      params: req['params']
    };
    logger.mark(`请求|`, JSON.stringify(msg));
    const now = Date.now();
    return next.handle().pipe(
      tap(res => {
        logger.mark(`响应|`, JSON.stringify(res), `| ${Date.now() - now}ms`);
      }),
      catchError(err => {
        logger.error(`异常|`, err);
        return throwError(
          err instanceof BaseResponse
          ? new BadGatewayException(err)
          : Object.assign(new BadGatewayException(), err)
        );
      })
    );
  }
}
