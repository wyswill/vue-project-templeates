/*
 * @LastEditors: wyswill
 * @Description: 配置
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 18:11:25
 */
const host = "weita.online";
export const dbConfig = {
  type: "mongodb",
  port: 27017,
  username: "root",
  password: "wyswilladmin",
  database: "twitter",
  synchronize: true,
  logging: false,
  useUnifiedTopology: true,
  authSource: "admin",
  host,
};
export const redisConfig = [
  {
    name: "loginInfo",
    port: 6379,
    host,
    password: "",
    db: 0,
  },
];
// 加密key
export const encryptKey = "ZCXVCNAJKLW123789@#$%^&*&*()(&";
// 邮箱账号密码
export const emailConf = {
  user: "1151373571@qq.com",
  pass: "ljwcmpfwszifjcab",
};
export const qiniuConf = {
  accessKey: "915Eb2eYVVJAqax38FTs05BTk-leg9Mm8sYYNq2r",
  secretKey: "hDEKoa0RK5z-r-9cMRJvFPBaQ4z6QPDG4b8CehPU",
  bucket: "twitte",
  url: "ss1.gupiao66.com",
};
