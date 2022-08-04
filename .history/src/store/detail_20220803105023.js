/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-01 17:30:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-03 10:50:23
 * @FilePath: \app\src\store\detail.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
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
  // 将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    // 加入购物车返回的解构
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    console.log(result);
  },
};
const getters = {
  // 路径导航数据的简化
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  // 产品信息数据的简化
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  // 产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
