import { Module }        from '@nestjs/common';
import { AppController } from './app.controller';
import AuthModule        from '@libs/lib/auth/auth.module';
import DbModule          from '@libs/lib/db/db.module';
import LogModule         from '@libs/lib/log/log.module';


@Module({
          imports    : [AuthModule, DbModule, LogModule],
          controllers: [AppController]
        })
export class AppModule {}
