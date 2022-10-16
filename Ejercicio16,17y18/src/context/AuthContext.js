// import { createContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// function getInitialState() {
//   const user = sessionStorage.getItem("credentials");
//   return user ? JSON.parse(user) : null;
// }

// export const AuthProvider = ({ children }) => {

//   const [user, setUser] = useState(getInitialState);
//   useEffect(() => {
//     sessionStorage.setItem("credentials", JSON.stringify(user) )
//   }, [user]);
  

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthContext;
