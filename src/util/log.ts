/*
 * @LastEditors: wyswill
 * @Description: log
 * @Date: 2021-06-10 15:28:52
 * @LastEditTime: 2021-06-10 15:30:11
 */
import { configure, getLogger } from 'log4js';
class myLog {
  constructor(protected readonly conf: string = 'devs') {
    configure({
      pm2: true,
      pm2InstanceVar: 'weita',
      disableClustering: true,
      appenders: {
        access: {
          type: 'dateFile',
          filename: './log/req',
          pattern: '-yyyy-MM-dd.log',
          alwaysIncludePattern: true,
          level: 'LOG',
          category: 'normal',
          maxLogSize: 2097152,
        },
        debug: { type: 'stdout' },
      },
      categories: {
        default: { appenders: ['debug'], level: 'all' },
        onLine: { appenders: ['access'], level: 'all' },
      },
    });
  }

  getLog() {
    return getLogger(process.env.isDebug === 'dev' ? 'default' : 'onLine');
  }
}

export const logger = new myLog().getLog();
