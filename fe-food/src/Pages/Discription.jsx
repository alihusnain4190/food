import React from "react";
import { Link } from "@reach/router";
const Discription = (props) => {
  console.log(props.location.state.item);
  const {
    p_id,
    p_image,
    p_sing,
    p_name,
    p_size,
    topping,
    dip,
  } = props.location.state.item;
  return (
    <section key={p_id} className="readMore">
      <img src={p_image} alt={p_name}></img>
      <p>{p_name}</p>
      <p>{dip}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        deleniti officiis saepe est dolore obcaecati laborum modi rerum quos
        molestiae, corrupti dolor cum, repellat dignissimos quas deserunt harum
        fuga at!
      </p>
      <Link to="/">
        <button className="btn btn-more">Go Back</button>
      </Link>
    </section>
  );
};

export default Discription;
