/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-03 16:52:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-03 16:58:21
 * @FilePath: \app\src\utils\uuid_token.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { v4 as uuidv4 } from "uuid";
// 要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = () => {
  // 先从本地存储获取uuid
  let uuid_token = localStorage.getItem("UUIDTOKEN");
  // 如果没有
  if (!uuid_token) {
    // 生成游客临时身份
    uuid_token = uuidv4();
    // 本地存储一次
    localStorage.setItem("UUIDTOKEN", uuid_token);
  }
};
