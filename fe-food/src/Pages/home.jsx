import React, { useContext } from "react";
import Pizza from "../Component/Pizza/Pizza";
import { FoodContext } from "../Context/food";

const Home = () => {
  const { isLoading, pizzas } = useContext(FoodContext);

  return (
    <section>
      {isLoading === true ? "...loading" : <Pizza pizzas={pizzas} />}
    </section>
  );
};

export default Home;
