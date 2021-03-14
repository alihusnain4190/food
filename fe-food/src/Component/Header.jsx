import React from "react";
import { Link } from "@reach/router";
const Header = () => {
  return (
    <section>
      <h1>My name is </h1>
      <Link to="/signup">Sign Up</Link>
    </section>
  );
};

export default Header;
