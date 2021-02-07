import {Global, Module} from '@nestjs/common';
import {Auth}           from './auth.service';

@Global()
@Module({
          providers: [Auth]
        })
export class AuthModule {}
