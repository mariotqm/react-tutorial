import { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        {...this.props}
        className="p-3 bg-slate-900 text-white my-2 rounded-sm text-md"
      >
        Add to Car
      </button>
    );
  }
}

export default Button;
