import type { NextPage } from "next";
import HeroTitle from "lib/components/ui/HeroTitle";
import Button from "lib/components/ui/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export let isValidNetwork = true;
export let account = '';

const Marketplace: NextPage = () => {
    const { isConnected } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])

    return (
        <>
            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <HeroTitle className={["-mb-2"]}>
                    <>
                        OpenDoge Marketplace
                    </>
                    <>
                        The Premier NFT Marketplace On Dogechain.
                    </>
                </HeroTitle>

                <div
                    className={clsx("h-full lg:h-96 flex flex-col lg:flex-row text-center items-center rounded-lg mt-20")}
                >
                    <div className="w-full bg-zinc-900/[.7] backdrop-blur-lg flex flex-col justify-center px-10 py-10 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">
                        <Image src="/img/construction.jpeg" width="256" height="256" />

                        <p className="mt-10">Coming soon (very).</p>
                    </div>

                </div>
            </div>
        </>

    );
};


export default Marketplace;
