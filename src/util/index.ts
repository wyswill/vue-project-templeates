/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-03-22 15:14:39
 * @LastEditTime: 2021-04-25 17:57:41
 */
import { encryptKey } from "./config";
import crypto from "crypto";
import moment from "moment";
import { timeFmt } from "./constant";
import _ from "lodash";

const token = require("token");
token.defaults.secret = encryptKey;
token.defaults.timeStep = 30 * 60;

export function genCode(min: number = 1000, max = 9999) {
  return _.random(min, max, false);
}

/**
 * @author wyswill
 * @date 2021/1/30-2:28 下午
 * @description 加密密码
 * @param passWord 要加密的秘码
 */
export function cryptoPassword(passWord: string): string {
  return crypto.createHmac("sha256", encryptKey).update(passWord).digest("hex");
}

/**
 * @author wyswill
 * @date 2021/1/30-2:27 下午
 * @description 对比密码
 * @param newPass 新的密码
 * @param olds 旧密码
 */
export const comparePassword = (newPass: string, olds: string): boolean => {
  const crypt = cryptoPassword(newPass);
  return crypt === olds;
};

/**
 * @author wyswill
 * @date 2021/1/30-2:27 下午
 * @description 基本的返回对象
 */
export class BaseResponse<T> {
  constructor(public code: number = 0, public msg: string, public data?: T) {}
}

/**
 * @author wyswill
 * @date 2021/1/30-2:19 下午
 * @description 获取redis 存储时间
 */
export const loginTime = 604800; //7 days
/**
 * @author wyswill
 * @date 2021/1/30-2:27 下午
 * @description 生成token
 * @param info 要生成token的信息
 */
export function genToken(info: string): string {
  return token.generate(info);
}

export const getTime = (fmt: timeFmt = timeFmt.YMD_HMS) => moment().format(fmt);
