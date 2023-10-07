// All the functions that act as components, are pure functions, a pure function always return the same result

/* 
Hooks have two rules:
1. In loops, cannot be call, in top-level component, not in if, while, etc.
2. Just can be call in 2 ways, react components and custom hooks

- When custom hook always start with use*
*/
import { useState } from "react";
import CounterClass from "./CounterClass";

const FullName = ({ nameValue }) => {
  return <p>My Name is {nameValue}</p>;
};

// custom hook
const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial);
  const increment = () => {
    setCounter(counter + 1);
  };

  return [counter, increment];
};

const Counter = () => {
  const [counter, increment] = useCounter(0);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Add</button>
    </div>
  );
};

const CustomHooks = () => {
  return (
    <div>
      <FullName nameValue={"Mario"} />
      <Counter />
      <p>With Classes</p>
      <CounterClass />
    </div>
  );
};

export default CustomHooks;
