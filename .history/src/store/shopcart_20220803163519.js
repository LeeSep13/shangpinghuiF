/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-03 16:30:45
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-03 16:35:09
 * @FilePath: \app\src\store\shopcart.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqCartList } from "@/api";
const state = {};
const mutations = {};
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    console.log(result);
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
