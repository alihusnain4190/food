import React from "react";
import PizzaList from "./PizzaList";

const Pizza = ({ pizzas }) => {
  return (
    <section>
      {pizzas.map((item) => {
        return <PizzaList key={item.p_id} {...item}></PizzaList>;
      })}
    </section>
  );
};

export default Pizza;
