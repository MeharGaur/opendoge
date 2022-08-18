import Link from "next/link";

const Header = () => {

    return (
        <header className="sticky top-0 z-10 w-full bg-zinc-900/[.7] backdrop-blur-md overflow-x-hidden">
            <section className="wrapper mx-auto flex items-center justify-between py-2 h-20">
                <a className="hidden md:block" target="_blank" href={`https://app.uniswap.org/#/swap?&chain=ropsten&use=v2&outputCurrency=${process.env.NEXT_PUBLIC_TOKEN_ADDRESS}`}>
                    <button
                        className="btn rounded-xl border-2 border-zinc-900 bg-gradient-to-br from-rose-900 to-red-900 font-bold text-slate-200 hover:from-rose-200 hover:to-red-400 hover:text-red-800 normal-case font-medium text-xl"
                    >
                        <div
                            className="w-40 truncate"
                        >
                            Buy $MOON
                        </div>
                    </button>
                </a>

                <Link href="https://moonman.live" passHref>
                    <a target="_blank" className="cursor-pointer text-lg font-bold">
                        moonman.live
                    </a>
                </Link>

                <button
                    className="btn rounded-xl border-2 border-zinc-900 bg-gradient-to-br from-rose-900 to-red-900 font-bold text-slate-200 hover:from-rose-200 hover:to-red-400 hover:text-red-800 normal-case font-medium text-xl"
                    id="walletAddressBtn"
                >
                    <div
                        className="w-40 truncate"
                    >
                        0x00000000000000000000000000000000000
                    </div>
                </button>
            </section>
            <div className="h-0.5 bg-zinc-700" />
        </header>
    );
};

export default Header;
