import React, { useContext } from "react";
import { CartContext } from "../Context/cart";
const Cart = () => {
  const { carts } = useContext(CartContext);
  // console.log(carts.);
  return (
    <section className="cart">
      {carts.map((item) => {
        return (
          <div key={item.p_id}>
            <img src={item.p_image} />
            <p>{item.p_name}</p>
            <button>-</button>
            <p>{item.p_amount}</p>
            <button>+</button>
            <button>remove</button>
            <p>{item.price}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Cart;
