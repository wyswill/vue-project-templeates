/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 17:59:47
 */
import { Injectable } from "@nestjs/common";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { ObjectStrKey } from "@Lotypes/index";
import { dbConfig, redisConfig } from "@util/config";
import { RedisService } from "nestjs-redis";
import { CacheService } from "./cache.service";

export type tabs = {};

@Injectable()
export class DbProvider {
  protected connect: Connection;

  public RepoMap: ObjectStrKey<tabs> = {};
  cacheMap: any;

  constructor(protected readonly redisService: RedisService) {
    Object.assign(dbConfig, {
      entities: [],
    });
    createConnection(<ConnectionOptions>dbConfig).then(
      (connect: Connection) => {
        this.connect = connect;
        this.RepoMap = <ObjectStrKey<tabs>>{};
        redisConfig.forEach(({ name }) => {
          this.cacheMap[name] = new CacheService(redisService.getClient(name));
        });
      },
    );
  }
}
