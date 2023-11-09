"use client";
import "@/styles/info.css";

import { Inter } from "next/font/google";
import { SideNav, SidePanel } from "@/components/side-nav";
import rcblLogo from "../../../public/logo_outline.png";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { RevealWrapper } from "next-reveal";
import { IoIosFlower } from "react-icons/io";
import { BsFlower2 } from "react-icons/bs";
import { GiFlowers, GiVineFlower } from "react-icons/gi";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className="body light-bg flex flex-row min-h-[100vh] pt-[70px] sm:pt-[0px]">
      <div className="absolute top-0 sm:border-b w-[95%] sm:border-[#a49e98] h-[65px] pt-[1rem]">
        <div className="flex flex-row justify-between sm:justify-center z-[2000] w-[100%] items-center">
          <Image src={rcblLogo} width={120} height={120} alt="" />
          <HiMenuAlt3
            className="menu-indicator flex sm:hidden text-[#575552] text-[24px] opacity-[0.8] mr-[2rem]"
            onClick={() => setShowPanel(true)}
          />
        </div>
      </div>
      <IoIosFlower className="absolute text-[250px] text-[#4e4e4e] opacity-[0.05] sm:opacity-[0.05] bottom-[10%] right-[15%] z-[1000]" />
      <GiVineFlower className="absolute text-[200px] text-[#4e4e4e] opacity-[0.05] sm:opacity-[0.05] top-[18%] left-[20%] z-[1000]" />
      <SideNav />
      <SidePanel visible={showPanel} onCancle={() => setShowPanel(false)} />
      <main className="flex-1 sm:pt-[70px]">{children}</main>
    </div>
  );
}
