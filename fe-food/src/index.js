import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { CartProvider } from "./Context/cart";
import ProductProvider from "./Context/food";

ReactDOM.render(
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>,
  document.getElementById("root")
);
