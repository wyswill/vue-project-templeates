import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { LoginModule } from '../login/login.module';
import { AccountModule } from '../account/account.module';
import { LogModule } from '../log/log.module';
import { FileUploadModule } from '../file-upload/file-upload.module';

@Module({
  imports: [
    DbModule,
    AuthModule,
    LoginModule,
    AccountModule,
    LogModule,
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
