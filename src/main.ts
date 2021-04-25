/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:33:36
 */
require("dotenv").config();
import { AppModule } from "@domain/app/app.module";
import { LogInterceptor } from "@libs/lib/log/log.interceptor";
import MailService from "@libs/lib/meil/mail.service";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { logger } from "@util/log";
import helmet from "helmet";
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
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());

  const options = new DocumentBuilder()
    .setTitle(`接口文档`)
    .setDescription("")
    .setVersion("")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/doc", app, document);

  await app.listen(process.env.port ?? 3003, () => {
    console.log(
      `服务启动在:http://localhost:${
        process.env.port ?? 3003
      }\n,文档地址:http://localhost:${process.env.port ?? 3003}/doc`,
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
