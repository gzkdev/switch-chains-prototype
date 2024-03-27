import { Web3Provider } from "./providers/web3provider";
import { BridgeProvider } from "./providers/bridge-provider";
import { Widget } from "./components/widget";

export default function App() {
  return (
    <Web3Provider>
      <BridgeProvider>
        <div className="flex items-center justify-center w-full min-h-screen p-6">
          <Widget />
        </div>
      </BridgeProvider>
    </Web3Provider>
  );
}
