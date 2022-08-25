import Vue from "vue";
import App from "./App.vue";
// 1. 导入 vue 作业
// import App from "./01-水果店.vue";
// import App from "./02-选你喜欢.vue";
// import App from "./03-买书.vue";
// import App from "./04-点击多选框求和.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
