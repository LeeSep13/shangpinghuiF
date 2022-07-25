<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 10:46:06
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-18 17:12:56
 * @FilePath: \app\src\App.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
