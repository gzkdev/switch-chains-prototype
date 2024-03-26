export enum ChainId {
  SEPOLIA = 11155111,
  BASE_SEPOLIA = 84532,
  OPTIMISM_SEPOLIA = 11155420,
  ARBITRUM_SEPOLIA = 421614,
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
