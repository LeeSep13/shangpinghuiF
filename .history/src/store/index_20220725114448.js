/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 11:21:26
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-25 11:44:48
 * @FilePath: \app\src\store\index.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex);

// 对外暴露Store类的一个实例
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
