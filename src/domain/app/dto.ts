/*
 * @LastEditors: wyswill
 * @Description: 公共校验
 * @Date: 2021-02-04 16:59:04
 * @LastEditTime: 2021-02-04 17:00:47
 */

import { IsNotEmpty } from "class-validator";

export class QueryList {
  @IsNotEmpty({ message: "页面不能为空" })
  page: number;
  @IsNotEmpty({ message: "大小不能为空" })
  size: number;
}
