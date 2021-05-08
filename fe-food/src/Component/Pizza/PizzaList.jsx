import React, { useContext } from "react";
import { Link } from "@reach/router";
import { CartContext } from "../../Context/cart";
const PizzaList = (props) => {
  const { p_id, p_image, p_name, p_size } = props.item;

  const { hadnleAdd, pizzaSizePrice, drinkSizePrice } = useContext(CartContext);
  const handleChange = (e) => {
    pizzaSizePrice(e.target.value);
  };
  const handleDrinkChange = (e) => {
    drinkSizePrice(e.target.value);
  };
  return (
    <section className="pizzaList">
      <div>
        <img className="img" src={p_image} alt={p_name}></img>
      </div>
      <div>
        <select className="pizzaList__size" onChange={handleChange}>
          {p_size.map(({ size, price }) => {
            return (
              <option value={price} className="opt">
                {size} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {price}&#163;
              </option>
            );
          })}
        </select>
        {/* <select className="pizzaList__size" onChange={handleDrinkChange}>
          {props.drinks.map(({ d_id, d_name, d_pirce }) => {
            return (
              <option value={d_pirce} className="opt">
                {d_name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {d_pirce}&#163;
              </option>
            );
          })}
        </select> */}
      </div>
      <div className="pizzaList__name">
        <p>{p_name}</p>
        <Link to={`discription/${p_id}`} state={{ item: props.item }}>
          <button className="btn btn-more">More Info</button>
        </Link>
      </div>
      <div className="pizzaList__add">
        <button className="btn btn-customize ml">CUSTOMISE</button>

        <button
          className="btn btn-more"
          onClick={() => {
            hadnleAdd(props.item);
          }}
        >Add to basket
        </button>
      </div>
    </section>
  );
};

export default PizzaList;
