import {Toast} from 'antd-mobile';

export default class Logger {
  public static info(...parms: any[]) {
    console.log(...parms);
  }

  public static error(content: string, ...errStank: string[]) {
    Toast.fail(content);
    console.error(...errStank);
  }
}
