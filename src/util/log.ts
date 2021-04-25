/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:57:45
 * @LastEditTime: 2021-04-25 18:35:16
 */
import { configure, getLogger } from "log4js";

class myLog {
  constructor(protected readonly conf: string = "devs") {
    configure({
      appenders: {
        access: {
          type: "dateFile",
          filename: "./log/access.log",
          pattern: "-yyyy-MM-dd-hh.log",
          alwaysIncludePattern: true,
          level: "LOG",
          category: "normal",
          maxLogSize: 2097152,
        },
        debug: { type: "stdout" },
      },
      categories: {
        default: { appenders: ["debug"], level: "all" },
        onLine: { appenders: ["access"], level: "all" },
      },
    });
  }

  getLog() {
    console.log(process.env.isDebug);
    return getLogger(process.env.isDebug === "dev" ? "default" : "onLine");
  }
}

export const logger = new myLog().getLog();
