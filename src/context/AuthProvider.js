//AUTH controller
//this will have the functions that control the sign in. Or maybe make a new file instead of deleting all of this for now. Or fork it on github.
//use await and async to wait for username and password and salt and hash
//becrypt package to salt and hash
//look up Stuart's and Ben's repos

import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
