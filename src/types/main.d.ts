/*
 * @LastEditors: wyswill
 * @Description: 公共类型文件
 * @Date: 2021-01-29 15:41:23
 * @LastEditTime: 2021-03-08 15:09:48
 */

export type UpFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
};
