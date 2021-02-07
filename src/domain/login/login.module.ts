import { Module }          from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService }    from './login.service';
import { AppService }      from '../app/app.service';

@Module({
          controllers: [LoginController],
          providers  : [LoginService, AppService]
        })
export class LoginModule {}
