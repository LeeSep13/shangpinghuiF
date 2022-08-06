/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-06 16:47:27
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-06 16:50:51
 * @FilePath: \app\src\store\trade.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqAddressInfo } from "@/api";
const state = {};
const mutations = {};
const actions = {
  // 获取用户地址信息
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
