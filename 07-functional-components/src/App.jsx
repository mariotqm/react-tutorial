import { useEffect, useState } from "react";

const IntervalFunction = ({ counter }) => {
  // desuscribe
  useEffect(() => {
    const i = setInterval(() => {
      console.log(counter);
    }, 1000);

    return () => clearInterval(i);
  }, [counter]);

  return <p>Interval</p>;
};

// useEffect from classes

import { Component } from "react";
import ReduceComponent from "./Reducer";

class Interval extends Component {
  interval = "";
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.props.counter);
    }, 1000);
  }
  render() {
    return (
      <div>
        <p>Interal from classes</p>
      </div>
    );
  }
}

const App = () => {
  const [counter, useCounter] = useState(0);

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          useCounter(counter + 1);
        }}
      >
        Increment
      </button>

      <p>This is my reducer</p>
      <ReduceComponent />
    </div>
  );
};

export default App;
