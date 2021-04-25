import { redisConfig } from "@util/config";
import { Global, Module } from "@nestjs/common";
import { RedisModule } from "nestjs-redis";
import { DbProvider } from "./dbProvider";
import { CacheService } from "@libs/lib/db/cache.service";

@Global()
@Module({
  imports: [RedisModule.register(redisConfig)],
  providers: [DbProvider, CacheService],
  exports: [DbProvider],
})
export default class DbModule {}
