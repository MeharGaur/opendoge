import clsx from "clsx";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
};

const Button = ({ children, className, onClick = () => {} }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`btn rounded-lg border-2 border-zinc-900 bg-primary-100 font-bold text-slate-200 hover:bg-primary-200 normal-case font-bold text-xl` + className}
        >
            <span className="text-lg px-2">
                {children}
            </span>
        </button>
    );
};

export default Button;
