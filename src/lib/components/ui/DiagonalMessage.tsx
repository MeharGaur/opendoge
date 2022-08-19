import clsx from "clsx";
import type { ReactNode } from "react";

type DiagonalMessageProps = {
    children: ReactNode;
    className?: string;
}

const DiagonalMessage = ({ children, className }: DiagonalMessageProps) => {
    return (
        <div className={clsx("absolute -top-[440%] -right-[10%] text-lg text-amber-400 rotate-[18deg]", className)} style={{ textShadow: "0px 2px 2.5px rgba(0,0,0,1)" }}>
            {children}
        </div>
    );
};

export default DiagonalMessage;
