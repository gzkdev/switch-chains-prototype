import { NetworkStore, WidgetViewPayload } from "../types";

export function getActiveChainId(
  payload: WidgetViewPayload,
  networkStore: NetworkStore
) {
  if (payload === "SOURCE") {
    return networkStore.source.chainId;
  }
  return networkStore.target.chainId;
}
