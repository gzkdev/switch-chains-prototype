import { Web3Provider } from "./providers/web3provider";
import { BridgeProvider } from "./providers/bridge-provider";
import { Widget } from "./components/widget";
import { Navbar } from "./components/navbar";

export default function App() {
  return (
    <Web3Provider>
      <BridgeProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-col items-center justify-center px-6 py-36">
            <Widget />
          </div>
        </div>
      </BridgeProvider>
    </Web3Provider>
  );
}
