<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-28 17:17:55
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-28 17:18:05
 * @FilePath: \app\src\components\Carousel\index.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="swiper-container" ref="floorSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list.carouselList"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
export default {
  name: "index",
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
