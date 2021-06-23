/*
 * @LastEditors: wyswill
 * @Description: 请求base
 * @Date: 2021-06-09 16:50:20
 * @LastEditTime: 2021-06-11 16:58:32
 */
import grpc from 'grpc';
import path from 'path';

type baseOpt = {
  host: string;
  packge: string;
};
export default class RpcQuery {
  #pkg;
  #service;
  #client;
  constructor({ host, packge }: baseOpt) {
    try {
      const filepath = path.resolve(__dirname, `../dist/rpc/${packge}.proto`);
      this.#pkg = grpc.load(filepath)[packge];
      this.#service = this.#pkg[`${packge}_service`];
      this.#client = new this.#service(host, grpc.credentials.createInsecure());
    } catch (error) {
      console.log(error);
    }
  }
  getClient<T>(): T {
    return this.#client;
  }
}
