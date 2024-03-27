import { Web3Provider } from "./providers/web3provider";
import { Swap } from "./components/swap";
import { BridgeProvider } from "./providers/bridge-provider";

export default function App() {
  return (
    <Web3Provider>
      <BridgeProvider>
        <div className="flex items-center justify-center w-full min-h-screen p-6">
          <Swap />
        </div>
      </BridgeProvider>
    </Web3Provider>
  );
}
