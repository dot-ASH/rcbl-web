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
import wmap from "../../public/wmap.png";
import bag from "../../public/bagshadow.png";
import cycle from "../../public/cycle.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiSolidPlaneTakeOff, BiSolidHomeSmile } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { GiSandsOfTime, GiLifeInTheBalance } from "react-icons/gi";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import { RiUser5Fill } from "react-icons/ri";
import { AccountForm } from "@/components/ui/account-form";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import {
  h1font,
  h1fontAlt,
  h2font,
  h3font,
  italicfont,
  pfont,
} from "@/styles/myFonts";
import {
  contacts,
  menu,
  popular,
  whyUsPrimary,
  whyUsSecondary,
} from "@/data/data";

export function HomePage() {
  const { setTheme } = useTheme();
  const [clicked, setClicked] = useState(false);

  const onWheel = (e: any) => {
    e.preventDefault();

    var container: HTMLElement | null = document.getElementById("container");
    var containerScrollPosition: any | null =
      document.getElementById("container")?.scrollLeft;
    container?.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <div className="absolute navmenubar flex justify-center items-center p-6 gap-8 text-[#575552] light-bg dark:bg-[#544f4a] t-0 z-[1000] w-full text-[16px]">
        {menu.map((item, key) => {
          return (
            <div className="flex flex-row items-center gap-[2rem]">
              <a href={item.url} className={h3font.className} key={key}>
                {item.name}
              </a>
              {key < menu.length - 1 ? (
                <div>
                  <RiSeparator className="text-[18px] rotate-90" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="body light-bg dark:bg-[#544f4a] py-[4rem] border-[1px] flex flex-col">
        <div className="logo z-[2000]">
          <Image src={rcblLogo} width={150} height={150} alt=""></Image>
        </div>
        <div
          id="home"
          className="flex w-[98%]  border-show mt-[-3rem] p-[3rem] py-[9rem]"
        >
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
        <div
          id="popular"
          className="flex w-full h-[600px] bg-[#746D64] mt-[-3rem] items-center justify-center"
          onWheel={(event) => onWheel(event)}
        >
          {/* IN THE SPOTLIGHT */}
          <div className="flex flex-col w-[85%] h-full p-[4rem] gap-[3rem]">
            <p
              className={clsx("text-[32px] text-[#eae0d5ff]", h1font.className)}
            >
              IN THE SPOTLIGHT
            </p>
            <div
              className="h-[100%] w-[100%] overflow-scroll rounded-[5px]"
              id="container"
            >
              <div className="flex w-[1200px] 2xl:w-[100%] h-full justify-between gap-[1.5rem] rounded-[5px]">
                {popular.map((item, key) => {
                  return (
                    <>
                      <div
                        key={key}
                        className="flex w-[250px] h-full bg-[#eae0d5ff] rounded-[5px]"
                      ></div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US */} {/* BEST WE ARE */}
        <div
          id="about"
          className="flex w-full h-[600px] items-center justify-center overflow-hidden"
        >
          <div className="flex flex-row w-full h-full">
            <div className="relative flex w-[45%] flex-col h-full justify-center gap-[1rem] items-center p-[6rem] z-[100]">
              <div className="mb-[1rem]">
                <Image src={bag} width={100} height={100} alt=""></Image>
              </div>
              <p
                className={clsx(
                  "text-[26px] text-[#575552]  text-center",
                  h1font.className
                )}
              >
                WHO ARE WE?
              </p>
              <p
                className={clsx(
                  "text-[14px] text-[#575552]  text-center",
                  pfont.className
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur nobis modi deserunt repellendus, culpa, quia dolorum
                quae accusamus quidem eos quisquam aliquam ratione qui optio
                facilis voluptatem quo earum rem?
              </p>
            </div>
            <div className="relative flex w-[55%] bg-[#F6F7E4] flex-col h-full justify-center items-center z-[50]">
              <div className="absolute top-5 right-[-40px] ">
                <BsGlobeAmericas className="text-[160px] text-[#00000018]" />
              </div>
              <div className="absolute top-15 left-[-40px] z-[50]">
                <BiSolidPlaneTakeOff className="text-[160px] text-[#00000018]" />
              </div>
              <Image src={wmap} width={600} height={150} alt=""></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full py-[6rem] bg-[#746D64] justify-center items-center">
          {/* WHY US */}
          <div className="flex relative items-center justify-center mb-[5rem]">
            <p
              className={clsx(
                "text-[26px] text-[#eae0d5ff] text-center mb-[1rem]",
                h1font.className
              )}
            >
              WHY US?
            </p>
            <div className="absolute w-[50px] h-[5px] bottom-0 bg-[#eae0d5ff] rounded-[5px]" />
          </div>
          <div className="flex flex-col gap-[4rem] justify-center items-center">
            <div className="flex gap-[1rem]  justify-center items-center">
              {whyUsPrimary.map((item, key) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center w-[200px] gap-[0.5rem]"
                    key={key}
                  >
                    {item.icon}
                    <p
                      className={clsx(
                        "text-center font-[700] text-[#F6F7E4] text-[18px]",
                        h1fontAlt.className
                      )}
                    >
                      {item.title}
                    </p>
                    <p
                      className={clsx(
                        "text-center text-[12px] text-[#eae0d5ff]",
                        pfont.className
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-[1rem] justify-center items-center">
              {whyUsSecondary.map((item, key) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center w-[200px] gap-[0.5rem]"
                    key={key}
                  >
                    {item.icon}
                    <p
                      className={clsx(
                        "text-center font-[700] text-[#F6F7E4] text-[18px]",
                        h1fontAlt.className
                      )}
                    >
                      {item.title}
                    </p>
                    <p
                      className={clsx(
                        "text-center text-[12px] text-[#eae0d5ff]",
                        pfont.className
                      )}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* CONNECTED*/}
        <div
          id="contact"
          className="flex flex-row w-full h-[600px] items-center justify-center"
        >
          <div className="relative h-full flex w-[60%] bg-[#F6F7E4] flex-col justify-center z-[50] px-[8rem]">
            <div className="relative mb-[2rem]">
              <p
                className={clsx(
                  "text-[32px] text-[#575552] text-left pb-[1rem]",
                  h1font.className
                )}
              >
                STAY CONNECTED . . .
              </p>
              <div className="absolute w-[150px] h-[5px] bottom-0 bg-[#575552] rounded-[5px]" />
            </div>
            <p
              className={clsx(
                "text-[24px] text-[#575552] text-left pb-[1rem]",
                italicfont.className
              )}
            >
              There was a time we all were happy
            </p>
            <div className="flex gap-[-2rem] items-baseline justify-start">
              <p
                className={clsx(
                  "text-[48px] text-[#575552]  text-left",
                  italicfont.className
                )}
              >
                L
              </p>
              <p
                className={clsx(
                  "text-[20px] text-[#575552]  text-left",
                  italicfont.className
                )}
              >
                o
              </p>
              <p
                className={clsx(
                  "text-[14px] text-[#575552] ml-[-1.7rem] text-left",
                  pfont.className
                )}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rem ipsum dolor sit
                amet consectetur adipisicing elit. Aspernatur nobis modi
                deserunt repellendus, culpa, quia dolorum quae accusamus quidem
                eos quisquam aliquam ratione qui optio facilis voluptatem quo
                earum rem?
              </p>
            </div>
          </div>
          <div className="relative flex w-[40%] flex-col h-full justify-center gap-[1rem] items-center p-[6rem]">
            <div className="mb-[1rem]">
              <Image src={cycle} width={600} height={150} alt=""></Image>
            </div>
          </div>
        </div>
        {/* FORM*/}
        <div
          id="from"
          className="flex flex-row w-full bg-[#746D64] px-[8rem] py-[6rem] items-center justify-between"
        >
          <div className="relative flex w-[40%] flex-col h-full justify-center gap-[1rem] items-center">
            <div className="flex flex-col justify-start items-left h-full">
              <p
                className={clsx(
                  "text-[28px] text-[#eae0d5ff] text-left pb-[1rem]",
                  h1font.className
                )}
              >
                ASK US ANYTHING
              </p>
              <p
                className={clsx(
                  "text-[14px] text-[#F6F7E4] text-justify mr-[2rem]",
                  pfont.className
                )}
              >
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur nobis modi deserunt repellendus, culpa, quia dolorum
                quae accusamus quidem eos quisquam aliquam ratione qui optio
                facilis voluptatem quo earum rem?
              </p>
              <div className="absolute w-[3px] h-[150px] right-0 top-3 bg-[#eae0d5ff] rounded-[5px]" />
            </div>
          </div>
          <div className="relative flex w-[60%] flex-col h-full justify-center gap-[1rem] items-left ml-[3rem]">
            <div className="form-border-show rounded-[5px] p-[1.5rem] space-y-4">
              <div>
                <h3
                  className={clsx(
                    "text-[28px] text-[#F6F7E4] text-justify mr-[2rem]",
                    h1fontAlt.className
                  )}
                >
                  Fill up with your thought!
                </h3>
              </div>
              <Separator />
              <AccountForm />
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="flex flex-col w-full py-[6rem] px-[8rem] items-center justify-center gap-[6rem]"
        >
          {/* CONTACT*/}
          <div className="flex relative items-center justify-center">
            <p
              className={clsx(
                "text-[26px] text-[#746D64] text-center mb-[1rem]",
                h1font.className
              )}
            >
              CONTACT US?
            </p>
            <div className="absolute w-[50px] h-[5px] bottom-0 bg-[#746D64] rounded-[5px]" />
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="flex flex-row w-full h-full justify-center">
              {contacts.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="flex flex-row gap-[1.5rem] justify-start items-center"
                  >
                    <div
                      className="p-[1rem] rounded-[1rem] opacity-80"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `2px 2px 10px ${item.color}`,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-[0.5rem] justify-start items-start">
                      <h1 className={clsx("text-[22px] text-[#575552]", h1fontAlt.className)}>
                        {item.name}
                      </h1>
                      <p className={clsx("text-[16px] text-[#575552]", pfont.className)}> {item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full h-[200px] border-show">{/* FOOTER */}</div>
      </div>
    </main>
  );
}

export default HomePage;
