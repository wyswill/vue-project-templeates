import { AppController } from "@domain/app/app.controller";
import AuthModule from "@libs/lib/auth/auth.module";
import DbModule from "@libs/lib/db/db.module";
import { QiniuModule } from "@libs/lib/qiniu/qiniu.module";
import { Global, Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

@Global()
@Module({
  imports: [ScheduleModule.forRoot(), DbModule, QiniuModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
