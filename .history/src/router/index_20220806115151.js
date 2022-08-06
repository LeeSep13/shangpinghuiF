/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 16:52:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-06 11:51:51
 * @FilePath: \app\src\router\index.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

// 使用插件
Vue.use(VueRouter);
// 引入store
import store from "@/store";

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push | replace
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败回调
// call || apply 区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this.location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this.location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// VueRouter类的实例
let router = new VueRouter({
  // 配置路由
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 返回的这个y=0，代表的滚动条在最上方
    return { y: 0 };
  },
});

// 全局守卫，前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
  // to:可以获取到要跳转的路由信息
  // from：可以获取到从哪个路由而来的信息
  // next：放行函数
  next();
  // 获取仓库中的token---可以确定用户登录了
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  // 用户已登录
  if (token) {
    // 已经登录了而且还想去登录页或注册页 --是不行的
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      // 已经登录了，访问的是非登录与注册
      // 登录了且拥有用户信息放行
      if (name) {
        next();
      } else {
        // 登录了且没有用户信息，
        // 在路由跳转之前派发action让仓库存储用户信息
        try {
          // 获取用户信息，首页展示
          await store.dispatch("getUserInfo");
          // 放行
          next();
        } catch (error) {
          // token失效了获取不到用户信息，重新登录
          // 清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    // 未登录
    next();
  }
});

export default router;
