/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-09 18:30:28
 * @LastEditTime: 2021-06-09 18:32:54
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findOne(_id: number) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: '3333' },
    ];
    return items.find(({ id }) => id === _id);
  }
}
