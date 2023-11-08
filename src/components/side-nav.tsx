"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/app/routes";
import { CSSTransition } from "react-transition-group";
import { BiCross } from "react-icons/bi";
import { RiSeparator } from "react-icons/ri";
import clsx from "clsx";
import { h3font } from "@/styles/myFonts";

type SidePanelProps = {
  visible: boolean;
  onCancle: () => void;
};

export const SideNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden sm:flex h-[100vh] w-[250px] justify-center items-center">
      <div className="hidden sm:flex w-full h-[90%] flex-col items-center justify-center border-r border-[#a49e98]">
        {SIDENAV_ITEMS.map((item, idx) => {
          return (
            <Link
              href={item.path}
              className="flex flex-row space-x-4 items-center px-4 py-3 rounded-full duration-200 hover:bg-white/10"
            >
              <span
                className={clsx(
                  `text-[22px] pt-2 hidden md:flex ${
                    pathname === item.path ? "text-[#060606]" : "text-[#575552]"
                  }`,
                  h3font.className
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const SidePanel = ({
  visible,
  onCancle,
}: SidePanelProps): JSX.Element => {
  const [showPanel, setShowPanel] = useState(false);
  const nodeRef = useRef(null);
  const pathname = usePathname();
  return (
    <CSSTransition
      in={visible}
      nodeRef={nodeRef}
      timeout={300}
      unmountOnExit
      className="fixed h-[100vh] flex flex-col bg-[#eae0d5ff] p-[2rem] pt-[4rem] z-[3000] border-[0.1rem] border-[#575552] rounded-l-[1rem]  gap-[6rem] right-0 top-0"
    >
      <div>
        <BiCross
          className="text-[#575552] text-[24px] rotate-[130deg]"
          onClick={onCancle}
        />
        <div className="flex flex-col ml-[-1rem]">
          {SIDENAV_ITEMS.map((item, index) => {
            return (
              <div
                className="flex flex-row items-center gap-[2rem] sm:gap-[1rem] py-[1rem] px-[3rem] ml-[-1rem]"
                key={index}
              >
                <div className="flex sm:hidden">
                  <RiSeparator className="text-[18px] text-[#575552] rotate-90" />
                </div>
                <a
                  href={item.path}
                  className={clsx(` ${pathname === item.path ? "text-[#060606]" : "text-[#575552]"}`, h3font.className)}
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </CSSTransition>
  );
};
