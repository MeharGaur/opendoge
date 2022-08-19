import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import defaultSEOConfig from "../../next-seo.config";
import Layout from "lib/components/layout";
import "lib/styles/globals.scss";
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
// import { Chain } from "wagmi";

import {
    darkTheme,
    getDefaultWallets,
    RainbowKitProvider,
    Theme,
    Chain,
    AvatarComponent
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import merge from 'lodash.merge';

const dogechain: Chain = {
    id: 2_000,
    name: 'DogeChain',
    network: 'dogechain',
    iconUrl: '/img/opendogelogo.png',
    iconBackground: 'white',
    nativeCurrency: {
      decimals: 18,
      name: 'Wrapped Doge',
      symbol: 'wDOGE',
    },
    rpcUrls: {
      default: 'https://rpc01-sg.dogechain.dog',
    },
    blockExplorers: {
        default: { name: 'DC Explorer', url: 'https://explorer.dogechain.dog/' },
        etherscan: { name: 'DC Explorer', url: 'https://explorer.dogechain.dog/' },
      },
    testnet: false,
  }

const { chains, provider } = configureChains(
    [dogechain],
    [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);

const { connectors } = getDefaultWallets({
    appName: 'OpenDoge',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
    const color = (address);
    return ensImage ? (
      <img
        src={ensImage}
        width={size}
        height={size}
        style={{ borderRadius: 999 }}
      />
    ) : (
        <img
        src="/img/opendogeavatar.png"
        width={size}
        height={size}
        style={{ borderRadius: 999 }}
      />
    );
  };
  

const myTheme = merge(darkTheme({
    fontStack: 'system',
    borderRadius: 'small',
    overlayBlur: 'small',
    accentColor: '#64578a',
    accentColorForeground: 'white'
}), {
    fonts: {
        body: 'pixel'
    },
    colors: {
        connectButtonBackground: "transparent",
        connectButtonInnerBackground: "rgba(255,255,255, 0.085)",
        modalBackground: "#2C1B69",
        modalBackdrop: "#2C1B6955",
    }
} as Theme);


const MyApp = ({ Component, pageProps }: AppProps) => {

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={chains} modalSize="compact"
                theme={myTheme}
                avatar={CustomAvatar}
                coolMode
            >
                <Layout>
                    <DefaultSeo {...defaultSEOConfig} />
                    <Component {...pageProps} />
                </Layout>
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default MyApp;
