import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Footer = () => {
    const { isConnected } = useAccount()
    const router = useRouter()

    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => setHasMounted(true), [])

    return (
        <footer className="wrapper bottom-0 left-0 right-0 text-violet-3 font-light text-sm">
            <div className="flex justify-between items-center">

                {(!isConnected && router.pathname == "/") && hasMounted &&
                    <div className="flex-grow" />
                }

                <p>
                    Copyright &copy; &nbsp;
                    {new Date().getFullYear()} –{" "}
                    <a href="https://moonman.live" target="_blank" rel="noopener noreferrer">
                        OpenDoge
                    </a>
                </p>

                {(isConnected || router.pathname != "/") && hasMounted &&
                    <div id="socials" className="flex flex-row mr-6">
                        <a href="https://twitter.com/OpenDoge" target="_blank" className="group">
                            <Image src="/img/twitter.png" width="72" height="72" className="overflow-visible group-hover:-translate-y-1" />
                        </a>

                        <div className="mx-5" />

                        <a href="https://t.me/OpenDoge" target="_blank" className="pt-1 group">
                            <Image src="/img/telegram.png" width="64" height="64" className="overflow-visible group-hover:-translate-y-1" />
                        </a>
                    </div>
                }
            </div>
        </footer>
    );
};

export default Footer;
