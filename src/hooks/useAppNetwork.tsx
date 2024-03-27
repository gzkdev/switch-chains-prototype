import { useReducer } from "react";
import { ChainId, Token } from "../types";
import { SupportedTokensList } from "../constants";

type Network = {
  chainId: ChainId;
  selectedToken: Token;
};

type NetworkStore = {
  source: Network;
  target: Network;
};

type Action =
  | { type: "SWITCH_CHAINS" }
  | { type: "SET_SOURCE"; payload: Network }
  | { type: "SET_TARGET"; payload: Network };

const initialState: NetworkStore = {
  source: {
    chainId: ChainId.SEPOLIA,
    selectedToken: SupportedTokensList[ChainId.SEPOLIA][0],
  },
  target: {
    chainId: ChainId.BASE_SEPOLIA,
    selectedToken: SupportedTokensList[ChainId.BASE_SEPOLIA][0],
  },
};

function networkStoreReducer(state: NetworkStore, action: Action) {
  switch (action.type) {
    case "SWITCH_CHAINS": {
      const { source, target } = state;
      return { source: target, target: source };
    }
    case "SET_SOURCE": {
      const { chainId, selectedToken } = action.payload;
      return {
        ...state,
        source: { chainId, selectedToken },
      };
    }
    case "SET_TARGET": {
      const { chainId, selectedToken } = action.payload;
      return {
        ...state,
        target: { chainId, selectedToken },
      };
    }
    default: {
      throw new Error("Action is not supported");
    }
  }
}

export function useAppNetwork() {
  const [network, networkDispatch] = useReducer(
    networkStoreReducer,
    initialState
  );

  return { network, networkDispatch };
}
