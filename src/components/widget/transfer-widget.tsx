import {
  ArrowsDownUp,
  CaretDown,
  ClockCounterClockwise,
  GearSix,
} from "@phosphor-icons/react";
import { ConnectKitButton } from "connectkit";
import { useBridgeProvider } from "../../hooks/useBridgeProvider";
import { getTokenImage } from "../../utils/getTokenImage";
import { getNetworkImage } from "../../utils/getNetworkImage";

export function TransferWidget() {
  const { switchChains, networkStore, widgetViewDispatch } =
    useBridgeProvider();
  const { source, target } = networkStore;

  return (
    <div className="widget-container">
      <div className="widget-header">
        <span className="text-2xl font-medium tracking-tight">Transfer</span>
        <div className="flex items-center gap-3 text-2xl">
          <button
            className="widget-nav-btn"
            onClick={() => console.log("SETTINGS")}
          >
            <GearSix weight="bold" size={20} />
          </button>
          <button
            className="widget-nav-btn"
            onClick={() => console.log("HISTORY")}
          >
            <ClockCounterClockwise weight="bold" size={20} />
          </button>
        </div>
      </div>
      <div className="relative grid flex-grow w-full grid-rows-2 gap-1 place-items-center">
        <div className="widget-input-container">
          <div className="flex items-center justify-between text-sm">
            <span>Pay</span>
            <button
              onClick={() =>
                widgetViewDispatch({ type: "SELECT", payload: "SOURCE" })
              }
              className="inline-flex items-center gap-2 p-1 text-base transition rounded-full bg-slate-200 hover:bg-slate-300"
            >
              <span className="relative w-7">
                <span className="flex w-full h-full rounded-full bg-slate-300 aspect-square">
                  {getTokenImage(source.selectedToken)}
                </span>
                <span className="absolute w-4 rounded-full -right-0.5 -bottom-0.5 aspect-square bg-slate-200 [box-shadow:0_0_0_1px_#e2e8f0]">
                  {getNetworkImage(source.chainId)}
                </span>
              </span>
              {source.selectedToken.symbol}
              <CaretDown weight="bold" className="mr-2 -ml-1" />
            </button>
          </div>
          <div className="flex flex-grow">
            <div className="flex-grow">
              <input
                type="number"
                inputMode="decimal"
                className="w-full h-full text-5xl font-medium"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col items-end justify-end gap-1 text-xs min-w-max">
              <button
                onClick={() => console.log("MAX")}
                className="font-semibold py-0.5 px-2 rounded-full bg-slate-200"
              >
                MAX
              </button>
              <span className="text-slate-500/70">
                500 {source.selectedToken.symbol} Available
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={() => switchChains(networkStore)}
          className="absolute w-8 sm:w-10 bg-slate-50 [box-shadow:0_0_0_4px_#e2e8f0] flex items-center justify-center rounded-full aspect-square"
        >
          <ArrowsDownUp weight="bold" />
        </button>
        <div className="widget-input-container">
          <div className="flex items-center justify-between text-sm">
            <span>Receive</span>
            <button
              onClick={() =>
                widgetViewDispatch({ type: "SELECT", payload: "TARGET" })
              }
              className="inline-flex items-center gap-2 p-1 text-base transition rounded-full bg-slate-200 hover:bg-slate-300"
            >
              <span className="relative w-7">
                <span className="flex w-full h-full rounded-full bg-slate-300 aspect-square">
                  {getTokenImage(target.selectedToken)}
                </span>
                <span className="absolute w-4 rounded-full -right-0.5 -bottom-0.5 aspect-square bg-slate-200 [box-shadow:0_0_0_1px_#e2e8f0]">
                  {getNetworkImage(target.chainId)}
                </span>
              </span>
              {target.selectedToken.symbol}
              <CaretDown weight="bold" className="mr-2 -ml-1" />
            </button>
          </div>
          <div className="flex flex-grow">
            <div className="flex-grow">
              <input
                type="number"
                inputMode="decimal"
                className="w-full h-full text-5xl font-medium"
                placeholder="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-input-container">
        <div className="flex items-center justify-between text-sm">
          <span>Recipient</span>
        </div>
        <div className="flex flex-grow">
          <div className="flex-grow">
            <input
              type="text"
              inputMode="text"
              className="w-full h-full text-base font-medium"
              placeholder="Wallet Address or ENS name"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      <ConnectKitButton.Custom>
        {({ show, isConnected }) => (
          <button
            onClick={show}
            className="p-3 bg-slate-800 text-slate-300 rounded-2xl"
          >
            {isConnected ? "Bridge" : "Connect wallet"}
          </button>
        )}
      </ConnectKitButton.Custom>
    </div>
  );
}
