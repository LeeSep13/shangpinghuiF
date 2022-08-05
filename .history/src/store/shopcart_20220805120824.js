/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-03 16:30:45
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-04 18:19:30
 * @FilePath: \app\src\store\shopcart.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from "@/api";
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
  // 删除购物车某一个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  // 修改购物车某一个产品的选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    // 获取购物车中全部的产品（数组）
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1
          ? dispatch("deleteCartListBySkuId", item.skuId)
          : "";
      PromiseAll.push(promise);
    });
    // 只要全部的PromiseAll里的promise都成功，返回结果即为成功
    // 如果有一个失败，返回结果即为失败
    return Promise.all(PromiseAll);
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
