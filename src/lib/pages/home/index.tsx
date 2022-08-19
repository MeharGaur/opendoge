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

export let isValidNetwork = true;
export let account = '';

const Home: NextPage = () => {
    const { isConnected } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])

    return (
        <>
            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <HeroTitle className={[isConnected && "-mb-2", !isConnected && "-mb-16"]}>
                    <>
                        OpenDoge
                    </>
                    <>
                        The Premier NFT Marketplace On Dogechain.
                    </>
                </HeroTitle>

                <div
                    suppressHydrationWarning
                    className={clsx("h-full lg:h-96 flex flex-col lg:flex-row text-center items-center rounded-lg mt-20")}
                >
                    <div
                        className="w-full bg-zinc-900/[.7] backdrop-blur-lg flex flex-col justify-center px-10 py-10 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">
                        {(hasMounted && !isConnected) ?
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
                            :
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


                                        <Button>
                                            Mint Now
                                        </Button>

                                    </div>

                                    <div className="h-full">
                                        <div className="w-80 h-80 flex flex-col items-center justify-center border border-solid border-white/[0.5] opacity-[0.4] rounded-lg">
                                            <div className="px-8 flex flex-col items-center justify-center">
                                                <Image className="invert" src="/img/upload.png" width="80" height="80" />
                                                <p className="mt-7">Your minted NFTs will show up here</p>
                                            </div>
                                        </div>
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
                                <div className="text-left px-8 py-3">
                                    <p className="mb-4">OpenDoge is the premier P2P NFT marketplace built entirely on Dogechain. A massive market exists for ERC-721 & ERC-1155 NFTs on Ethereum Mainnet, OpenDoge seeks to transition this existing market onto Dogechain, where fees are lower and transactions are quicker.</p>

                                    <p className="mb-4">Contrary to Opensea, OpenDoge adopts a decentralized and open model, where we redistribute 85% of all marketplace fees and revenue back OpenDoge users and holders of OpenDoge's Genesis Token.</p>

                                    <p className="mb-4">ODGT (OpenDoge's Genesis Token) is an NFT which provides passive rewards back to the holders. 75% of all fees generated are provided back to the holders along with providing holders with voting rights.</p>

                                    <p className="mb-2">ODGT will be the first NFT tradable on OpenDoge's Marketplace post mint.</p>
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

                                    <a href="https://t.me/OpenDoge" target="_blank" className="pt-1 group">
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
}


export default Home;
