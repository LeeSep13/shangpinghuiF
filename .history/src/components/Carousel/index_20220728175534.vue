<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-28 17:17:55
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-28 17:55:33
 * @FilePath: \app\src\components\Carousel\index.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="swiper-container" ref="Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
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
// 引入Swiper
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    // 问题一：v-for还未执行完，DOM结构没有更新，就初始化swiper实例
    // 为什么swiper实例在mounted当中直接书写不可以，因为结构还没有完整
    list: {
      // 立即监听:不管数据有没有变化，立即监听一次
      immediate: true,
      // 为什么watch监听不到list，因为这个数据从来没有变化（数据是父组件给的，给的时候就是一个对象，里面该有的数据都有）
      handler() {
        // 如果执行handler方法，代表组件实例身上这个属性的属性值已经有了
        // 当前这个函数执行：只能保证数据已经有了，但是你没办法保证v-for已经执行结束了
        // v-for执行完毕，才有结构【现在在watch当中没办法保证】
        // 因此还是需要用nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.Swiper, {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 点击小球的时候也切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>
<style scoped></style>
