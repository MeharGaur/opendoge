import clsx from "clsx"
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const HeroTitle = () => {
    const { isConnected } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => setHasMounted(true), [])

    if (hasMounted) {
        return (
            <div className={clsx(isConnected && "-mb-4", !isConnected && "-mb-16", "text-center -mt-10")}>
                <h1 className="text-rose-200 text-5xl font-bold"
                    style={{ textShadow: "0px 6px 8px rgba(0,0,0,1)" }}
                >
                    OpenDoge
                </h1>
                <p className="text-sm text-rose-100 mt-5 font-light"
                    style={{ textShadow: "0px 6px 10px rgba(0,0,0,1)" }}
                >
                    The Premier NFT Marketplace On Dogechain.
                </p>
            </div>
        )
    }
    else {
        return null
    }
};

export default HeroTitle;
