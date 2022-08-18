import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    classNames?: string;
};

const Button = ({ children, classNames }: ButtonProps) => {
    return (
        <button
            className={`btn rounded-xl border-2 border-zinc-900 bg-gradient-to-br from-rose-900 to-red-900 font-bold text-slate-200 hover:from-rose-200 hover:to-red-400 hover:text-red-800 normal-case font-medium text-xl` + classNames}
        >
            {children}
        </button>
    );
};

export default Button;
