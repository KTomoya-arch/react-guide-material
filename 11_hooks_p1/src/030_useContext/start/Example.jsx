import Child from "./components/Child";
import { createContext } from "react";
// GrandChildに渡す
export const MyContext = createContext("hello");
// useContext
const Example = () => {
  return <Child />;
};

export default Example;
