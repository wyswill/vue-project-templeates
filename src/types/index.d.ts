/*
 * @LastEditors: wyswill
 * @Description: 公共类型文件
 * @Date: 2021-01-29 15:41:23
 * @LastEditTime: 2021-04-25 17:51:17
 */

import { Logger } from "log4js";
import { Repository } from "typeorm";

export type ObjectStrKey<T> = {
  [K in keyof T]: Repository<T[K]>;
};

declare interface global {
  logger: Logger;
}
