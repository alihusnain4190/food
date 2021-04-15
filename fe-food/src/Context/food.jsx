import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { pizza, customise } from "../Utils/data";
import setPizzaSizePrice from "../Utils/utill";
export const FoodContext = React.createContext();

export default function ProductProvider({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizza] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(
      "https://be-pizza.herokuapp.com/api/pizza"
    );
    const p = setPizzaSizePrice(data);
    setPizza(p);
    setLoading(false);
  }, []);
  return (
    <FoodContext.Provider value={{ isLoading, pizzas }}>
      {children}
    </FoodContext.Provider>
  );
}
