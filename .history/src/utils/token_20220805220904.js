/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-05 21:58:51
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-05 22:09:04
 * @FilePath: \app\src\utils\token.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 存储token
export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};

// 获取token
export const getToken = () => {
  return localStorage.getItem("TOKEN");
};
