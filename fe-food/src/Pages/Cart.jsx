import React, { useContext } from "react";
import { Link } from "@reach/router";
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
        <table>
          <tbody>
            {carts.map((item) => {
              return (
                <tr key={item.p_name} className="cart_container">
                  <td>
                    <img src={item.p_image} alt={item.p_name} />
                  </td>
                  <td>
                    <p className="pizza__amount">{item.p_name}</p>
                  </td>
                  <td className="cart_button">
                    <button
                      onClick={() => {
                        dereaseItem(item.p_id, item.p_amount);
                      }}
                      className="minus"
                    >
                      -
                    </button>
                    <p className="pizza__amount">{item.p_amount}</p>
                    <button
                      onClick={() => {
                        increaseItem(item.p_id);
                      }}
                      className="plus"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        removeItem(item.p_id);
                      }}
                      className="remove"
                    >
                      REMOVE
                    </button>
                  </td>
                  <td>
                    <p className="price">
                      {item.p_amount * item.p_price}&#163;
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <div className="cartTotal">
        <p>Total</p>
        <p>{totalPrice}&#163;</p>
      </div>
      <Link to="/purchase">
        <button className="btn btn__purchase">Purchase</button>
      </Link>
    </>
  );
};
/* {carts.map((item) => {
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
        })} */
//   </section>
//   <div className="cartTotal">
//     <p>Total</p>
//     <p>{totalPrice}&#163;</p>
//   </div>
// </>
// );
// };

export default Cart;
