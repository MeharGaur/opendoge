import type { NextPage } from "next";
import HeroTitle from "lib/components/ui/HeroTitle";
import Button from "lib/components/ui/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Counter } from "lib/components/ui/counter";

export let isValidNetwork = true;
export let account = '';

const Marketplace: NextPage = () => {
    const { isConnected } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])

    return (
        <>
            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <HeroTitle />

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
                                    <div className="grow min-h-80 min-w-80 flex flex-col items-center justify-center ml-3 mr-28">
                                        <div className="flex justify-center mb-6 -mt-3">
                                            <div>0/10,000 NFTs Already Minted</div>
                                        </div>

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
        </>

    );
};


export default Marketplace;
