import { NestFactory }                              from '@nestjs/core';
import { AppModule }                                from './domain/app/app.module';
import { ValidationPipe }                           from '@nestjs/common';
import { configLogger, initExceptionCatch, logger } from './util';
import { LogInterceptor }                           from '../libs/lib/src/log/log.interceptor';
import * as session                                 from 'express-session';
import { encryptKey }                               from './util/config';

async function bootstrap() {
  await initExceptionCatch();
  await configLogger();
  const app = await NestFactory.create(AppModule, {logger});
  logger.debug({isDebug: process.env.isDebug});
  app.enableCors({
                   credentials: true,
                   origin     : ['http://localhost:3001', 'http://localhost:3000', 'http://47.97.111.58/manghe']
                 });
  app.use(
    session({
              secret           : encryptKey,
              resave           : false,
              saveUninitialized: false
            })
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(3000);
}

bootstrap();
