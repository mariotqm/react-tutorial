import { Component } from "react";
import Logo from "./Logo";
import Car from "./Car";

class Navbar extends Component {
  render() {
    const { car, isCarVisible, showCar } = this.props;
    return (
      <nav className="flex flex-row items-center h-24 justify-between relative py-0 px-5 shadow-lg">
        <Logo />
        <Car car={car} isCarVisible={isCarVisible} showCar={showCar} />
      </nav>
    );
  }
}

export default Navbar;
