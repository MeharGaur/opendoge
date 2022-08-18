import { ReactNode, useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Cursor } from "../cursor";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="flex h-full flex-col slate-900">
      <div
      className="fixed -z-[1] top-0 left-0 right-0 bottom-0 w-full flex flex-col">
        <Image src="/img/background.gif" layout="fill"></Image>
      </div>
      {/* <Cursor/> */}
      
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
