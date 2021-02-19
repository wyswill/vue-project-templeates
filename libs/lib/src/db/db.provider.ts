import { Injectable }                   from '@nestjs/common';
import { Connection, createConnection } from 'typeorm';
import { ObjectStrKey }                 from '../../../../src/types';
import { dbConfig }                     from '@util/config';

export type tabs = {};

@Injectable()
export class Db {
  protected connect: Connection;

  public RepoMap: ObjectStrKey<tabs> = {};

  constructor() {
    createConnection({
                       type                 : 'mysql',
                       database             : dbConfig.database,
                       host                 : dbConfig.host,
                       port                 : dbConfig.port,
                       username             : dbConfig.user,
                       password             : dbConfig.password,
                       entities             : [`${__dirname}/entity/*.entity{.ts,.js}`],
                       synchronize          : true,
                       maxQueryExecutionTime: 1000
                     }).then((connect: Connection) => {
      this.connect = connect;
      this.RepoMap = <ObjectStrKey<tabs>>{};
    });
  }
}
