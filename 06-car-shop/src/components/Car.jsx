import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CarDetails from "./CarDetails";

class Car extends Component {
  render() {
    const { car, isCarVisible, showCar } = this.props;
    const totalItems = car.reduce((acc, el) => acc + el.quantity, 0);

    return (
      <div>
        <span className="relative left-4 top-6">
          {totalItems > 0 ? <BubbleAlert value={totalItems} /> : null}
        </span>
        <button
          onClick={showCar}
          className="bg-green-600 text-white p-3 rounded-lg"
        >
          My Car
        </button>
        {isCarVisible ? <CarDetails car={car} /> : null}
      </div>
    );
  }
}

export default Car;
