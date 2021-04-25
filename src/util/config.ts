/*
 * @LastEditors: wyswill
 * @Description: 配置
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 17:55:43
 */
const host = "localhost";
export const dbConfig = {
  type: "",
  port: 0,
  username: " ",
  password: " ",
  database: " ",
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
