import { useReducer, useState } from "react";
import RefHook from "./RefHook";

const initial = { counter: 0 };

// action = {type: string, payload: any}
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "set":
      return { counter: action.payload };
    default:
      break;
  }
};

const ReduceComponent = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [value, setValue] = useState(0);

  return (
    <div>
      Counter:{state.counter}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "set", payload: value })}>
        Reset
      </button>
      <RefHook />
    </div>
  );
};

export default ReduceComponent;
