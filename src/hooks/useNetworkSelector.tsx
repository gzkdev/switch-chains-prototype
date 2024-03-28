import { useMemo } from "react";
import { ChainId } from "../types";
import { useBridgeProvider } from "./useBridgeProvider";
import { getActiveChainId } from "../utils/getActiveChainId";
import {
  getSelectedToken,
  getSupportedTokensList,
} from "../utils/getSelectedToken";

export function useNetworkSelector() {
  const { widgetViewDispatch, widgetView, networkStore, setSource, setTarget } =
    useBridgeProvider();
  const { select } = widgetView;

  const activeChainId = useMemo(
    () => getActiveChainId(select, networkStore),
    [widgetView, networkStore]
  );
  const selectedToken = getSelectedToken(select, networkStore);
  const tokens = getSupportedTokensList(select, networkStore);

  function handleNetworkChange(chainId: ChainId) {
    return async () => {
      if (select === "SOURCE") {
        await setSource(chainId);
        widgetViewDispatch({ type: "TRANSFER" });
      } else {
        setTarget(chainId);
        widgetViewDispatch({ type: "TRANSFER" });
      }
    };
  }

  return {
    activeChainId,
    selectedToken,
    tokens,
    handleNetworkChange,
    widgetViewDispatch,
  };
}
