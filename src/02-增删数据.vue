<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="item">
        {{item}}
        <!-- 给 a 标签绑定点击事件，调用函数的时候传参 -->
        <a href="" @click="dele(index)">删除</a>
      </li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
// 2022.08.24 作业2：点击按钮， 新增一个li(随机数字)和删除按钮, 点击删除按钮, 删除对应的li和值
// -01：利用 v-for 渲染数据
// -02：利用 v-on:click 绑定点击事件

export default {
  data(){
    return {
      arr:[],
    }
  },
  methods:{
   btn(){
    // 01 生成 0-9 随机整数
    let num =Math.ceil(Math.random()*10)
    // 02 追加进原有数组
    this.arr.push(num)
   },
   dele(index){
    // 03 删除对应索引的数据
    this.arr.splice(index,1)
   }
  }
}
</script>

<style scoped>

</style>
