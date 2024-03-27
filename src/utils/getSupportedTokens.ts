import { ChainId } from "../types";
import { SupportedTokensList } from "../constants";

export function getSupportedTokens(chainId: ChainId) {
  return SupportedTokensList[chainId] ?? [];
}
