import Vue from "vue";
// import App from "./App.vue";

// 1. 导入 vue 作业
// import App from "./01-美女帅哥.vue";
// import App from "./02-增删数据.vue";
// import App from "./03-购物车.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 2. 导入 promise 延迟函数
// import './04-promise.js'

// 3. 导入数组放大 n 倍求和函数
// import { getSum } from "./05-数组求和.js";
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(getSum(arr, 10));
