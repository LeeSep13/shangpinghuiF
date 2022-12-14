/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-05 17:15:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-05 22:09:37
 * @FilePath: \app\src\store\user.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */

import { reqGetCode, reqUserLogin, reqUserRegister, reqUserInfo } from "@/api";
import { setToken, getToken } from "@/utils/token";
// 登录与注册的模块
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
};
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    // 获取验证码的这个接口，把验证码返回，但是正常情况，后台把验证码发到用户手机上【省钱】
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  // 用户注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  // 登录业务（token）
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    // 服务器下发token，用户唯一标识符（uuid）
    // 将来经常通过带token找服务器要用户信息进行展示
    if (result.code == 200) {
      // 用户已经登录成功且获取到token
      commit("USERLOGIN", result.data.token);
      // 持久化存储token
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },

  // 获取用户信息
  async getUserInfo() {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
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
