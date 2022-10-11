import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = JSON.parse(sessionStorage.getItem("credentials")) || null;
  
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;