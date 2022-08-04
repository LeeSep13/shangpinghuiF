/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-08-01 16:50:33
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-03 15:42:55
 * @FilePath: \app\src\router\routes.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
// 配置路由信息
export default [
  // 重定向，在项目跑起来的时候，访问/,立马让他定向到首页
  {
    path: "*",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
    name: "search",
    // 路由组件能不能传递 props 数据?
    // 布尔值写法：params
    // props:true,
    // 对象写法：额外的给路由组件传递一些props
    // props:{a:1,b:2},
    // 函数写法：可以params参数、query参数，通过props传递给路由组件
    props: ($route) => ({
      keyword: $route.params.keyword,
      k: $route.query.k,
    }),
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
];
