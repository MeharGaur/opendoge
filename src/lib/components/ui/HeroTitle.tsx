import clsx from "clsx"
import { useAccount } from "wagmi";

const HeroTitle = () => {
    let { isConnected } = useAccount()

    if (typeof window == "undefined") {
        isConnected = false
    }

    return (
        <div className={clsx(isConnected && "mb-4", !isConnected && "-mb-16", "text-center -mt-10")}>
            <h1 className="text-rose-200 text-5xl font-bold"
                style={{ textShadow: "0px 6px 8px rgba(0,0,0,1)" }}
            >
                OpenDoge
            </h1>
            <p className="text-sm text-rose-100 mt-5 font-light"
                style={{ textShadow: "0px 6px 10px rgba(0,0,0,1)" }}
            >
                The premier NFT marketplace on Dogechain.
            </p>
        </div>
    );
};

export default HeroTitle;
