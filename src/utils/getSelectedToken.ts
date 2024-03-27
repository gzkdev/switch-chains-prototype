import { SupportedTokensList } from "../constants";
import { WidgetViewPayload, NetworkStore } from "../types";

export function getSelectedToken(
  payload: WidgetViewPayload,
  networkStore: NetworkStore
) {
  if (payload === "SOURCE") {
    return networkStore.source.selectedToken.address;
  }
  return networkStore.target.selectedToken.address;
}

export function getSupportedTokensList(
  payload: WidgetViewPayload,
  networkStore: NetworkStore,
  list = SupportedTokensList
) {
  if (payload === "SOURCE") {
    return list[networkStore.source.chainId];
  }
  return list[networkStore.target.chainId];
}
