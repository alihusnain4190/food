import React, { useContext } from "react";
import { Link } from "@reach/router";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../Context/cart";
const Navbar = () => {
  const { totalItem } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <Link to="/">
          <span className="navbar__size">Pizza</span>
        </Link>
        <Link to="#">
          <span className="navbar__size">Drinks</span>
        </Link>
      </div>
      <div className="navbar__cart">
        <Link to="/cart">
          <FaCartPlus className="cart" size={30} />
        </Link>
        <span className="badge badge-warning lblCartCount" id="lblCartCount">
          {totalItem}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
