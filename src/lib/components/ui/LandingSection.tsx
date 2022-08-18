import clsx from "clsx";
import { Children, ReactNode } from "react";

type LandingSectionProps = {
    children: ReactNode;
    className?: string;
};

const LandingSection = ({ children, className }: LandingSectionProps) => {
    return (
        <div className="text-center">
        <h2 className="text-rose-200 text-5xl font-bold"
            style={{ textShadow: "0px 6px 10px rgba(0,0,0,1)" }}
        >
            {Children.toArray(children)[0]}
        </h2>
        <div
            className="w-full rounded-lg h-full bg-zinc-900/[.6] font-body backdrop-blur-md p-8 mt-8 mb-6 border border-solid border-slate-700">
            <div className="mt-1 mb-2">
                {Children.toArray(children)[1]}
            </div>
        </div>
    </div>
    );
};

export default LandingSection;