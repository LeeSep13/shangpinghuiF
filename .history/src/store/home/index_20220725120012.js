/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 11:42:20
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-25 12:00:12
 * @FilePath: \app\src\store\home\index.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqCategoryList } from "@/api";
// home模块的小仓库
const state = {}; // state：仓库存储数据的地方
const mutations = {}; // mutations：修改state的唯一手段
const actions = {
  // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList() {
    let result = await reqCategoryList();
  },
}; // action：处理action，可以书写自己的业务逻辑，也可以处理异步
const getters = {}; // getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便

export default {
  state,
  mutations,
  actions,
  getters,
};
