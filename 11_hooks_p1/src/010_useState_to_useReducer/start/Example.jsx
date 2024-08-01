import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {
    switch (action) {
      case "+":
        return ++prev;
      case "-":
        return --prev;
      default:
        throw new Error("不明なactionです。");
    }
  }, 0);
  const rcountUp = () => {
    dispatch("+");
  };
  const rcountDown = () => {
    dispatch("-");
  };
  return (
    <>
      <h3>{rstate}</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
