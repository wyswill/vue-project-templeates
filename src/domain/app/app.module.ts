import { Module }        from '@nestjs/common';
import { AppController } from './app.controller';
import LibModule         from '@app/app/app.module';

@Module({
          imports    : [LibModule],
          controllers: [AppController],
        })
export class AppModule {}
