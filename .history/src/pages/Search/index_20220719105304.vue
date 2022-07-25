<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 16:47:41
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-19 10:53:03
 * @FilePath: \app\src\pages\Search\index.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div>
    <h1>params参数----{{ $route.params.keyword }}======{{ keyword }}</h1>
    <h1>query参数----{{ $route.query.k }}====={{ k }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["keyword", "k"],
};
</script>

<style></style>
