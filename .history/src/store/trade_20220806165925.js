/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-06 16:47:27
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-06 16:59:25
 * @FilePath: \app\src\store\trade.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqAddressInfo, reqOrderInfo } from "@/api";
const state = {
  address: [],
};
const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address;
  },
};
const actions = {
  // 获取用户地址信息
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETUSERADDRESS", result.data);
    }
  },
  // 获取商品清单数据
  async getOrderInfo() {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("GETORDERINFO", result.data);
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
