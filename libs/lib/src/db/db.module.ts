import { Global, Module } from '@nestjs/common';
import { RedisModule }    from 'nestjs-redis';
import { CacheService }   from './cache.service';
import { Db }             from '@libs/lib/db/db.provider';

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
          providers: [Db, CacheService],
          exports  : [Db, CacheService]
        })
export default class DbModule {}
