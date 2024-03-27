import { ChainId } from "../types";
import ArbitrumLogo from "../assets/images/networks/arbitrum.png";
import BaseLogo from "../assets/images/networks/base.png";
import EthereumLogo from "../assets/images/networks/ethereum.png";
import OptimismLogo from "../assets/images/networks/optimism.png";

export function getNetworkImage(chainId: ChainId) {
  switch (chainId) {
    case ChainId.ARBITRUM_SEPOLIA: {
      return (
        <img src={ArbitrumLogo} className="w-full h-full" alt="Arbitrum logo" />
      );
    }
    case ChainId.BASE_SEPOLIA: {
      return <img src={BaseLogo} className="w-full h-full" alt="Base logo" />;
    }
    case ChainId.OPTIMISM_SEPOLIA: {
      return (
        <img src={OptimismLogo} className="w-full h-full" alt="Optimism logo" />
      );
    }
    case ChainId.SEPOLIA: {
      return (
        <img src={EthereumLogo} className="w-full h-full" alt="Ethereum logo" />
      );
    }
    default: {
      return (
        <img src={EthereumLogo} className="w-full h-full" alt="Ethereum logo" />
      );
    }
  }
}
