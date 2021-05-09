import React, { useContext } from "react";
import Pizza from "../Component/Pizza/Pizza";
import { FoodContext } from "../Context/food";
import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const { isLoading, pizzas, drinks } = useContext(FoodContext);
  let [color, setColor] = useState("#ffffff");
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <section>
      {isLoading === true ? (
        // "...loading"
        <ClipLoader color={color}  css={override} size={150} />
      ) : (
        <Pizza pizzas={pizzas} drinks={drinks} />
      )}
    </section>
  );
};

export default Home;
