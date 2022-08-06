/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-25 11:21:26
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-05 17:16:34
 * @FilePath: \app\src\store\index.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex);
// 引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
// 对外暴露Store类的一个实例
export default new Vuex.Store({
  // 实现Vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
  },
});
