import React, { useContext } from "react";
import { AuthContext } from "../Context/user";
import { Redirect } from "@reach/router";

export default function PrivateRoute({ as: Component, ...props }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? (
    <Component {...props} />
  ) : (
    <Redirect from="/" to="/login" noThrow />
  );
}
