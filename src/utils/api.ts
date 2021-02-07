/*
 * @LastEditors: wyswill
 * @Description: api
 * @Date: 2021-01-11 22:09:01
 * @LastEditTime: 2021-02-07 11:20:51
 */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { baneUlr } from './constant';

const entity: AxiosInstance = axios.create({
  baseURL: baneUlr,
  timeout: 10000,
  proxy:
    process.env.NODE_ENV === 'development'
      ? {
          host: '192.168.31.196',
          port: 10809,
        }
      : false,
});

entity.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    }
  },
  (error: any) => Promise.reject(error),
);
