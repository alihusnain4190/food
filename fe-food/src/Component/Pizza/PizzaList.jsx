import React from "react";

const PizzaList = ({ p_id, p_image, p_name }) => {
  return (
    <section>
      <img url={p_image} alt={p_name}></img>
    </section>
  );
};

export default PizzaList;
