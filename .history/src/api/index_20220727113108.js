/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 10:30:43
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-27 11:31:08
 * @FilePath: \app\src\api\index.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 当前这个模块：API进行统一管理
import requests from "./ajax";
import mockRequests from "./mockAjax";
// 三级联动接口
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests.get("/product/getBaseCategoryList");

// 获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get("/banner");
