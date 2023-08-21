"use client";

import React, { Fragment, useRef, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import "../styles/main.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoDotFill } from "react-icons/go";
import { PiDotDuotone } from "react-icons/pi";
import { RiSeparator } from "react-icons/ri";
import rcblLogo from "../../public/rcbllogo.png";

import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import { averiaLibre } from "@/styles/myFonts";

const menu = [
  { name: "Home", url: "#home" },
  { name: "Popular", url: "#popular" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

export function HomePage() {
  const { setTheme } = useTheme();
  const [clicked, setClicked] = useState(false);

  return (
    <main>
      <div className="absolute navmenubar flex justify-center items-center p-6 gap-8 text-[#575552] light-bg dark:bg-[#544f4a] t-0 z-[1000] w-full text-[16px]">
        {menu.map((item, key) => {
          return (
            <>
              <a href={item.url} className={averiaLibre.className}>{item.name}</a>
              {key < menu.length - 1 ? (
                <div>
                  <RiSeparator className="text-[18px] rotate-90" />
                </div>
              ) : null}
            </>
          );
        })}
      </div>

      <div className="body light-bg dark:bg-[#544f4a] py-[4rem] border-[1px] flex flex-col">
        <div className="logo z-[2000]">
          <Image src={rcblLogo} width={150} height={150} alt=""></Image>
        </div>
        <div id="home" className="flex w-[98%]  border-show mt-[-3rem] p-[3rem] py-[9rem]">
          {/* HOME */}
          <Swiper
            className="mySwiper "
            effect={"fade"}
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide className="light-bg dark:bg-[#544f4a]">
                <img src="/rcbl-bag.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="light-bg dark:bg-[#544f4a]">
              <img src="/rcbl-pouf.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="light-bg dark:bg-[#544f4a]">
              <img src="/rcbl-planter.png" alt="" />
            </SwiperSlide>
            <SwiperSlide className="light-bg dark:bg-[#544f4a]">
              <img src="/rcbl-basket.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div id="popular" className="flex w-full h-[500px] bg-[#746D64] mt-[-3rem]">
          {/* IN THE SPOTLIGHT */}
        </div>
        <div id="about" className="flex w-full h-[500px]">
          {/* ABOUT US */} {/* BEST WE ARE */}
        </div>
        <div className="flex w-full h-[500px] bg-[#746D64]">
          {/* REVIEW */}
        </div>
        <div id="contact" className="flex w-full h-[500px] ">
          {/* CONTACT*/}
        </div>
        <div className="flex w-full h-[200px] border-show">
          {/* FOOTER */}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
