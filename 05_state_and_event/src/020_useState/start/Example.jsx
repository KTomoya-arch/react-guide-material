import { useState } from "react";

const Example = () => {
  // let [val, setVal] = useState("");
  let displayVal = "unko";
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          debugger;
          displayVal = e.target.value;
        }}
      />
      ={displayVal}
    </>
    // <>
    //   <input type="text" onChange={(e) => setVal(e.target.value)} />={val}
    // </>
  );
};

export default Example;
