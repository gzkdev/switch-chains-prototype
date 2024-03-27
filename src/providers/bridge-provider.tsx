import { createContext } from "react";
import { useAppNetwork } from "../hooks/useAppNetwork";
import { Action, NetworkStore, WidgetView } from "../types";
import { useWidgetView } from "../hooks/useWidgetView";

type BridgeProviderStore = {
  networkStore: NetworkStore;
  widgetView: WidgetView;
  networkDispatch: React.Dispatch<Action>;
  updateWidgetView: (view: WidgetView) => void;
};

export const BridgeContext = createContext({} as BridgeProviderStore);

export function BridgeProvider({ children }: { children: React.ReactNode }) {
  const { networkStore, networkDispatch } = useAppNetwork();
  const { widgetView, updateWidgetView } = useWidgetView();

  return (
    <BridgeContext.Provider
      value={{ networkStore, widgetView, networkDispatch, updateWidgetView }}
    >
      {children}
    </BridgeContext.Provider>
  );
}
