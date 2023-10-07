import { Component } from "react";
import Button from "./Button";

class Product extends Component {
  render() {
    const { productInfo, addToCart } = this.props;

    return (
      <div className="border-2 border-gray-400 rounded-lg shadow-lg p-2 m-2 flex flex-col justify-center items-center w-[1/3]">
        <img
          className="w-[10rem] h-auto"
          src={productInfo.img}
          alt={productInfo.name}
        />
        <h1>
          {productInfo.name.charAt(0).toUpperCase() + productInfo.name.slice(1)}
        </h1>
        <p>{productInfo.price}</p>
        <Button onClick={() => addToCart(productInfo)}>Add to car</Button>
      </div>
    );
  }
}

export default Product;
