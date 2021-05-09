import React from "react";
import { Link } from "@reach/router";
import space from "../assets/img/space.png";
const Error = () => {
  return (
    <div className="error">
      <div>
        <img src={space} alt="space"></img>
      </div>
      <div>
        <p>404</p>
        <h1>Oops!</h1>
        <p>We can’t find the page you’re looking for</p>
        <Link
          to="/"
          className="btn btn-more"
          style={{ textDecoration: "none" }}
        >
          <span className="nav__btn"> Go To Home &#62; </span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
