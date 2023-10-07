import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      { name: "tomatoe", price: 1.49, img: "/products/tomatoe.png" },
      { name: "lettuce", price: 0.49, img: "/products/lettuce.jpg" },
      { name: "apple", price: 2.49, img: "/products/apple.jpg" },
    ],
    car: [],
    isCarVisible: false,
  };

  addToCart = (product) => {
    const { car } = this.state;
    const existingProduct = car.find((x) => x.name === product.name);

    if (existingProduct) {
      const newCar = car.map((x) =>
        x.name === product.name ? { ...x, quantity: x.quantity + 1 } : x
      );
      this.setState({ car: newCar });
    } else {
      const newProduct = { ...product, quantity: 1 };
      this.setState({
        car: [...car, newProduct],
      });
    }
  };

  showCar = () => {
    if (!this.state.car.length) return;
    this.setState({ isCarVisible: !this.state.isCarVisible });
  };

  render() {
    const { isCarVisible } = this.state;
    return (
      <div className="font-inter">
        <Navbar
          car={this.state.car}
          isCarVisible={isCarVisible}
          showCar={this.showCar}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
