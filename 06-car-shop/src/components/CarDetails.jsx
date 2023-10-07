import { Component } from "react";

class CarDetails extends Component {
  render() {
    const { car } = this.props;

    return (
      <div className="bg-stone-50 absolute mt-8 shadow-lg rounded-md w-[300px] right-4">
        <ul>
          {car.map((el) => (
            <li
              className="mt-3 flex justify-around items-center border-b-2 border-stone-400"
              key={el.name}
            >
              <img className="w-12" src={el.img} alt={`${el.name}-photo`} />
              {el.name}
              <span>x{el.quantity}</span>
            </li>
          ))}
          <li className="mt-3">Total</li>
        </ul>
      </div>
    );
  }
}

export default CarDetails;
