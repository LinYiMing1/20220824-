// 2022.08.24 作业4：使用 promise 实现一个暂停函数

// 1. 封装延迟函数
function sleep(t) {
  // 1.1 函数的返回值是一个 promise 实例对象
  return new Promise((resolve) => {
    // 1.1 设置定时器
    setTimeout(resolve, t);
  });
}

// 2. 封装执行函数
async function main() {
  // 2.1 实现每隔 3 秒，打印一次数字
  for (let i = 0; i < 10; i++) {
    console.log(i);
    //   2.2 调用 sleep() 函数前加 await 关键字
    await sleep(3000);
  }
}

main();
