import type { NextPage } from "next";
import HeroTitle from "lib/components/ui/HeroTitle";
import Button from "lib/components/ui/Button";
import LandingSection from "lib/components/ui/LandingSection";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Counter } from "lib/components/ui/counter";
import { NextSeo } from "next-seo";
import { getContractAddress } from "ethers/lib/utils";
import Web3 from "web3";
import BigNum from "bn.js";
import DiagonalMessage from "lib/components/ui/DiagonalMessage";

export let isValidNetwork = true;
export let account = '';

let mintAmount = 0;
const contractAddress = "0x538691A98248D81C6448D0F42C57E407785d63EC";

async function mintNow(address: string | undefined) {

    if (mintAmount <= 0) {
        alert("You must mint at least 1 NFT.")
        return;
    }

    if (!Number.isInteger(mintAmount)) {
        alert("Mint amount must be an integer (no decimals).")
        return;
    }

    if (typeof address == "undefined") {
        alert("You must connect your wallet to mint NFTs.")
        return;
    }

    const wDogeAmount = 420 * mintAmount;
    const wDogeWei = Web3.utils.toWei(wDogeAmount.toString(), 'ether')
    // value = 420*mintamount in HEX
    // raw hex data for transaction += mintAmount in HEX

    const originalDataString = "0xa0712d680000000000000000000000000000000000000000000000000000000000000000"
    const mintAmountHex = mintAmount.toString(16)
    const trimmedDataString = originalDataString.substring(0, originalDataString.length - mintAmountHex.length)
    const finalDataString = trimmedDataString + mintAmountHex
    console.log(finalDataString, "final data string")

    const tx = {
        from: address,
        to: contractAddress,
        value: parseInt(wDogeWei).toString(16),
        data: finalDataString,
    }

    // @ts-ignore
    try {
        // @ts-ignore
        const txHash = await ethereum.request({
            method: "eth_sendTransaction",
            params: [tx],
        }).then(async (tx: string) => {

            setTimeout(() => {
                prompt(`✅ 🎉 You have successfully minted your NFT(s). Please allow around 30 seconds for the transaction to process. You can now close this tab. \n \n Transaction ID: `, tx)
                location.reload()
            }, 100)
        })
    } catch (error: any) {
        console.log(error)
        alert(error.message)
    }

}

const Home: NextPage = () => {
    const { isConnected, address } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])

    return (
        <>
            <NextSeo title="Mint" />

            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <HeroTitle className={[isConnected && "-mb-2", !isConnected && "-mb-16"]}>
                    <>
                        OpenDoge
                    </>
                    <>
                        The Premier NFT Marketplace on Dogechain.

                        <DiagonalMessage>
                            Minting soon!
                        </DiagonalMessage>
                    </>
                </HeroTitle>


                <div
                    className={clsx("h-full lg:h-96 flex flex-col lg:flex-row text-center items-center rounded-lg mt-20")}
                >
                    <div
                        className="w-full bg-zinc-900/[.7] backdrop-blur-lg flex flex-col justify-center px-10 py-10 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">
                        {(hasMounted && !isConnected) &&
                            <>
                                <p
                                    className="w-auto mt-3 mb-3 text-rose-200 font-light text-lg mb-10"
                                >
                                    Please connect your wallet to start <br />
                                    minting OpenDoge Genesis Token.
                                </p>

                                <div className="flex justify-center mb-6">
                                    <ConnectButton />
                                </div>
                            </>
                        }
                        {(hasMounted && isConnected) &&
                            <>
                                <div className="flex h-full">
                                    <div className="grow min-h-80 min-w-80 flex flex-col items-center justify-center ml-3 mr-28">
                                        <div className="flex justify-center mb-6 -mt-3">
                                            <div>0/10,000 NFTs Already Minted</div>
                                        </div>

                                        <Counter onChange={counterOnChange} />

                                        <div className="-mt-3 mb-10">
                                            Cost: &nbsp;
                                            <span id="wdogeCost">0</span> $wDOGE
                                        </div>


                                        <Button onClick={() => mintNow(address)}>
                                            Mint Now
                                        </Button>

                                    </div>

                                    <div className="h-full">
                                        <Image className="rounded-lg" width="320" height="320" src="/img/minted.gif"></Image>
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>



            {(hasMounted && !isConnected) &&
                <div
                    className="w-full flex-col flex items-center"
                >
                    <div
                        className="flex-col w-3/5 flex items-center w-full mb-[150px]"
                    >
                        <LandingSection>
                            <><span id="about">About</span></>
                            <>
                                <div className="text-left px-8 py-3 leading-[1.8]">
                                    <h3 className="mb-5 font-sans">Marketplace</h3>
                                    <p className="mb-5">OpenDoge is the premier P2P NFT marketplace built entirely on Dogechain. A massive market exists for ERC-721 & ERC-1155 NFTs on Ethereum Mainnet. OpenDoge seeks to transition this existing market onto Dogechain, where <span className="font-black bg-base-100/[0.7] px-2 py-0.5 rounded-md">fees are lower</span> and <span className="font-black bg-base-100/[0.7] px-2 py-0.5 rounded-md">transactions are quicker.</span></p>

                                    <p className="">Contrary to Opensea, OpenDoge adopts a decentralized and open model, where we redistribute 75% of all marketplace fees and revenue back OpenDoge users and holders of OpenDoge's Genesis Token.</p>

                                    <div className="h-[1px] w-full bg-white/[0.2] my-10" />

                                    <h3 className="mb-5 font-sans">Genesis Token (NFT)</h3>
                                    <p className="mb-5">ODGT (OpenDoge's Genesis Token) is an NFT which provides passive rewards back to the holders. 75% of all fees generated are provided back to the holders along with providing holders with voting rights.</p>

                                    <p className="mb-1">ODGT will be the first NFT tradable on OpenDoge's Marketplace post mint.</p>
                                </div>
                            </>
                        </LandingSection>
                    </div>

                    <div
                        className="flex-col w-3/5 flex items-center w-full mb-[80px]"
                        id="socials"
                    >
                        <LandingSection>
                            <>Socials</>
                            <>
                                Stay Up To Date With OpenDoge

                                <div className="mt-8 mx-12 flex flex-row saturate-200">
                                    <a href="https://twitter.com/OpenDoge" target="_blank" className="group">
                                        <Image src="/img/twitter.png" width="96" height="96" className="overflow-visible group-hover:-translate-y-1" />
                                    </a>

                                    <div className="mx-4 inline-block"></div>

                                    <a href="https://t.me/OpenDogeOrg" target="_blank" className="pt-1 group">
                                        <Image src="/img/telegram.png" width="84" height="84" className="overflow-visible group-hover:-translate-y-1" />
                                    </a>
                                </div>
                            </>
                        </LandingSection>
                    </div>

                </div>
            }


        </>

    );
};


// This must be outside the Home component
function counterOnChange(amount: number) {
    const el = document.getElementById("wdogeCost")!

    el.textContent = String(amount * 420)
    mintAmount = amount
}


export default Home;
