/*
 * @LastEditors: wyswill
 * @Description: 主文件
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:09:43
 */
require("dotenv").config();
import MailService from "@libs/lib/meil/mail.service";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { logger } from "@util/log";
import * as session from "express-session";
import { LogInterceptor } from "../libs/lib/src/log/log.interceptor";
import { AppModule } from "./domain/app/app.module";
import { encryptKey } from "./util/config";
declare const module: any;
async function init() {
  process.on("uncaughtException", async err => {
    logger.error(err, "uncaughtException");
    await MailService.sendMail("uncaughtException", JSON.stringify(err));
  });
  process.on("unhandledRejection", async (reason, p) => {
    logger.error(reason, "unhandledRejection", JSON.stringify(p));
    await MailService.sendMail("unhandledRejection", JSON.stringify(p));
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });
  logger.debug({ isDebug: process.env.isDebug });
  app.enableCors({
    credentials: true,
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "http://47.97.111.58/manghe",
    ],
  });
  app.use(
    session({
      secret: encryptKey,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(process.env.port ?? 3003, () => {
    console.log(
      `服务启动在:http://localhost:${
        process.env.port ?? 3003
      },文档地址:http://localhost:${process.env.port ?? 3003}/doc`,
    );
  });
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
init().then(async () => {
  await bootstrap();
});
