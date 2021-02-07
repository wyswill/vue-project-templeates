/*
 * @LastEditors: wyswill
 * @Description: 公共类型文件
 * @Date: 2021-01-29 15:41:23
 * @LastEditTime: 2021-01-29 16:38:26
 */

import {Logger}     from 'log4js';
import {Repository} from 'typeorm';

export type ObjectStrKey<T> = {
  [K in keyof T]: Repository<T[K]>;
}

declare interface global {
  logger: Logger
}
