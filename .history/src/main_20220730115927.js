/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 10:46:06
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-30 11:59:13
 * @FilePath: \app\src\main.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
// 定义全局组件:在入口文件注册一次之后，在任何组件当中都可以使用
import TypeNav from "@/components/TypeNav"; //三级联动组件
import Carousel from "@/components/Carousel"; //轮播图组件

// 第一个参数：全局组件的名字；第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
// 引入MockServe.js----mock数据
import "@/mock/mockServe";
// 引入swiper样式
import "swiper/css/swiper.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
  }，
  // 注册路由：底下的写法KV一致省略V【router小写的】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store,
}).$mount("#app");
