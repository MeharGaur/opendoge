import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import NavLink from "../ui/NavLink";

const Header = () => {

    return (
        <>
            <header className="fixed top-0 z-10 w-full backdrop-blur-xl overflow-x-hidden">
                <section className="wrapper mx-auto flex items-center justify-between py-2 h-24">
                    <div
                        className="flex items-center">
                        <Image height="96" width="96" src="/img/opendogelogo.png"></Image>
                        <h4 className="ml-1 text-rose-100">OpenDoge</h4>
                    </div>
                    <div
                        className="justify-self-center">
                        <NavLink>Mint</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Socials</NavLink>
                        <NavLink>Marketplace</NavLink>
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
