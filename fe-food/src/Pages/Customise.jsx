import React from "react";

const Customise = (props) => {
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
    <section key={p_id}>
      <img src={p_image} alt={p_name}></img>
      <p>{p_name}</p>
      <p>{dip}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
        deleniti officiis saepe est dolore obcaecati laborum modi rerum quos
        molestiae, corrupti dolor cum, repellat dignissimos quas deserunt harum
        fuga at!
      </p>
    </section>
  );
};

export default Customise;
