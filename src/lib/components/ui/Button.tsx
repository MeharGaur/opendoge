import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`btn rounded-xl border-2 border-zinc-900 bg-primary-100 font-bold text-slate-200 hover:bg-primary-200 normal-case font-medium text-xl` + className}
        >
            <span className="text-lg px-2">
                {children}
            </span>
        </button>
    );
};

export default Button;
