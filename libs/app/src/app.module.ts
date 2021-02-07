import { Module } from '@nestjs/common';
import AppService from './app.service';
import AuthModule from '@app/app/auth/auth.module';
import LogModule  from '@app/app/log/log.module';
import DbModule   from '@app/app/db/db.module';

@Module({
          imports  : [AuthModule, DbModule, LogModule],
          providers: [AppService],
          exports  : [AppService]
        })
export default class AppModule {}
