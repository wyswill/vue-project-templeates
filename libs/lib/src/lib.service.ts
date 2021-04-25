import { Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { BaseResponse } from "@util/index";
import { logger } from "@util/log";
import { DbProvider } from "./db/dbProvider";

@Injectable()
export default class LibService {
  constructor(protected readonly db: DbProvider) {}

  async queryList(size: number, page: number, dbName: string) {
    const rpo: MongoRepository<unknown> = this.db.RepoMap[dbName];
    //@ts-ignore
    const list = await rpo.find({
      take: Number(size),
      skip: Number(page) * 10,
    });
    const total = await rpo.count();
    return new BaseResponse(0, "", {
      list,
      total,
    });
  }

  async checkIfExist<T>(
    dbName: string,
    where: object,
    msg: string,
    isCreate: boolean = false,
  ): Promise<T> {
    logger.fatal({ dbName, where, isCreate });
    const rpo = this.db.RepoMap[dbName];
    const data = await rpo.findOne(where);
    logger.fatal("数据查询结果", data);
    if (!isCreate) {
      if (!data) {
        throw new BaseResponse(-1, msg);
      }
      return data;
    } else {
      if (data) {
        throw new BaseResponse(-1, msg);
      }
    }
  }
}
