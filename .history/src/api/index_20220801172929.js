/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 10:30:43
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-01 17:29:29
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

// 获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");

// 获取搜索模块数据 请求方式：post  参数：需要带参数
// 当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数[至少是一个空对象]
export const reqGetSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

// 获取产品详情信息的接口
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });
