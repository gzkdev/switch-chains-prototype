import { WagmiProvider, createConfig } from "wagmi";
import { sepolia, arbitrumSepolia, baseSepolia, optimismSepolia } from "wagmi/chains";
import { injected, safe, walletConnect } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { WALLETCONNECT_PROJECT_ID } from "../constants";

const config = createConfig(
  getDefaultConfig({
    chains: [sepolia, arbitrumSepolia, baseSepolia, optimismSepolia],
    connectors: [injected(), walletConnect({ projectId: WALLETCONNECT_PROJECT_ID }), safe()],
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
    appName: "Switch Chains Prototype",
    appDescription: "A simple app that demonstrates how to implement a UI that allows users to switch chains",
    appUrl: "https://family.co",
    appIcon: "https://family.co/logo.png",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
