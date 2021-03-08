import React, { useContext } from "react";
import { CartContext } from "../Context/cart";
import { FaPlus } from "react-icons/fa";
const Cart = () => {
  const { carts, totalPrice } = useContext(CartContext);
  console.log(carts);
  return (
    <section className="cart">
      {carts.map((item) => {
        return (
          <>
            <div key={item.p_id} className="cart_container">
              <img src={item.p_image} />
              <p>{item.p_name}</p>
              <button className="minus">-</button>
              <p>{item.p_amount}</p>
              <button className="plus">+</button>
              <button className="remove">remove</button>
              <p>{item.price}</p>
            </div>
            <div>
              <span>Total</span>
              <p>{totalPrice}</p>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Cart;
