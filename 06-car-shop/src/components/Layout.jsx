import { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div className="flex items-center flex-col">
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
