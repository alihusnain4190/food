import React, { useEffect, useState } from "react";
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
  const [carts, setCarts] = useState([]);
  const [pizzaPirce, setPizzaPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [drinkPrice, setDrinkPrice] = useState(0);
  useEffect(() => {
    const total = carts.reduce((acc, cur) => (acc = acc + cur.p_amount), 0);

    setTotalItem(total);
    let newTotal = carts.reduce((acc, cur) => {
      return (acc = acc + cur.p_amount * cur.p_price);
    }, 0);
    setTotalPrice(newTotal);
  }, [carts]);
  const pizzaSizePrice = (price) => {
    setPizzaPrice(price);
  };
  const drinkSizePrice = (price) => {
    console.log(price);
    setDrinkPrice(price);
  };
  const increaseItem = (id) => {
    const newCart = carts.map((item) => {
      if (item.p_id === id) {
        item.p_amount = item.p_amount + 1;
      }
      return item;
    });
    setCarts(newCart);
  };
  const removeItem = (id) => {
    const newCart = carts.filter((item) => {
      if (item.p_id !== id) return item;
    });
    setCarts(newCart);
  };
  const dereaseItem = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
    } else {
      const newCart = carts.filter((item) => {
        if (item.p_id === id) {
          item.p_amount = item.p_amount - 1;
        }
        return item;
      });
      setCarts(newCart);
    }
  };
  const hadnleAdd = (pizza) => {
    const { p_id, p_image, p_name } = pizza;
    let price = pizzaPirce;
    let dprice = 0;
    if (pizzaPirce === 0) {
      price = pizza.p_size[0].price;
      dprice = drinkPrice;
    }
    const alreadyInCart = carts.find((item) => item.p_id === p_id);
    if (alreadyInCart) {
      increaseItem(p_id);
    } else {
      let obj = {
        p_id,
        p_image,
        p_name,
        p_price: price,
        p_amount: 1,
        d_price: dprice,
      };
      // console.log(obj);
      const newCart = [...carts, obj];

      setCarts(newCart);
    }
  };
  return (
    <CartContext.Provider
      value={{
        carts,
        totalItem,
        totalPrice,
        hadnleAdd,
        pizzaSizePrice,
        increaseItem,
        dereaseItem,
        removeItem,
        drinkSizePrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
