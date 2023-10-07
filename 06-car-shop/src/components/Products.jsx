import { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div className="flex flex-row justify-between m-4 my-6">
        {products.map((product) => (
          <Product
            productInfo={product}
            key={product.name}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
  }
}

export default Products;
