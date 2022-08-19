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
    const [hasMounted, setHasMounted] = useState(false)

    const { isConnected } = useAccount()

    useEffect(() => {
        setHasMounted(true)
    }, [])

    return (
        <>
            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <HeroTitle />

                {/* isConnected && "w-full lg:w-4/5 xl:w-3/5" */}
                <div
                    suppressHydrationWarning
                    className={clsx("h-full lg:h-96 flex flex-col lg:flex-row text-center items-center rounded-lg mt-20")}
                >
                    <div
                        className="w-full bg-zinc-900/[.6] backdrop-blur-md flex flex-col justify-center px-10 py-10 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">
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
                                    <div className="grow min-h-80 min-w-80 flex flex-col items-center justify-center ml-3 mr-20">
                                        <div className="flex justify-center mb-6 -mt-1">
                                            <div>0/10,000 NFTs Already Minted</div>
                                        </div>

                                        <Counter />

                                        <div className="mb-5">
                                            Cost: 420 $wDOGE
                                        </div>


                                        <Button>
                                            Mint Now
                                        </Button>

                                        {/* <a href="#custom-amount-modal">
                                            <Button>
                                                Custom Amount
                                            </Button>
                                        </a> */}
                                    </div>

                                    <div className="h-full">
                                        <div className="w-80 h-80 flex flex-col items-center justify-center border border-solid border-white/[0.5] opacity-[0.6] rounded-lg">
                                            <div className="px-8 flex flex-col items-center justify-center">
                                                <Image className="invert" src="/img/upload.png" width="80" height="80" />
                                                <p className="mt-7">Your minted NFT will show up here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                </div>
            </div>

            {/* <div className="modal backdrop-blur-[3px]" id="custom-amount-modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div> */}


            {(hasMounted && !isConnected) &&
                <div
                    className="w-full flex-col flex items-center"
                >
                    <div
                        className="flex-col w-3/5 flex items-center w-full min-h-screen"
                    >
                        <LandingSection>
                            <>About</>
                            <>
                                <p className="mb-4">OpenDoge is the premier P2P NFT marketplace built entirely on Dogechain. A massive market exists for ERC-721 NFTs on Ethereum Mainnet, OpenDoge seeks to transition this existing market onto Dogechain, where transaction fees are lower and speeds are higher.</p>

                                <p>Contrary to Opensea, OpenDoge adopts a decentralized and open model, where we redistribute 85% of all marketplace fees and revenue back to holders of the OpenDoge Genesis Token.</p>
                            </>
                        </LandingSection>
                    </div>

                    <div
                        className="flex-col w-3/5 flex items-center w-full min-h-screen"
                    >
                        <LandingSection>
                            <>Socials</>
                            <>
                                Stay Up To Date With OpenDoge

                                <div className="mt-5 saturate-200">
                                    <a href="https://twitter.com/OpenDoge" target="_blank">
                                        <Image src="/img/twitter.png" width="96" height="96" />
                                    </a>
                                    <div className="mx-2 inline-block"></div>
                                    <a href="https://t.me/OpenDoge" target="_blank">
                                        <Image src="/img/telegram.png" width="84" height="84" />
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

export default Home;
