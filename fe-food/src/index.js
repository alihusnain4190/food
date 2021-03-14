import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { CartProvider } from "./Context/cart";
import ProductProvider from "./Context/food";
import { AuthProvider } from "./Context/user";
ReactDOM.render(
  <AuthProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </AuthProvider>,
  document.getElementById("root")
);
