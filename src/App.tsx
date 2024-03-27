import { Web3Provider } from "./providers/web3provider";
import { Swap } from "./components/swap";

export default function App() {
  return (
    <Web3Provider>
      <div className="flex items-center justify-center w-full min-h-screen p-6">
        <Swap />
      </div>
    </Web3Provider>
  );
}
