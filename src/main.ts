/*
 * @LastEditors: wyswill
 * @Description: 主文件
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:03:51
 */
require("dotenv").config();
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./domain/app/app.module";
import { ValidationPipe } from "@nestjs/common";
import { LogInterceptor } from "../libs/lib/src/log/log.interceptor";
import * as session from "express-session";
import { encryptKey } from "./util/config";
import MailService from "@libs/lib/meil/mail.service";
import { logger } from "@util/log";

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

  await app.listen(3000);
}
init().then(async () => {
  await bootstrap();
});
