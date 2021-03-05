import React, { useState } from "react";
import { pizza, customise } from "../Utils/data";
export const FoodContext = React.createContext();

export default function ProductProvider({ children }) {
  
  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizza] = useState(pizza);
  
  return (
    <FoodContext.Provider value={{ isLoading, pizzas }}>
      {children}
    </FoodContext.Provider>
  );
}
