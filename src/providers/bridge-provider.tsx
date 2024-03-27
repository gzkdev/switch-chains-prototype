import { createContext } from "react";
import { useAppNetwork } from "../hooks/useAppNetwork";
import { Action, NetworkStore } from "../types";

type BridgeProviderStore = {
  networkStore: NetworkStore;
  networkDispatch: React.Dispatch<Action>;
};

export const BridgeContext = createContext({} as BridgeProviderStore);

export function BridgeProvider({ children }: { children: React.ReactNode }) {
  const { networkStore, networkDispatch } = useAppNetwork();

  return (
    <BridgeContext.Provider value={{ networkStore, networkDispatch }}>
      {children}
    </BridgeContext.Provider>
  );
}
