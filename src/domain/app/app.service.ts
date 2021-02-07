import { logger } from 'src/utiles';
import { throwError } from 'rxjs';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { DbProvider } from 'src/db/dbProvider';
import { Repository } from 'typeorm';
import { BaseResponse } from '../../utiles';

@Injectable()
export class AppService {
  constructor(protected db: DbProvider) {}

  getHello(): string {
    return 'Hello World!';
  }

  async queryList(size: number, page: number, dbName: string, where?: object) {
    const rpo: Repository<unknown> = this.db.RepoMap[dbName];
    const data = await rpo.find({ skip: page, take: size, where });
    const total = await rpo.count(where);
    return new BaseResponse(0, '', { list: data, total });
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
    isCreate: boolean = false,
  ): Promise<T> {
    logger.fatal({ dbName, where, isCreate });
    const rpo = this.db.RepoMap[dbName];
    const data = await rpo.findOne(where);
    logger.fatal('数据查询结果', data);
    if (!isCreate) {
      if (!data) throw new BaseResponse(-1, msg);
      return data;
    } else {
      if (data) throw new BaseResponse(-1, msg);
    }
  }
}
