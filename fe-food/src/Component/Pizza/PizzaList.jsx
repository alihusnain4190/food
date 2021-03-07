import React from "react";
import { Link } from "@reach/router";
const PizzaList = ({ p_id, p_image, p_name, p_size }) => {
  const handleMore = () => {};
  return (
    <section className="pizzaList">
      <div>
        <img className="img" src={p_image} alt={p_name}></img>
      </div>
      <div>
        <select className="pizzaList__size">
          {p_size.map(({ size, price }) => {
            return (
              <option value={size} className="opt">
                {size} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {price}&#163;
              </option>
            );
          })}
        </select>
      </div>
      <div className="pizzaList__name">
        <p>{p_name}</p>
        <Link to={`customise/${p_id}`}>
          <button className="btn btn-more" onClick={handleMore}>
            More Info
          </button>
        </Link>
      </div>
      <div className="pizzaList__add">
        <button className="btn btn-customize ml">CUSTOMISE</button>
        <button className="btn btn-more">SELECT</button>
      </div>
    </section>
  );
};

export default PizzaList;
