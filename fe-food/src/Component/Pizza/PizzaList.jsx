import React, { useContext } from "react";
import { Link } from "@reach/router";
import { CartContext } from "../../Context/cart";
const PizzaList = (props) => {
  const { p_id, p_image, p_name, p_size } = props.item;
  const { hadnleAdd, pizzaSizePrice } = useContext(CartContext);
  const handleChange = (e) => {
    pizzaSizePrice(e.target.value);
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
      </div>
      <div className="pizzaList__name">
        <p>{p_name}</p>
        <Link to={`discription/${p_id}`} state={{ item: props.item }}>
          <button className="btn btn-more">More Info</button>
        </Link>
      </div>
      <div className="pizzaList__add">
        <button className="btn btn-customize ml">CUSTOMISE</button>

        {/* <Link to="/cart"> */}
        <button
          className="btn btn-more"
          onClick={() => {
            hadnleAdd(props.item);
          }}
        >
          SELECT
        </button>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default PizzaList;
