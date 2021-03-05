import React from "react";

const PizzaList = ({ p_id, p_image, p_name, p_size }) => {
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
                {size} &nbsp; {price}&#163;
              </option>
            );
          })}
        </select>
      </div>
      <div className="pizzaList__name">
        <p>{p_name}</p>
        <button className="btn btn-more">More Info</button>
      </div>
      <div>
        <button>customize</button>
        <button>Add</button>
      </div>
    </section>
  );
};

export default PizzaList;
