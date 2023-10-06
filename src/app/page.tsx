"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import "../styles/main.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiSeparator } from "react-icons/ri";
import rcblLogo from "../../public/rcbllogo.png";
import wmap from "../../public/wmap.png";
import bag from "../../public/bagshadow.png";
import cycle from "../../public/cycle.png";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { CiMail, CiLinkedin, CiMobile4 } from "react-icons/ci";
import { IoIosBasket, IoIosFlower } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
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
  itemDemo,
  menu,
  popular,
  whyUsPrimary,
  whyUsSecondary,
} from "@/data/data";
import ContactsComponent from "@/components/ContactComponets";
import { useToast } from "@/components/ui/use-toast";
import { RevealWrapper } from "next-reveal";

export function HomePage() {
  const { toast } = useToast();
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

  const Intro = (): JSX.Element => {
    return (
      <div className="float-box">
        <h1
          className={clsx(
            "flex-title text-[48px] text-[#575552]",
            h1fontAlt.className
          )}
        >
          ROYAL CRAFT BD LTD
        </h1>
        <div className="motto">
          <h1
            className={clsx("text-[18px] text-[#575552]", h1fontAlt.className)}
          >
            hjsgohsgos
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            similique quaerat doloribus eaque molestiae maxime consequatur earum
            accusantium, sequi officiis!
          </p>
        </div>
      </div>
    );
  };


  const Banner = ({ title, description }): JSX.Element => {
    return (
      <div className="float-box-right">
        <div className="flex flex-row justify-center items-center gap-[.5rem]">
          <div className="w-1.5 h-1.5 rounded-[50%] bg-[#eae0d5ff]" />
          <div className="w-2.5 h-2.5 rounded-[50%] bg-[#eae0d5ff]" />
          <h1
            className={clsx(
              "text-[18px] text-[#eae0d5ff]",
              h1fontAlt.className
            )}
          >
            {title}
          </h1>
          <div className="w-2.5 h-2.5 rounded-[50%] bg-[#eae0d5ff]" />
          <div className="w-1.5 h-1.5 rounded-[50%] bg-[#eae0d5ff]" />
        </div>
        <p className={pfont.className}>{description}</p>
      </div>
    );
  };

  return (
    <main>
      <div className="absolute navmenubar flex justify-center items-center p-6 gap-8 text-[#575552] light-bg t-0 z-[1000] w-full text-[16px]">
        {menu.map((item, index) => {
          return (
            <div className="flex flex-row items-center gap-[2rem]" key={index}>
              <a href={item.url} className={h3font.className}>
                {item.name}
              </a>
              {index < menu.length - 1 ? (
                <div>
                  <RiSeparator className="text-[18px] rotate-90" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="body light-bg pt-[3rem] border-[1px] flex flex-col">
        <div className="logo z-[2000]">
          <Image src={rcblLogo} width={150} height={150} alt=""></Image>
        </div>
        {/* HOME */}
        <div
          id="home"
          className="relative flex flex-col w-[98%] justify-center border-show mt-[-3rem] p-[3rem] py-[9rem]"
        >
          <h1
            className={clsx(
              "title text-[48px] text-[#575552] text-center",
              h1fontAlt.className
            )}
          >
            ROYAL CRAFT BD LTD
          </h1>
          <Swiper
            className="mySwiper "
            effect={"fade"}
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide className="relative light-bg">
              <Intro />
              <img className="swiper-img" src="/rcbl-bag.png" alt="" />
              <Banner
                title={itemDemo[0].title}
                description={itemDemo[0].description}
              />
            </SwiperSlide>
            <SwiperSlide className="relative light-bg">
              <Intro />
              <img className="swiper-img" src="/rcbl-pouf.png" alt="" />
              <Banner
                title={itemDemo[1].title}
                description={itemDemo[1].description}
              />
            </SwiperSlide>
            <SwiperSlide className="relative light-bg">
              <Intro />
              <img className="swiper-img" src="/rcbl-planter.png" alt="" />
              <Banner
                title={itemDemo[2].title}
                description={itemDemo[2].description}
              />
            </SwiperSlide>
            <SwiperSlide className="relative light-bg">
              <Intro />
              <img className="swiper-img" src="/rcbl-basket.png" alt="" />
              <Banner
                title={itemDemo[3].title}
                description={itemDemo[3].description}
              />
            </SwiperSlide>
          </Swiper>
          <RevealWrapper
            origin="right"
            duration={1800}
            reset
            className="absolute bottom-[30%] right-[-1.5rem] border-[#746D64] p-[1rem] z-[2000] shadow-md rounded-tl-[1rem] rounded-bl-[1rem] bg-[#dfd6cc]"
          >
            <p className={clsx("text-[#746D64] text-[12px]", pfont.className)}>
              Swipe the image to left to see more!
            </p>
          </RevealWrapper>
        </div>
        {/* IN THE SPOTLIGHT */}
        <div
          id="popular"
          className="flex w-full h-[630px] bg-[#746D64] mt-[-2rem] items-center justify-center pt-[1rem]"
          onWheel={(event) => onWheel(event)}
        >
          <div className="flex flex-col w-[85%] h-full p-[4rem] gap-[3rem] pb-[6rem]">
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
                {popular.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex w-[250px] h-full bg-[#eae0d5ff] rounded-[5px]"
                    ></div>
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
              <div
                className={clsx(
                  "text-[26px] text-[#575552]  text-center",
                  h1font.className
                )}
              >
                WHO ARE WE?
              </div>
              <RevealWrapper
                distance="0px"
                duration={1200}
                reset
                className={clsx(
                  "text-[14px] text-[#575552]  text-center",
                  pfont.className
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur nobis modi deserunt repellendus, culpa, quia dolorum
                quae accusamus quidem eos quisquam aliquam ratione qui optio
                facilis voluptatem quo earum rem?
              </RevealWrapper>
            </div>
            <div className="relative flex w-[55%] bg-[#F6F7E4] flex-col h-full justify-center items-center z-[50]">
              <div className="absolute top-5 right-[-40px] ">
                <RevealWrapper origin="right">
                  <BsGlobeAmericas className="text-[160px] text-[#00000018]" />
                </RevealWrapper>
              </div>
              <div className="absolute top-15 left-[-40px] z-[50]">
                <RevealWrapper origin="left" duration={1200} reset>
                  <BiSolidPlaneTakeOff className="text-[160px] text-[#00000018]" />
                </RevealWrapper>
              </div>
              <Image src={wmap} width={600} height={150} alt=""></Image>
            </div>
          </div>
        </div>
        <div
          id="services"
          className="flex relative flex-col w-full py-[6rem] bg-[#746D64] justify-center items-center"
        >
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
            <RevealWrapper
              reset={true}
              className="flex gap-[1rem]  justify-center items-center"
            >
              {whyUsPrimary.map((item, index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center w-[200px] gap-[0.5rem]"
                    key={index}
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
            </RevealWrapper>
            <RevealWrapper
              reset={true}
              className="flex gap-[1rem] justify-center items-center"
            >
              {whyUsSecondary.map((item, index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center w-[200px] gap-[0.5rem]"
                    key={index}
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
            </RevealWrapper>
          </div>
          <RevealWrapper distance="0px" duration={1200} reset>
            <IoIosBasket className="absolute text-[250px] text-[#F6F7E4] opacity-[0.1] top-[7%] right-[5%]" />
          </RevealWrapper>
          <RevealWrapper distance="0px" duration={1200} reset>
            <IoIosFlower className="absolute text-[200px] text-[#F6F7E4] opacity-[0.1] bottom-[7%] left-[5%]" />
          </RevealWrapper>
        </div>
        {/* CONNECTED*/}
        <div className="flex flex-row w-full h-[600px] items-center justify-center">
          <div
            id="connected"
            className=" relative h-full flex w-[60%] bg-[#F6F7E4] flex-col justify-center z-[50] px-[8rem]"
          >
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
            <RevealWrapper
              distance="0px"
              duration={1200}
              reset
              className="flex gap-[-2rem] items-baseline justify-start"
            >
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
            </RevealWrapper>
          </div>
          <div className="cycle relative flex w-[40%] flex-col h-full justify-center gap-[1rem] items-center p-[6rem]">
            <div className="mb-[1rem]">
              <Image src={cycle} width={600} height={150} alt=""></Image>
            </div>
          </div>
        </div>
        {/* FORM*/}
        <div
          id="form"
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
              <RevealWrapper
                distance="0px"
                duration={1200}
                reset
                className={clsx(
                  "text-[14px] text-[#F6F7E4] text-justify mr-[2rem]",
                  pfont.className
                )}
              >
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur nobis modi deserunt repellendus, culpa, quia dolorum
                quae accusamus quidem eos quisquam aliquam ratione qui optio
                facilis voluptatem quo earum rem?
              </RevealWrapper>
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
        {/* CONTACT*/}
        <div
          id="contact"
          className="flex flex-col w-full py-[6rem] px-[8rem] items-center justify-center gap-[4rem]"
        >
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
            <ContactsComponent contacts={contacts} />
          </div>
        </div>
        {/* FOOTER */}
        <footer>
          <div className="footer flex flex-col w-full h-full py-[2rem] px-[7%] justify-center">
            <div className="flex w-full justify-center text-[15px] text-[#eae0d5ff]">
              {"<></>"}
            </div>
            <div className="flex flex-row justify-center w-full py-[1rem] gap-[2rem]">
              <a
                href="#home"
                className={clsx(
                  "text-[15px] text-[#eae0d5ff] hover:underline",
                  h3font.className
                )}
              >
                Home
              </a>
              <a
                href="#popular"
                className={clsx(
                  "text-[15px] text-[#eae0d5ff]  hover:underline",
                  h3font.className
                )}
              >
                Popular
              </a>
              <a
                href="#about"
                className={clsx(
                  "text-[15px] text-[#eae0d5ff] hover:underline",
                  h3font.className
                )}
              >
                About us
              </a>
              <a
                href="#services"
                className={clsx(
                  "text-[15px] text-[#eae0d5ff] hover:underline",
                  h3font.className
                )}
              >
                Services
              </a>
              <a
                href="#form"
                className={clsx(
                  "text-[15px] text-[#eae0d5ff] hover:underline",
                  h3font.className
                )}
              >
                Contact us
              </a>
            </div>
            <div className="flex flex-row justify-center w-full py-[1rem] gap-[2rem]">
              <a href={contacts[0].value[0].href} target="_blank">
                <CiMobile4 className="text-[20px] text-[#eae0d5ff]" />
              </a>
              <a href={contacts[1].value[0].href} target="_blank">
                <CiMail className="text-[20px] text-[#eae0d5ff]" />
              </a>
              <a href={contacts[2].value[0].href} target="_blank">
                <CiLinkedin className="text-[20px] text-[#eae0d5ff]" />
              </a>
            </div>
            <i
              className={clsx(
                "text-[15px] text-[#eae0d5ff] text-center tracking-[.25rem] p-[0.5rem] pb-[2rem]",
                italicfont.className
              )}
            >
              {" "}
              - There will be blood.
            </i>
            <Separator className="bg-[#a9a6a2]" />
            <div className="dev flex justify-between p-[0.5rem]">
              <p className={h2font.className}>@2021 all right reserved.</p>
              <div className=" flex flex-row gap-2 items-center">
                <p className={h2font.className}>devloped by,</p>
                <a
                  href=""
                  className={clsx("hover:underline", h2font.className)}
                >
                  Sakir Ashker
                </a>
                <a
                  href=""
                  className="dev-bg flex p-[0.3rem] bg-[#e5d4ef] items-center justify-center rounded-[5rem] hover:underline underline-offset-2 transition duration-300"
                >
                  <FaUserTie className="dev-img text-[14px] text-[#575552]" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default HomePage;
