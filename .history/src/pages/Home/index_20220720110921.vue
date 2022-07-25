<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 16:45:51
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-20 11:09:21
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
    <rank />
  </div>
</template>

<script>
// 引入其余的组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
  },
};
</script>

<style></style>
