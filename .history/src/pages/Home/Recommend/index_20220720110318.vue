<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-20 11:02:42
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-20 11:03:17
 * @FilePath: \app\src\pages\Home\Recommend\index.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <!--今日推荐-->
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img src="./images/home/clock.png" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li class="banner">
          <img src="./images/home/today01.png" />
        </li>
        <li class="banner">
          <img src="./images/home/today02.png" />
        </li>
        <li class="banner">
          <img src="./images/home/today03.png" />
        </li>
        <li class="banner">
          <img src="./images/home/today04.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
  mounted() {},
};
</script>
<style scoped></style>
