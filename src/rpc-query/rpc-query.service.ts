/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-10 11:03:37
 * @LastEditTime: 2021-06-10 13:55:09
 */
import { Injectable } from '@nestjs/common';
import { GrpcConfig } from './../util/serverconf';
import grpc from 'grpc';
import fs from 'fs';
import { hero } from '../rpc/bundle';
type baseOpt = {
  host: string;
  packge: string;
  filepath: string;
  service: string;
};
interface Client {
  hero_service: hero.hero_service;
}
@Injectable()
export class RpcQueryService {
  clients: Client = { hero_service: undefined };
  constructor() {
    fs.readdirSync('../rpc')
      .filter(fileName => fileName.endsWith('.proto'))
      .forEach(file => {
        const packge = file.replace('.proto', '');
        const opt = GrpcConfig.server[`${packge}_service`];
        if (opt) {
          this.clients[`${packge}_service`] = this.createClient(opt);
        }
      });
  }
  private createClient({ host, packge, filepath, service }: baseOpt) {
    const pkg = grpc.load(filepath)[packge];
    const _service = pkg[service];
    const client = new _service(host, grpc.credentials.createInsecure());
    return client;
  }
}
