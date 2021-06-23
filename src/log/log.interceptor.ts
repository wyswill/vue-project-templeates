import { tap } from 'rxjs/operators';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { logger } from '@src/util/log';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const GrpcData = context.switchToRpc().getData();
    const req = `[type:${context.getType()}]|[${context.getClass().name}]|[${
      context.getHandler().name
    }]|[请求]|${JSON.stringify(GrpcData)}`;
    logger.info(req);
    return next.handle().pipe(
      tap(data => {
        const rsp = `[type:${context.getType()}]|[${
          context.getClass().name
        }]|[${context.getHandler().name}]|[响应]|${JSON.stringify(data)}`;
        logger.info(rsp);
      }),
    );
  }
}
