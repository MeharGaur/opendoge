import type { NextPage } from "next";
import SomeText from "lib/components/samples/SomeText";
import Button from "lib/components/ui/Button";
import LandingSection from "lib/components/ui/LandingSection";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";
import { useEffect, useState } from "react";

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
                <SomeText />

                <div
                    className="w-full lg:w-4/5 text-center xl:w-3/5 h-full lg:h-96 flex flex-col lg:flex-row items-center rounded-lg overflow-hidden mt-20"
                >
                    <div
                        className="w-full bg-zinc-900/[.6] backdrop-blur-md flex flex-col justify-center py-8 px-6 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">
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
                                    <div className="grow h-full bg-red-500">
                                        Upload UI
                                    </div>
                                    <div className="grow h-full bg-blue-500">
                                        Mint UI
                                    </div>
                                </div>
                            </>
                        }
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
