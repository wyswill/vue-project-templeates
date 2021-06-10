/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 15:32:50
 * @LastEditTime: 2021-06-04 17:32:56
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(grpcClientOptions);
  await app.startAllMicroservicesAsync();
}
bootstrap();
