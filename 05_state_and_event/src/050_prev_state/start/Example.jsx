import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    // 次のレンダリング時の値を指定しているだけ。
    setCount(count + 1);
    setCount((prevstate) => prevstate + 1);
    // この段階ではcountは反映されていない。
    console.log(count);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
