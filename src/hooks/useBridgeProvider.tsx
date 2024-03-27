import { useContext } from "react";
import { BridgeContext } from "../providers/bridge-provider";

export function useBridgeProvider() {
  const ctx = useContext(BridgeContext);
  if (!ctx) {
    throw new Error("Can't access provider outside its tree");
  }
  return ctx;
}
