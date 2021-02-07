import {Global, Module} from '@nestjs/common';
import {DbProvider}     from './dbProvider';
import {RedisModule}    from 'nestjs-redis';
import {CacheService}   from './cache.service';

@Global()
@Module({
          imports  : [
            RedisModule.register({
                                   port    : 6379,
                                   host    : 'localhost',
                                   password: '',
                                   db      : 1
                                 })
          ],
          providers: [DbProvider, CacheService],
          exports  : [DbProvider, CacheService]
        })
export class DbModule {}
