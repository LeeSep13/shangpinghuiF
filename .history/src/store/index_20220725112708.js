/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 11:21:26
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-25 11:27:07
 * @FilePath: \app\src\store\index.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex);
// state：仓库存储数据的地方
const state = {};
// mutations：修改state的唯一手段
const mutaions = {};
// action：处理action，可以书写自己的业务逻辑，也可以处理异步
const action = {};
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
