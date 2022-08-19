import clsx from "clsx"
import { Children, ReactNode, useEffect, useState } from "react";
import { useAccount } from "wagmi";

const HeroTitle = ({ children, className }: { children: ReactNode, className: Array<string | boolean> }) => {
    const { isConnected } = useAccount()

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => setHasMounted(true), [])

    if (hasMounted) {
        return (
            <div className={clsx(...className, "text-center -mt-10")}>
                <h1 className="text-rose-200 text-5xl font-bold"
                    style={{ textShadow: "0px 6px 8px rgba(0,0,0,1)" }}
                >
                    {Children.toArray(children)[0]}
                </h1>

                <div className="relative text-sm text-rose-100 mt-5 font-light"
                    style={{ textShadow: "0px 6px 10px rgba(0,0,0,1)" }}
                >
                    {Children.toArray(children)[1]}
                </div>
            </div>
        )
    }
    else {
        return null
    }
};

export default HeroTitle;
