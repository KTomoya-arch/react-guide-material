// // 分割代入と呼ぶ
// const [unko, chinko, sums] = ["配列1", "配列2", "配列3"];
// console.log(unko);
// console.log(chinko);
// console.log(sums);

// // オブジェクトの場合を考える、オブジェクトの場合はプロパティに一致をさせる必要がある
// const { x, y } = {
//   x: "オブジェクト1",
//   y: "オブジェクト2",
//   z: "オブジェクト3",
// };
// console.log(x);
// console.log(y);

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
