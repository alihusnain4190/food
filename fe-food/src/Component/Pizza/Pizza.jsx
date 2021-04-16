import React from "react";
import { pizza } from "../../Utils/data";
import PizzaList from "./PizzaList";

const Pizza = ({ pizzas, drinks }) => {
  return (
    <section className="pizzas">
      {pizzas.map((item) => {
        return (
          <PizzaList key={item.p_id} item={item} drinks={drinks}></PizzaList>
        );
      })}
    </section>
  );
};

export default Pizza;
