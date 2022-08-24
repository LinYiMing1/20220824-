<template>
  <div>
   <div class="container">
    <div class="red-green-light">
      <div class="light red"></div>
      <div class="light green"></div>
      <div class="light yellow"></div>
    </div>
  </div>
  </div>
</template>

<script>
// 2022.08.24 作业6：实现红绿灯


export default {
  data() {
    return {};
  },
  methods:{}
}
</script>

<style scoped>
 .container {
      width: 300px;
      display: flex;
      justify-content: space-between;
    }

    .red-green-light {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 70px;
      height: 240px;
      background-color: #333;
      border-radius: 5px;
    }

    .light {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #fff;
    }

    .red-green-light .light:nth-child(1).active {
      background-color: red;
    }

    .red-green-light .light:nth-child(2).active {
      background-color: green;
    }

    .red-green-light .light:nth-child(3).active {
      background-color: goldenrod;
    }
</style>
