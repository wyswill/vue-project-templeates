/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-10 15:39:34
 */
require('dotenv').config();
import { LogInterceptor } from '@src/log/log.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { grpcClientOptions } from './grpc.options';
import { logger } from './util/log';
function init() {
  process.on('uncaughtException', err => {
    logger.error(err, 'uncaughtException');
  });
  process.on('unhandledRejection', (reason, p) => {
    logger.error(reason, 'unhandledRejection', JSON.stringify(p));
  });
}
async function bootstrap() {
  init();
  const app = await NestFactory.create(AppModule, { logger: logger });
  app.connectMicroservice(grpcClientOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());
  await app.startAllMicroservicesAsync();
  logger.info('服务启动');
}
bootstrap();
