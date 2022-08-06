/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-05 17:15:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-05 17:19:03
 * @FilePath: \app\src\store\user.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */

import { reqGetCode } from "@/api";

// 登录与注册的模块
const state = {};
const mutations = {};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
