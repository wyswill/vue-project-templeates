import { ObjectStrKey } from '../types';
import { dbConfig } from '../utiles/config';
import { Injectable } from '@nestjs/common';
import { Connection, createConnection, EntityTarget } from 'typeorm';

export type tabs = {};

@Injectable()
export class DbProvider {
  protected connect: Connection;
  public RepoMap: ObjectStrKey<tabs> = {};

  constructor() {
    createConnection({
      type: 'mysql',
      database: dbConfig.database,
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.user,
      password: dbConfig.password,
      entities: [`${__dirname}/entitys/*.entity{.ts,.js}`],
      synchronize: true,
      maxQueryExecutionTime: 1000,
    }).then((connect: Connection) => {
      this.connect = connect;
      this.RepoMap = <ObjectStrKey<tabs>>{};
    });
  }
}
