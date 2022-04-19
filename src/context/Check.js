import { useState, createContext } from "react";

const User = createContext();
const UserProvider = ({ children }) => {
  const [Logedin, setLog] = useState(false);
  return <User.Provider value={{ Logedin, setLog }}>{children}</User.Provider>;
};
export { User, UserProvider };
