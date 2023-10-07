import { Component } from "react";

class CounterClass extends Component {
  state = { counter: 0 };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}

export default CounterClass;
