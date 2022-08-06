/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-20 11:43:12
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-05 22:32:09
 * @FilePath: \app\src\api\ajax.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// start：进度条开始   done：进度条结束

// 当前模块中进入store
import store from "@/store";

// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request 就是axios，只不过稍微配置一下
const request = axios.create({
  // 配置对象
  // 基础路径，发请求的时候，路径当中会出现api
  baseURL: "/api",
  // 代表请求超时的时间5s
  timeout: 5000,
});

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
  // config：配置对象，对象里面有一个属性很重要，headers请求头
  if (store.state.detail.uuid_token) {
    // 请求头添加一个字段（userTempId）：需要和后台商量
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  // 需要携带token带给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token.token;
  }
  // 进度条开始
  nprogress.start();
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    // 进度条结束
    nprogress.done();
    return res.data;
  },
  (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error("faile"));
  }
);

// 对外暴露
export default request;