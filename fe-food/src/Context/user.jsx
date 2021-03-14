import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  function signup(email, password) {
    console.log(email);
    console.log(password);
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    //fire base set user
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);
  const value = {
    currentUser,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
