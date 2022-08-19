import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import NavLink from "../ui/NavLink";

const Header = () => {
    const router = useRouter()
    const { isConnected } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])

    return (
        <>
            <header className="fixed top-0 z-10 w-full backdrop-blur-xl overflow-x-hidden">
                <section className="wrapper mx-auto flex items-center justify-between py-2 h-24">

                    <Link href="/#">
                        <a className="block flex items-center">
                            <Image height="96" width="96" src="/img/opendogelogo.png"></Image>
                            <h4 className="ml-1 text-rose-100">OpenDoge</h4>
                        </a>
                    </Link>

                    <div
                        className="justify-self-center">
                        <NavLink href="/#">Mint</NavLink>
                        {!isConnected && hasMounted &&
                            <NavLink href="/#about">About</NavLink>
                        }
                        <NavLink href={`${router.pathname}#socials`}>Socials</NavLink>
                        <NavLink href="/marketplace">Marketplace</NavLink>
                    </div>

                    <ConnectButton />
                </section>
                <div
                    className="h-0.5 w-full bg-white/[0.1]">

                </div>
            </header>
        </>
    );
};

export default Header;
