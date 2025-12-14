import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api.get("/wallet").then(res => setBalance(res.data.balance));
  }, []);

  return (
    <WalletContext.Provider value={{ balance }}>
      {children}
    </WalletContext.Provider>
  );
}
