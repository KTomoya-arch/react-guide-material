import { useState } from "react";

const Child = (props) => {
  return (
    <>
      <span>{props.state.value}</span>
    </>
  );
};

const Example = (props) => {
  const [state, setState] = useState({ value: 0 });
  props.state = { value: 1 };

  return (
    <>
      <div>
        <Child state={state} />
      </div>
    </>
  );
};

export default Example;
