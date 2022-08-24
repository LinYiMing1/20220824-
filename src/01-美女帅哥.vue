<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">
        {{item}}
      </li>
    </ul>
    <button @click="goReverse">走一走</button>
  </div>
</template>

<script>
// 2022.08.24 作业1：点击按钮，改变 li 的顺序
// -01：利用 v-for 渲染数据
// -02：利用 v-on:click 绑定点击事件

export default {
  data(){
    return {
      arr:['美女','程序员','帅哥'],
    }
  },
  methods:{
goReverse(){
  this.arr.push(this.arr[0])
  // 移出第一项
  this.arr.shift()
}
  }
}
</script>

<style scoped>

</style>
