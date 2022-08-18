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


    return (
        <>
            <div className="flex w-full min-h-[100vh] flex-col items-center justify-center text-white">
                <SomeText />

                <div
                    className="w-full lg:w-3/5 text-center xl:w-2/5 h-full lg:h-96 flex flex-col lg:flex-row items-center rounded-lg overflow-hidden mt-20"
                >
                    <div
                        className="w-full w-full bg-zinc-900/[.6] backdrop-blur-md flex flex-col justify-center py-14 rounded-lg my-6 lg:mr-2 border border-solid border-slate-700">

                        <p
                            className="w-auto mb-3 text-rose-200 font-light text-lg px-10 mb-10"
                        >
                            Please connect your wallet to start minting OpenDoge Genesis Token.
                        </p>

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
