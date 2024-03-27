import { ChainId } from "../types";
import { SupportedTokensList } from "../constants";

export const getSupportedNetworks = (): ChainId[] => {
  return Object.keys(SupportedTokensList).map((key) => Number(key));
};
