import { useState, createContext, useContext } from "react";

const User = createContext();
export const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState();
  const [details, setDetail] = useState();
  return (
    <User.Provider value={{ ticket, setTicket, details, setDetail }}>
      {children}
    </User.Provider>
  );
};

export function Checkcontxt() {
  return useContext(User);
}
