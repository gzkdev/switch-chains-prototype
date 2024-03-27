import { ArrowLeft } from "@phosphor-icons/react";
import { useBridgeProvider } from "../../hooks/useBridgeProvider";
import { SupportedNetworks } from "../../constants";
import { getSupportedNetworkName } from "../../utils/getSupportedNetworkName";
import { getNetworkImage } from "../../utils/getNetworkImage";

export function Networks() {
  const { updateWidgetView } = useBridgeProvider();

  return (
    <div className="widget-container min-h-96">
      <div className="widget-header">
        <span className="text-2xl font-medium tracking-tight">
          Select Token
        </span>
        <div className="flex items-center gap-2 text-2xl">
          <button
            className="widget-nav-btn"
            onClick={() => updateWidgetView("TRANSFER")}
          >
            <ArrowLeft weight="bold" size={18} />
          </button>
        </div>
      </div>
      <div className="px-2">
        <span className="text-sm">Supported Networks</span>
        <div className="grid grid-cols-5 gap-4 py-1">
          {SupportedNetworks.map((chainId) => (
            <button
              key={chainId}
              title={getSupportedNetworkName(chainId)}
              className="inline-flex items-center justify-center p-2 sm:p-4 aspect-square bg-slate-300 rounded-xl"
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

        <div className="flex flex-col py-4">
          <div className="flex items-center gap-2 p-2 transition border hover:border-black rounded-xl">
            <div className="w-10 rounded-full aspect-square bg-slate-300"></div>
            <div className="flex flex-col flex-grow leading-none">
              <div>USD.h</div>
              <div className="text-sm">Hyper USD</div>
            </div>
            <div>100 USD.h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
