import React, { useState } from "react";
const CartContext = React.createContext();
function CartProvider({ children }) {
  let data = [
    {
      p_id: 1,
      p_image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80",
      p_sign:
        "https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 ",
      p_name: "BBQ-chicken",
      p_size: "larg",
      price: "15",
      dip: "Garlic dip",
    },
  ];
  const [carts, setCarts] = useState(data);
  const [pizzaPirce, setPizzaPrice] = useState(0);
  const totalItem = carts.length;
  const pizzaSizePrice = (price) => {
    setPizzaPrice(price);
  };
  const hadnleAdd = (data) => {
    const { p_id, p_image, dip, p_size } = data;
    let obj = { p_id, p_image, p_size, price: pizzaPirce, dip };
    console.log(obj);
  };
  return (
    <CartContext.Provider
      value={{ carts, totalItem, hadnleAdd, pizzaSizePrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
