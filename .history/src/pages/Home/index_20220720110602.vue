<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 16:45:51
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-20 11:06:01
 * @FilePath: \app\src\pages\Home\index.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <!-- 三级联动全局组件：三级联动已经注册为全局组件，因此不需要再引入 -->
    <type-nav />
    <list-container />
    <recommend />
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
  },
};
</script>

<style></style>
