





// UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usertype, setUsertype] = useState("");
  const [email, setemail] = useState("");
  const [token, setAccessToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUsertype(userData.usertype);
    setemail(userData.email);
    setAccessToken(userData.token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsertype("");
    setMobileNumber("");
    setAccessToken("");
    setIsLoggedIn(false);
  };

  const value = {
    usertype,
    email,
   token,
    isLoggedIn,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};