/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-01 17:30:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-01 17:47:29
 * @FilePath: \app\src\store\detail.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqGoodsInfo } from "@/api";
const state = {
  goodInfo: {},
};
const mutations = {
  GETGOODSINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  // 获取产品信息的action
  async getGoodsInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
