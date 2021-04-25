/*
 * @LastEditors: wyswill
 * @Description: 
 * @Date: 2021-04-25 17:40:03
 * @LastEditTime: 2021-04-25 17:50:10
 */
import { Redis } from "ioredis";

export class CacheService {
  constructor(protected readonly client: Redis) {}

  /**
   * @Description: 封装设置redis缓存的方法
   * @param key {String} key值
   * @param value {String} key的值
   * @param seconds {Number} 过期时间
   * @return: Promise<any>
   */
  public async set(key: string, value: any, seconds?: number): Promise<any> {
    value = JSON.stringify(value);
    if (!seconds) {
      await this.client.set(key, value);
    } else {
      await this.client.set(key, value, "EX", seconds);
    }
  }

  /**
   * @Description: 设置获取redis缓存中的值
   * @param key {String}
   */
  public async get(key: string) {
    const data = await this.client.get(key);

    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  /**
   * @Description: 根据key删除redis缓存数据
   * @param key {String}
   * @return:
   */
  public async del(key: string): Promise<any> {
    await this.client.del(key);
  }

  /**
   * @Description: 清空redis的缓存
   */
  public async flushall(): Promise<any> {
    await this.client.flushall();
  }

  /**
   * set存储
   * @param key set名称
   * @param value 值数组
   */
  public async sadd(key: any, ...value: any[]) {
    return await this.client.sadd(key, value);
  }

  /**
   * 随机从set中取出数据
   * @param key set名
   * @param count 数据数量默认 0
   */
  public async randomGet(key: string, count: number = 0): Promise<string[]> {
    return await this.client.send_command(`SRANDMEMBER`, [key, count]);
  }
}
