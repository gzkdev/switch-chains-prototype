import { X } from "@phosphor-icons/react";
import { SupportedNetworks } from "../../constants";
import { getSupportedNetworkName } from "../../utils/getSupportedNetworkName";
import { getNetworkImage } from "../../utils/getNetworkImage";
import { getTokenImage } from "../../utils/getTokenImage";
import { useNetworkSelector } from "../../hooks/useNetworkSelector";

export function Networks() {
  const {
    activeChainId,
    handleNetworkChange,
    selectedToken,
    tokens,
    widgetViewDispatch,
  } = useNetworkSelector();

  return (
    <div className="widget-container min-h-96">
      <div className="widget-header">
        <span className="text-2xl font-medium tracking-tight">
          Select Token
        </span>
        <div className="flex items-center gap-2 text-2xl">
          <button
            className="widget-nav-btn"
            onClick={() => widgetViewDispatch({ type: "TRANSFER" })}
          >
            <X weight="bold" size={20} />
          </button>
        </div>
      </div>
      <div className="px-2">
        <span className="text-sm">Supported Networks</span>
        <div className="grid grid-cols-5 gap-4 py-1">
          {SupportedNetworks.map((chainId) => (
            <button
              key={chainId}
              onClick={handleNetworkChange(chainId)}
              title={getSupportedNetworkName(chainId)}
              className="inline-flex items-center justify-center p-2 sm:p-4 aspect-square bg-slate-300 rounded-xl"
              style={{
                border: activeChainId === chainId ? "1px solid black" : "",
              }}
            >
              {getNetworkImage(chainId)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="p-2">
          <span className="text-sm">Supported Tokens</span>
          <div className="h-10 mt-1 border border-black sm:h-12 rounded-xl">
            <input
              type="search"
              className="w-full h-full px-3"
              placeholder="Search token by name or address"
            />
          </div>
        </div>

        <div className="flex flex-col px-2 py-4">
          {tokens.map((token) => (
            <div
              key={token.symbol}
              className="flex items-center gap-2 p-2 transition border hover:border-black rounded-xl"
              style={{
                border:
                  token.address === selectedToken ? "1px solid black" : "",
              }}
            >
              <div className="w-10 rounded-full aspect-square bg-slate-300">
                {getTokenImage(token)}
              </div>
              <div className="flex flex-col flex-grow leading-none">
                <div>{token.symbol}</div>
                <div className="text-sm">{token.name}</div>
              </div>
              <div>100 {token.symbol}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
