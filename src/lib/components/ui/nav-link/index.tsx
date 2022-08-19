import clsx from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./index.module.scss"

type NavLinkProps = {
    children: ReactNode;
    classNames?: string;
    href: string;
    otherProps?: object[];
};

const NavLink = ({ children, classNames, otherProps=[], href}: NavLinkProps) => {
    return (
        <Link {...otherProps} href={href}>
            <a className={clsx(styles.link, "cursor-pointer text-lg font-bold py-6 px-6 mx-2 text-rose-100 hover:text-rose-300")}>
                {children}
            </a>
        </Link>
    );
};

export default NavLink;
