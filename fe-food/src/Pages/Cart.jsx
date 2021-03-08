import React, { useContext } from "react";
import { CartContext } from "../Context/cart";
const Cart = () => {
  const {
    carts,
    totalPrice,
    dereaseItem,
    increaseItem,
    removeItem,
  } = useContext(CartContext);
  return (
    <>
      <section className="cart">
        {carts.map((item) => {
          return (
            <>
              <div key={item.p_id} className="cart_container">
                <img src={item.p_image} alt={item.p_name} />
                <p>{item.p_name}</p>
                <button
                  onClick={() => {
                    dereaseItem(item.p_id, item.p_amount);
                  }}
                  className="minus"
                >
                  -
                </button>
                <p>{item.p_amount}</p>
                <button
                  onClick={() => {
                    increaseItem(item.p_id);
                  }}
                  className="plus"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    removeItem(item.p_id);
                  }}
                  className="remove"
                >
                  REMOVE
                </button>
                <p className="price">{item.p_amount * item.p_price}&#163;</p>
              </div>
            </>
          );
        })}
      </section>
      <div className="cartTotal">
        <p>Total</p>
        <p>{totalPrice}&#163;</p>
      </div>
    </>
  );
};

export default Cart;
