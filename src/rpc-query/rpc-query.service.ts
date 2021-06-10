/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-10 11:03:37
 * @LastEditTime: 2021-06-10 15:34:52
 */
import { Injectable } from '@nestjs/common';
import { baseOpt, GrpcConfig } from '@src/util/serverconf';
import grpc from 'grpc';
import fs from 'fs';
import path from 'path';
import { hero } from '@src/rpc/bundle';
interface Client {
  hero_service: hero.hero_service;
}
@Injectable()
export class RpcQueryService {
  clients: Client = { hero_service: undefined };
  fileDir = path.resolve(__dirname, '../rpc');
  constructor() {
    fs.readdirSync(this.fileDir)
      .filter(fileName => fileName.endsWith('.proto'))
      .forEach(file => {
        const packge = file.replace('.proto', '');
        const opt = GrpcConfig.server[`${packge}_service`];
        if (opt) {
          this.clients[`${packge}_service`] = this.createClient(opt);
        }
      });
  }
  private createClient({ host, packages, service }: baseOpt) {
    const pkg = grpc.load(`${this.fileDir}/${packages}.proto`)[packages];
    const _service = pkg[service];
    const client = new _service(host, grpc.credentials.createInsecure());
    return client;
  }
}
