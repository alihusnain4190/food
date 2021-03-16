import React, { useContext, useState } from "react";
import { Link, navigate } from "@reach/router";
import { AuthContext } from "../Context/user";

const Header = () => {
  const { bool, currentUser, logout } = useContext(AuthContext);
  const [error, setError] = useState("");
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
      <section>
        <h1>My name is </h1>
        <p>
          Email:
          {JSON.stringify(currentUser.email)}
        </p>
        <button onClick={handleLogout}>Logout</button>
      </section>
    );
  }
    else{
      return (
        <section>
          <h1>My name is </h1>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </section>
      );
    }
  }


export default Header;
