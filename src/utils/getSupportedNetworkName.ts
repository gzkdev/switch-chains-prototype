import { ChainId } from "../types";

export function getSupportedNetworkName(chainId: ChainId) {
  switch (chainId) {
    case ChainId.ARBITRUM_SEPOLIA: {
      return "Arbitrum Sepolia";
    }
    case ChainId.BASE_SEPOLIA: {
      return "Base Sepolia";
    }
    case ChainId.BINANCE_SMART_CHAIN: {
      return "Binance Smart Chain Testnet";
    }
    case ChainId.OPTIMISM_SEPOLIA: {
      return "Optimism Sepolia";
    }
    case ChainId.SEPOLIA: {
      return "Sepolia";
    }
    default: {
      return "Sepolia";
    }
  }
}
