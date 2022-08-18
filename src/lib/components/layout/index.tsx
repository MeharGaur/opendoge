import { ReactNode, useEffect, useRef } from "react";
// @ts-ignore
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three'
import Footer from "./Footer";
import Header from "./Header";
import { Cursor } from "../cursor";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  const myRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    FOG({
      el: myRef.current,
      THREE,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xff0000,
      midtoneColor: 0x000000,
      lowlightColor: 0xff0000,
      baseColor: 0x000000,
      blurFactor: 0.55,
      speed: 1.1,
      zoom: 0.80,
    })
  }, [])

  return (
    <div ref={myRef} className="flex min-h-screen flex-col slate-900 bg-black">
      
      <Cursor/>
      
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
