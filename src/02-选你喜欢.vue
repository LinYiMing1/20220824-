<template>
  <div>
    <p>请选择你喜欢的专栏</p>
    <!-- 复选框 -->
    <label v-for="(item,index) in arr" :key="index" >
      <input type="checkbox" :value="item" v-model="hobby"> {{item}}
    </label>

    <!-- 渲染被选中的 -->
    <ul>
      <li v-for="(item,index) in hobby" :key="index">
        {{item}}
      </li>
    </ul>
    
    
  </div>
</template>

<script>
// 2022.08.25 作业2：选择喜欢的
// 1. 利用 v-for 遍历数组，将数据渲染到 checkbox 上


export default {
  data() {
    return {
    arr:["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
    hobby:[],
    };
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
