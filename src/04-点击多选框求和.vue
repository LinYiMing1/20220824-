<template>
  <div>
    <p>选你喜欢的数据</p>

    <label v-for="(item,index) in arr" :key="index">
      <input type="checkbox" :value="item" v-model="likeArr">{{item}}
    </label>

    <p>您选中的元素，累加的值和为：{{ getSum }}</p>
    
  </div>
</template>

<script>
// 2022.08.25 作业3：选中数字求和
// 1. 渲染现有数据


export default {
  data() {
    return {
     arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
     likeArr:[]
    };
  },
  computed: {
    getSum() {
      return this.likeArr.reduce((sum, val) => {
        return (sum += val);
      }, 0);
    },
  },
  
}
</script>

<style scoped>

</style>
