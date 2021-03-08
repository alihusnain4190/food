import React, { useContext } from "react";
import { Link } from "@reach/router";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../Context/cart";
const Navbar = () => {
  const { totalItem } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <a href="/">Pizza</a>
        <a href="#">Drinks</a>
      </div>
      <div className="navbar__cart">
        <Link to="/cart">
          <FaCartPlus className="cart" />
        </Link>

        <p>{totalItem}</p>
      </div>
    </nav>
  );
};

export default Navbar;
