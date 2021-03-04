import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ProductProvider from "./Context/food";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);
