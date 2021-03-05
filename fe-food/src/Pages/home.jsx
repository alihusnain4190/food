import React, { useContext } from "react";
import LowerNavbar from "../Component/LowerNavbar";
import Navbar from "../Component/Navbar";
import Pizza from "../Component/Pizza/Pizza";
import { FoodContext } from "../Context/food";

const Home = () => {
  const { isLoading, pizzas } = useContext(FoodContext);

  return (
    <section>
      <Navbar />
      <LowerNavbar />
      {isLoading === false ? "...loading" : <Pizza pizzas={pizzas} />}
    </section>
  );
};

export default Home;
