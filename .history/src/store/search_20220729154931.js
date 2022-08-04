/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 11:40:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-29 15:49:31
 * @FilePath: \app\src\store\search.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqGetSearchInfo } from "@/api";
// search模块的小仓库
const state = {};
const mutations = {};
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params = {}) {
    // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
