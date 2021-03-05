import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <a href="/">Pizza</a>
        <a href="#">Drinks</a>
      </div>
      <div className="navbar__cart">
        <FaCartPlus className="cart" />
      </div>
    </nav>
  );
};

export default Navbar;
