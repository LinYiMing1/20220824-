<template>

  <div>
    <p>欢迎光临_Vue 开发的收银系统_水果店</p>
    <table class="tb">
      <tr>
        <th>苹果 10￥ / 斤，折扣：8折  </th>
      </tr>
      <tr>
        <td>
        <span>请输入你要购买的斤数</span>
        <input type="text" v-model.number="weight">
        </td>
      </tr>
     <tr>
      <td>
      <button @click="pay">结账买单</button>
      </td>
     </tr>
     <tr>
      <td>
      <span>结账单：总价：{{bill.price}}￥元 折后价：{{bill.save}}￥元 省了：{{bill.lessen}}￥元</span>
      </td>
     </tr>

    </table>
    
  </div>
</template>

<script>
// 2022.08.25 作业1：逛水果店
// 1. v-model 双向绑定 input 表单和数据
// 2. 给 button 绑定点击事件，计算价格
// 3. v-bind 将对应价格渲染到 span 标签内


export default {
  data() {
    return {
      weight: 0,
      bill:{
        price:0,
        save:0,
        lessen:0,
      }
    };
  },
  methods:{
    pay(){
      this.bill.price = this.weight*10
      this.bill.save = this.bill.price*0.8
      this.bill.lessen = this.bill.price - this.bill.save
    }
  }
}
</script>

<style scoped>
.tb {
  border: 1px solid #cccc;
}
 .tb td,
 .tb th {
  width: 500px ;
  padding: 5px;
  border: 1px solid black;
  text-align: center;
 }
</style>
