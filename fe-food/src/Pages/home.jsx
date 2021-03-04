import React, { useContext } from "react";
import LowerNavbar from "../Component/LowerNavbar";
import Navbar from "../Component/Navbar";

import { FoodContext } from "../Context/food";
const Home = () => {
  const name = useContext(FoodContext);
  console.log(name);
  return (
    <section>
      <Navbar />
      <LowerNavbar />
    </section>
  );
};

export default Home;
