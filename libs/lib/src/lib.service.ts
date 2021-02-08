import { Injectable }           from '@nestjs/common';
import { Repository }           from 'typeorm';
import { BaseResponse, logger } from '@util/index';
import * as _         from 'lodash';
import { DbProvider } from '@libs/lib/db/db.provider';

@Injectable()
export default class LibService {
  constructor(protected readonly db: DbProvider) {}

  async queryList(size: number, page: number, dbName: string, where?: object) {
    const rpo: Repository<unknown> = this.db.RepoMap[dbName];
    const data = await rpo.find({skip: page, take: size, where});
    const total = await rpo.count(where);
    return new BaseResponse(0, '', {list: data, total});
  }

  async queryDetail(id: number, dbName: string) {
    const rpo: Repository<unknown> = this.db.RepoMap[dbName];
    const data = await rpo.findOne(id);
    // @ts-ignore
    if (data.isDel === ISDEL.del) {
      return new BaseResponse(-1, '该信息已删除');
    }
    return new BaseResponse(0, '', data);
  }

  authCode() {
    return _.random(1000, 9999, false);
  }

  async checkIfExis<T>(
    dbName: string,
    where: object,
    msg: string,
    isCreate: boolean = false
  ): Promise<T> {
    logger.fatal({dbName, where, isCreate});
    const rpo = this.db.RepoMap[dbName];
    const data = await rpo.findOne(where);
    logger.fatal('数据查询结果', data);
    if (!isCreate) {
      if (!data) {
        throw new BaseResponse(-1, msg);
      }
      return data;
    }
    else {
      if (data) {
        throw new BaseResponse(-1, msg);
      }
    }
  }
}
