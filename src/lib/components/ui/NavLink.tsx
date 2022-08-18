import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
    children: ReactNode;
    classNames?: string;
};

const NavLink = ({ children, classNames }: NavLinkProps) => {
    return (
        <Link href="" passHref>
            <a target="_blank" className="cursor-pointer text-lg font-bold mx-6 text-rose-100 hover:text-rose-400">
                {children}
            </a>
        </Link>
    );
};

export default NavLink;
