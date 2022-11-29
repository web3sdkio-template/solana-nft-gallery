import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Web3sdkioProvider } from "@web3sdkio/react/solana";
import { Network } from "@web3sdkio/sdk/solana";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
const network: Network = "devnet";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider network={network}>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </Web3sdkioProvider>
  );
}

export default MyApp;
