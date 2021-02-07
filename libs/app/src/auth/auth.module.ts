import {Global, Module} from '@nestjs/common';
import {Auth}           from './auth.service';

@Global()
@Module({
          providers: [Auth]
        })
export default class AuthModule {}
