/*
 * @Author: Lee && lsh133417@163.com
 * @Date: 2022-07-18 15:55:26
 * @LastEditors: Lee && lsh133417@163.com
 * @LastEditTime: 2022-07-25 10:56:06
 * @FilePath: \app\vue.config.js
 * @Description:
 * Copyright (c) 2022 by Lee email: lsh133417@163.com, All Rights Reserved.
 */
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};
