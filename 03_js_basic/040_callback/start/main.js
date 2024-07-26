// callback関数は引数に関数が渡ってくる
function print(callback) {
  console.log(callback);
  // 末尾の()は関数を実行している
  const result = callback();
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

debugger;
print(fn);
