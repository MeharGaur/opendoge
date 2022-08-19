import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
    children: ReactNode;
    classNames?: string;
    href: string;
    otherProps?: object[];
};

const NavLink = ({ children, classNames, otherProps=[], href}: NavLinkProps) => {
    return (
        <Link {...otherProps} href={href}>
            <a className="cursor-pointer text-lg font-bold mx-6 text-rose-100 hover:text-rose-400">
                {children}
            </a>
        </Link>
    );
};

export default NavLink;
