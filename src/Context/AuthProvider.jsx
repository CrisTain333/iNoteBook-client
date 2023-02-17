import React, { createContext, useState } from "react";
import app from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const createUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const name = "sukan";

  return (
    <AuthContext.Provider value={{ createUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
