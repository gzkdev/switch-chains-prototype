import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { truncateAddress } from "../utils/truncateAddress";
import { getNetworkImage } from "../utils/getNetworkImage";
import { ChainId } from "../types";
import { CaretDown } from "@phosphor-icons/react";

export function Navbar() {
  const { isConnected, address, chainId } = useAccount();
  return (
    <nav className="sticky top-0">
      <div className="flex items-center justify-between max-w-screen-lg p-6 mx-auto">
        <a href="#" className="text-xl font-semibold">
          Gateway
        </a>
        {isConnected ? (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button
                onClick={show}
                className="flex items-center gap-1 px-3 py-3 text-sm font-medium sm:text-base rounded-xl bg-slate-300"
              >
                <span className="flex items-center justify-center w-5 p-0.5 sm:p-1 rounded-full sm:w-7 aspect-square bg-slate-200">
                  {getNetworkImage(chainId as ChainId)}
                </span>
                {truncateAddress(address)}
                <CaretDown weight="bold" className="ml-1" />
              </button>
            )}
          </ConnectKitButton.Custom>
        ) : (
          <ConnectKitButton.Custom>
            {({ show }) => (
              <button
                onClick={show}
                className="px-4 py-2 font-medium bg-slate-400 rounded-xl"
              >
                Connect wallet
              </button>
            )}
          </ConnectKitButton.Custom>
        )}
      </div>
    </nav>
  );
}
