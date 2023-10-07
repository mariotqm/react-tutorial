import { Component } from "react";

class BubbleAlert extends Component {
  render() {
    const { value } = this.props;
    return (
      <span className="bg-[crimson] rounded-2xl p-2 text-sm m-2 text-white w-[20px]">
        {(value && (value > 9 ? "9+" : value)) || ""}
      </span>
    );
  }
}

export default BubbleAlert;
