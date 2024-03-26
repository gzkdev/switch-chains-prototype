/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly WALLETCONNECT_PROJECT_ID: string;
  readonly ALCHEMY_API_KEY: string;
  readonly INFURA_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
