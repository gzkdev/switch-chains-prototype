import { createContext, useContext } from "react";
import { useAppNetwork } from "../hooks/useAppNetwork";

const BridgeContext = createContext({});

export function BridgeProvider({ children }: { children: React.ReactNode }) {
  const { network, networkDispatch } = useAppNetwork();

  return (
    <BridgeContext.Provider value={{ network, networkDispatch }}>
      {children}
    </BridgeContext.Provider>
  );
}

export function useBridgeProvider() {
  const ctx = useContext(BridgeContext);
  if (!ctx) {
    throw new Error("Can't access provider outside its tree");
  }
  return ctx;
}
