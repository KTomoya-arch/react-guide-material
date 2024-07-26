// 非同期処理(Proimise)
// これが同期処理
let a = 0;
// console.log(a);

// これが非同期処理
// rejectは不具合が起こった際に使用する
// thenメソッドはチェーンして使用することができる
new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000);
})
  .then((b) => {
    console.log(b);
    return b;
  })
  .then((d) => {
    console.log(d);
  })
  .catch((c) => {
    console.log(c);
  });
