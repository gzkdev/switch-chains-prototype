import { createContext } from "react";
import { useAppNetwork } from "../hooks/useAppNetwork";
import { Action, NetworkStore, WidgetView, WidgetViewAction } from "../types";
import { useWidgetView } from "../hooks/useWidgetView";

type BridgeProviderStore = {
  networkStore: NetworkStore;
  widgetView: WidgetView;
  networkDispatch: React.Dispatch<Action>;
  widgetViewDispatch: React.Dispatch<WidgetViewAction>;
};

export const BridgeContext = createContext({} as BridgeProviderStore);

export function BridgeProvider({ children }: { children: React.ReactNode }) {
  const { networkStore, networkDispatch } = useAppNetwork();
  const { widgetView, widgetViewDispatch } = useWidgetView();

  return (
    <BridgeContext.Provider
      value={{ networkStore, widgetView, networkDispatch, widgetViewDispatch }}
    >
      {children}
    </BridgeContext.Provider>
  );
}
