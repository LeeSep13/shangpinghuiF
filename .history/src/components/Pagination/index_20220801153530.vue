<!--
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-31 17:19:23
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-08-01 15:35:29
 * @FilePath: \app\src\components\Pagination\index.vue
 * @Description: 
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
-->
<template>
  <div class="pagination">
    <button>&lt;上一页</button>
    <button>1</button>
    <button>···</button>

    <!-- 中间部分 -->
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-show="page >= startNumAndEndNum.start"
    >
      {{ page }}
    </button>

    <button>···</button>
    <button>{{ totalPage }}</button>
    <button>下一页></button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
import { stat } from "fs";

export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 总共多少页
    totalPage() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算出连续的页码的起始数字与结束数字【连续页码的数字：至少是5】
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      // 先定义两个变量存储起始数字与结束数字
      let start = 0,
        end = 0;
      // 总页数没有连续页码多
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 总页数大于等于连续页码数
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // start为0或负数的时候
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // end大于总页码
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
