import React, { useContext, useState } from "react";
import { Link, navigate } from "@reach/router";
import { AuthContext } from "../Context/user";
const Header = () => {
  const { bool, currentUser, logout, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  // console.log(user);
  // console.log(currentUser.email);
  console.log(localStorage.getItem("user"));
  async function handleLogout(e) {
    e.preventDefault();
    try {
      setError("");
      await logout();
      navigate("/login");
    } catch {
      setError("failed to logout");
    }
  }
  if (currentUser) {
    return (
      <header className="header">
        <h4 className="header__user">{user.toUpperCase()}</h4>
        <button className="btn btn-more" onClick={handleLogout}>
          Logout
        </button>
      </header>
    );
  } else {
    return (
      <section>
        <h1>My name is </h1>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </section>
    );
  }
};

export default Header;
