/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-03 16:30:45
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-03 17:19:12
 * @FilePath: \app\src\store\shopcart.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqCartList } from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  // 计算出来的购物车数据
  // cartInfo
};
export default {
  state,
  mutations,
  actions,
  getters,
};
