import { ChainId, SupportedTokens } from "../types";

export const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY;
export const INFURA_API_KEY = import.meta.env.VITE_INFURA_API_KEY;
export const WALLETCONNECT_PROJECT_ID = import.meta.env
  .VITE_WALLETCONNECT_PROJECT_ID;

export const SupportedTokensList: SupportedTokens = {
  [ChainId.ARBITRUM_SEPOLIA]: [
    {
      name: "Hyper USD",
      symbol: "USD.h",
      address: "0x6df8dE86458D15a3Be3A6B907e6aE6B7af352452",
      decimals: 18,
      chainId: ChainId.ARBITRUM_SEPOLIA,
    },
  ],
  [ChainId.BASE_SEPOLIA]: [
    {
      name: "Hyper USD",
      symbol: "USD.h",
      address: "0x6df8dE86458D15a3Be3A6B907e6aE6B7af352452",
      decimals: 18,
      chainId: ChainId.BASE_SEPOLIA,
    },
  ],
  [ChainId.OPTIMISM_SEPOLIA]: [
    {
      name: "Hyper USD",
      symbol: "USD.h",
      address: "0x6df8dE86458D15a3Be3A6B907e6aE6B7af352452",
      decimals: 18,
      chainId: ChainId.OPTIMISM_SEPOLIA,
    },
  ],
  [ChainId.SEPOLIA]: [
    {
      name: "Hyper USD",
      symbol: "USD.h",
      address: "0x6df8dE86458D15a3Be3A6B907e6aE6B7af352452",
      decimals: 18,
      chainId: ChainId.SEPOLIA,
    },
  ],
};
