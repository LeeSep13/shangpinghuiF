/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-01 17:30:34
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-03 16:54:14
 * @FilePath: \app\src\store\detail.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
// 封装游客身份模块uuid--->生成一个随机字符串（永久不变）
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodInfo: {},
  // 游客临时身份
  uuid_token: getUUID(),
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
    // 前台将参数带给服务器，服务器写入数据成功，只返回code==200，代表成功
    // 因为服务器没有返回其余数据，因此不需要存储数据
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    // 代表服务器加入购物车成功
    if (result.code == 200) {
      return "ok";
    } else {
      // 代表加入失败
      return Promise.reject(new Error("faile"));
    }
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
