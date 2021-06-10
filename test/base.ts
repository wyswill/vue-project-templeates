/*
 * @LastEditors: wyswill
 * @Description: 请求base
 * @Date: 2021-06-09 16:50:20
 * @LastEditTime: 2021-06-10 18:15:39
 */
import grpc from 'grpc';

type baseOpt = {
  host: string;
  packge: string;
  filepath: string;
  service: string;
};
export default class RpcQuery {
  #pkg;
  #service;
  #client;
  constructor({ host, packge, filepath, service }: baseOpt) {
    this.#pkg = grpc.load(filepath)[packge];
    this.#service = this.#pkg[service];
    this.#client = new this.#service(host, grpc.credentials.createInsecure());
  }
  getClient<T>(): T {
    return this.#client;
  }
}
