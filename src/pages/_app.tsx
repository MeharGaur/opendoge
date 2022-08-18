import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import defaultSEOConfig from "../../next-seo.config";
import Layout from "lib/components/layout";
import "lib/styles/globals.css";


import '@rainbow-me/rainbowkit/styles.css';
import {
    darkTheme,
    getDefaultWallets,
    RainbowKitProvider,
    Theme,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import merge from 'lodash.merge';


const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
        alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
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
        connectButtonInnerBackground: "transparent"
    }
} as Theme);


const MyApp = ({ Component, pageProps }: AppProps) => {

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                chains={chains} modalSize="compact"
                theme={myTheme}
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
