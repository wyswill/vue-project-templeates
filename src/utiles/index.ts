import { encryptKey }           from './config';
import * as crypto              from 'crypto';
import { configure, getLogger } from 'log4js';
import * as moment              from 'moment';
import { timeFmt }              from './constant';

const token = require('token');
export const configLogger = async () => {
  configure({
              appenders : {
                access: {
                  type      : 'dateFile',
                  filename  : './log/access.log',
                  pattern   : 'yyyy-MM-dd',
                  level     : 'LOG',
                  category  : 'normal',
                  maxLogSize: 2097152
                },
                debug : {type: 'stdout'}
              },
              categories: {
                default: {appenders: ['debug'], level: 'all'},
                onLine : {appenders: ['access'], level: 'all'}
              }
            });
};
let dotenv = require('dotenv');
dotenv.config('../../env');
export const logger = getLogger(Boolean(process.env.isDebug) ? 'default' : 'onLine');
token.defaults.secret = encryptKey;
token.defaults.timeStep = 30 * 60;

/**
 * @author wyswill
 * @date 2021/1/30-2:28 下午
 * @description 加密密码
 * @param passWord 要加密的秘码
 */
export function cryptoPassword(passWord: string): string {
  return crypto.createHmac('sha256', encryptKey).update(passWord).digest('hex');
}

/**
 * @author wyswill
 * @date 2021/1/30-2:27 下午
 * @description 对比密码
 * @param newPass 新的密码
 * @param olds 旧密码
 */
export const compaerPassword = (newPass: string, olds: string): boolean => {
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
export const loginTime = 3600;

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

export const initExceptionCatch = async () => {
  process.on('uncaughtException', err => {
    logger.error(err, 'uncaughtException');
  });
  process.on('unhandledRejection', (reason, p) => {
    logger.error(reason, 'unhandledRejection', p);
  });
};
