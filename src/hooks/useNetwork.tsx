import { useEffect, useReducer } from "react";
import { Action, ChainId, NetworkStore, Token } from "../types";
import { SupportedTokensList } from "../constants";
import { useAccount, useSwitchChain } from "wagmi";

function networkStoreReducer(state: NetworkStore, action: Action) {
  switch (action.type) {
    case "SWITCH_CHAINS": {
      const { source, target } = action.payload;
      return { source: target, target: source };
    }
    case "SET_SOURCE": {
      return { ...state, source: action.payload };
    }
    case "SET_TARGET": {
      return { ...state, target: action.payload };
    }
    default: {
      throw new Error("Action is not supported");
    }
  }
}

const initialState: NetworkStore = {
  source: {
    chainId: ChainId.OPTIMISM_SEPOLIA,
    selectedToken: SupportedTokensList[ChainId.OPTIMISM_SEPOLIA][0],
  },
  target: {
    chainId: ChainId.BASE_SEPOLIA,
    selectedToken: SupportedTokensList[ChainId.BASE_SEPOLIA][0],
  },
};

export function useNetwork() {
  const { chainId: currentChainId, isConnected } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const [networkStore, networkDispatch] = useReducer(
    networkStoreReducer,
    initialState
  );

  async function switchChains(store: NetworkStore) {
    try {
      const { target } = store;
      await switchChainAsync({ chainId: target.chainId });
      networkDispatch({
        type: "SWITCH_CHAINS",
        payload: store,
      });
    } catch {
      throw new Error("Unable to switch chains");
    }
  }

  async function setSource(chainId: ChainId, token?: Token) {
    try {
      let selectedToken = token;
      if (!selectedToken) {
        selectedToken = SupportedTokensList[chainId][0];
      }
      if (isConnected) {
        await switchChainAsync({ chainId });
        networkDispatch({
          type: "SET_SOURCE",
          payload: { chainId, selectedToken },
        });
      }
    } catch {
      throw new Error("Unable to set source chain");
    }
  }

  async function setTarget(chainId: ChainId, token?: Token) {
    let selectedToken = token;
    if (!selectedToken) {
      selectedToken = SupportedTokensList[chainId][0];
    }
    networkDispatch({
      type: "SET_TARGET",
      payload: { chainId, selectedToken },
    });
  }

  function trackWalletNetwork(): void {
    if (isConnected && currentChainId !== networkStore.source.chainId) {
      const chainId = currentChainId as ChainId;
      networkDispatch({
        type: "SET_SOURCE",
        payload: {
          chainId: chainId,
          selectedToken: SupportedTokensList[chainId][0],
        },
      });
    }
  }

  useEffect(trackWalletNetwork, [currentChainId, isConnected]);

  return { networkStore, setSource, switchChains, setTarget };
}
