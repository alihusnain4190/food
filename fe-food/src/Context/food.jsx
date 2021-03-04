import React from "react";
import { pizza, customise } from "../Utils/data";
export const FoodContext = React.createContext();

export default function ProductProvider({ children }) {
  return <FoodContext.Provider value={pizza}>{children}</FoodContext.Provider>;
}
