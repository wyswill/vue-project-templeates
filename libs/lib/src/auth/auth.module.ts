import {Global, Module} from '@nestjs/common';
import {Auth}           from './auth.provider';

@Global()
@Module({
          providers: [Auth]
        })
export default class AuthModule {}
