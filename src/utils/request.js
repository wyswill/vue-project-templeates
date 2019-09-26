import axios from "axios";
import {Message} from "element-ui";
import store from "@/store";
import {getToken} from "@/utils/auth";

// 返回请求路径URL
export let commonUrl = () => {
  return "http://yxb.51quicker.com";
};
// 返回图片，公共请求的URL
export let commonRequest = () => {
  return "http://yxb.51quicker.com/common";
};

// 请求前缀

// 请求前缀
export const request = obj => {
  return new Promise(function (resolve, reject) {
    let reqObj = {
      url: `${commonUrl()}${obj.url}`,
      method: obj.method,
      data: obj.data,
      withCredentials: true
    };
    if (obj.method === "post") {
      reqObj = Object.assign(reqObj, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
      });
    }
    axios(reqObj)
      .then(res => {
        resolve(res.data);
      })
      .catch(function (error) {
        // console.log("请求错误");
        reject(error);
      });
  });
};


// create an axios instance
const service = axios.create({
  baseURL: commonUrl(), // api 的 base_url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
