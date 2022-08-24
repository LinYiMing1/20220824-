// 2022.08.24 作业5：封装一个数组放大后求和的函数

// 1. 封装延迟函数
export const getSum = function (arr, n) {
  // 1.1 利用Array.map() 方法将 arr 数组放大到 n 倍，并返回一个新数组
  const newArr = arr.map((item) => {
    return item * n;
  });
  // 1.2 利用 Array.reduce() 方法求和
  return newArr.reduce((acc, item) => acc + item);
};
