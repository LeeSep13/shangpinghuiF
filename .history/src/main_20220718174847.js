/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 10:46:06
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-18 17:48:47
 * @FilePath: \app\src\main.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注册路由：底下的写法KV一致省略V【router小写的】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
}).$mount("#app");
