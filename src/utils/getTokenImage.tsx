import { Token } from "../types";
import EtherLogo from "../assets/images/tokens/eth.png";
import UsdtLogo from "../assets/images/tokens/usdt.png";
import UsdcLogo from "../assets/images/tokens/usdc.png";
import UsdhLogo from "../assets/images/tokens/usd-h.png";

export function getTokenImage(token: Token) {
  switch (token.symbol) {
    case "ETH": {
      return <img src={EtherLogo} className="w-full h-full" alt="Token logo" />;
    }
    case "USDC": {
      return <img src={UsdcLogo} className="w-full h-full" alt="Token logo" />;
    }
    case "USDT": {
      return <img src={UsdtLogo} className="w-full h-full" alt="Token logo" />;
    }
    case "USD.h": {
      return <img src={UsdhLogo} className="w-full h-full" alt="Token logo" />;
    }
    default: {
      return <img src={UsdhLogo} className="w-full h-full" alt="Token logo" />;
    }
  }
}
