export enum ChainId {
  SEPOLIA = 11155111,
  BASE_SEPOLIA = 84532,
  OPTIMISM_SEPOLIA = 11155420,
  ARBITRUM_SEPOLIA = 421614,
  BINANCE_SMART_CHAIN = 97,
}

export type SupportedTokens = {
  [key in ChainId]: {
    name: string;
    symbol: string;
    address: `0x${string}`;
    decimals: number;
    chainId: key;
  }[];
};

export type Token = SupportedTokens[ChainId][number];

export type Network = {
  chainId: ChainId;
  selectedToken: Token;
};

export type NetworkStore = {
  source: Network;
  target: Network;
};

export type Action =
  | { type: "SWITCH_CHAINS" }
  | { type: "SET_SOURCE"; payload: Network }
  | { type: "SET_TARGET"; payload: Network };

export type WidgetViewPayload = "SOURCE" | "TARGET";

export type WidgetViewAction =
  | { type: "TRANSFER" }
  | { type: "SETTINGS" }
  | { type: "HISTORY" }
  | { type: "TRANSACTION" }
  | { type: "SELECT"; payload: WidgetViewPayload };

export type WidgetViewType = WidgetViewAction["type"];

export type WidgetView = {
  view: WidgetViewType;
  select: WidgetViewPayload;
};
