import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { pizza, customise } from "../Utils/data";
import { setPizzaSizePrice, setDrinkSizePrice } from "../Utils/utill";
export const FoodContext = React.createContext();

export default function ProductProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizza] = useState([]);
  const [drinks, setDrinks] = useState();
  useEffect(async () => {
    const { data } = await axios.get(
      // "https://be-pizza.herokuapp.com/api/pizza"
      "http://localhost:9090/api/pizza/"
    );
    const drink = await axios.get("https://be-pizza.herokuapp.com/api/drink");
    const d = setDrinkSizePrice(drink.data);
    const p = setPizzaSizePrice(data);
    setPizza(p);
    setDrinks(drink.data);
    setLoading(false);
  }, []);
  return (
    <FoodContext.Provider value={{ isLoading, pizzas, drinks }}>
      {children}
    </FoodContext.Provider>
  );
}
