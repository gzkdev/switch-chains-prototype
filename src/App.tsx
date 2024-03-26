import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "./providers/web3provider";

export default function App() {
  return (
    <Web3Provider>
      <ConnectKitButton />
    </Web3Provider>
  );
}
