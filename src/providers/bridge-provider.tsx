import { createContext } from "react";
import { useNetwork } from "../hooks/useNetwork";
import {
  ChainId,
  NetworkStore,
  Token,
  WidgetView,
  WidgetViewAction,
} from "../types";
import { useWidgetView } from "../hooks/useWidgetView";

type BridgeProviderStore = {
  networkStore: NetworkStore;
  widgetView: WidgetView;
  widgetViewDispatch: React.Dispatch<WidgetViewAction>;
  switchChains(store: NetworkStore): Promise<void>;
  setSource(chainId: ChainId, token?: Token): Promise<void>;
  setTarget(chainId: ChainId, token?: Token): void;
};

export const BridgeContext = createContext({} as BridgeProviderStore);

export function BridgeProvider({ children }: { children: React.ReactNode }) {
  const { networkStore, setSource, switchChains, setTarget } = useNetwork();
  const { widgetView, widgetViewDispatch } = useWidgetView();

  return (
    <BridgeContext.Provider
      value={{
        networkStore,
        widgetView,
        widgetViewDispatch,
        setSource,
        switchChains,
        setTarget,
      }}
    >
      {children}
    </BridgeContext.Provider>
  );
}
