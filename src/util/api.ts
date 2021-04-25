/*
 * @LastEditors: wyswill
 * @Description: 请求文件
 * @Date: 2021-01-29 15:25:09
 * @LastEditTime: 2021-04-25 18:03:13
 */

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { baseUrl } from "./constant";

const axiosEntity: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default async function request(config: AxiosRequestConfig) {
  return await axiosEntity.request(config);
}
