import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    //fire base set user
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      //set loading to false if our user successfuly signup 
      setLoading(false);
    });
    return unsubcribe;
  }, []);
  const value = {
    currentUser,
    signup,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
