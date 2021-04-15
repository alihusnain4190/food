import React from "react";
import { pizza } from "../../Utils/data";
import PizzaList from "./PizzaList";

const Pizza = ({ pizzas }) => {
  console.log(pizzas);
  return (
    <section className="pizzas">
      {pizzas.map((item) => {
        return <PizzaList key={item.p_id} item={item}></PizzaList>;
      })}
    </section>
  );
};

export default Pizza;
