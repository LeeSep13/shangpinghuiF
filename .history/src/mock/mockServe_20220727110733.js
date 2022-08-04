/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-27 10:48:49
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-27 11:07:33
 * @FilePath: \app\src\mock\mockServe.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 引入mockjs模块
import Mock from "mockjs";
// 把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入]
// webpack默认对外暴露的：图片，JSON数据格式
import banner from "./bannner.json";
import floor from "./floor.json";

// mock数据：第一个参数请求地址  第二个参数：请求数据
Mock.mock("/mock/banner", { code: 200, data: banner }); // 模拟首页大的轮播图数据
Mock.mock("/mock/floor", { code: 200, data: floor });
