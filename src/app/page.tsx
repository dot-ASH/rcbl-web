"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiSeparator } from "react-icons/ri";
import rcblLogo from "../../public/logo_outline.png";
import rcbl from "@/app/icon.png";
import wmap from "../../public/wmap.png";
import bag from "../../public/bagshadow.png";
import cycle from "../../public/cycle.png";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiCross, BiSolidPlaneTakeOff } from "react-icons/bi";
import { CiMail, CiLinkedin, CiMobile4 } from "react-icons/ci";
import { IoIosBasket, IoIosFlower } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { AccountForm } from "@/components/ui/account-form";
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
import { HiMenuAlt3 } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "../styles/main.css";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { images } from "@/data/images";
import { CldImage } from "next-cloudinary";

function Home() {
  const { toast } = useToast();
  const { setTheme } = useTheme();
  const [clicked, setClicked] = useState(false);
  const [hasMenu, setMenu] = useState(false);
  const [changeTop, setChangeTop] = useState(false);
  const [header, setHeader] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showPanel, setShowPanel] = useState(false);

  const nodeRef = useRef(null);

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

  const handleScroll = () => {
    var y = Math.abs(window.scrollY);
    y > 100 && y < 800 ? setChangeTop(true) : setChangeTop(false);
    y > 450 ? setHeader(true) : setHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const Intro = (): JSX.Element => {
    return (
      <div className="float-box hidden sm:flex">
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
            className={clsx(
              "text-[18px] text-[#575552] text-center sm:text-left",
              h1fontAlt.className
            )}
          >
            We Craft your imagination
          </h1>
          <p
            className={clsx(
              "text-[12px] text-[#575552] text-center sm:text-left",
              pfont.className
            )}
          >
            100% Export Oriented Home Hardgoods & Home textile Manufacturer &
            exporter.
            <br />
            <br />
            <i className="mt-[1rem]">
              BSCI & SEDEX Certified*
            </i>
          </p>
        </div>
      </div>
    );
  };

  const IntroBase = (): JSX.Element => {
    return (
      <div
        className="flex absolute bottom-[0%] ml-[-1rem] sm:hidden"
        style={{ zIndex: changeTop ? "1000" : "3000" }}
        onClick={() => setChangeTop((prev) => !prev)}
      >
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
            className={clsx(
              "text-[18px] text-[#575552] text-center sm:text-left",
              h1fontAlt.className
            )}
          >
            We Craft your imagination
          </h1>
          <p
            className={clsx(
              "text-[12px] text-[#575552] text-center sm:text-left",
              pfont.className
            )}
          >
            100% Export Oriented Home Hardgoods & Home textile Manufacturer &
            exporter.
            <br />
            <br />
            <i className="mt-[2rem]">BSCI & SEDEX Certified*</i>
          </p>
        </div>
      </div>
    );
  };

  const Banner = ({ title, description }): JSX.Element => {
    return (
      <>
        <div className="float-box-right hidden sm:flex sm:w-[300px]">
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
          <p
            className={clsx(
              "text-[12px] text-[#eae0d5ff] text-center sm:text-left",
              pfont.className
            )}
          >
            {description}
          </p>
        </div>
        <Button
          className="absolute left-[3%] bottom-10 hidden sm:flex bg-[#77736d] border-[#6d6a66] border-[0.005rem] w-max shadow-xl shadow-stone-400 h-[45px]"
          asChild
        >
          <Link href={"#contact"}>
            <b
              className={clsx(
                "text-[14px] text-[#eae0d5ff] text-center sm:text-left",
                h1fontAlt.className
              )}
            >
              CONTACT US NOW
            </b>
          </Link>
        </Button>
      </>
    );
  };

  const BannerBase = ({ title, description }): JSX.Element => {
    return (
      <div
        className="flex float-box-right-base absolute sm:hidden ml-[1rem] w-[300px] h-[200px] bottom-[1rem]"
        style={{ zIndex: changeTop ? "3000" : "1000" }}
        onClick={() => setChangeTop((prev) => !prev)}
      >
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
        <p
          className={clsx(
            "text-[12px] text-[#eae0d5ff] text-center sm:text-left",
            pfont.className
          )}
        >
          {description}
        </p>
      </div>
    );
  };

  const SidePanel = (): JSX.Element => {
    return (
      <CSSTransition
        in={showPanel}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
        className="side-menu fixed h-[100vh] flex flex-col bg-[#eae0d5ff] p-[3rem] z-[3000] border-[0.1rem] border-[#575552] rounded-l-[1rem] duration-500 transition-all gap-[4rem] right-0"
      >
        <div>
          <BiCross
            className="text-[#575552] text-[24px] rotate-[130deg]"
            onClick={() => setShowPanel(false)}
          />
          <div className="flex flex-col gap-[2rem] ml-[-1rem]">
            {menu.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center gap-[2rem] sm:gap-[1rem] py-[1rem] px-[3rem] ml-[-1rem]"
                  key={index}
                >
                  <div className="flex sm:hidden">
                    <RiSeparator className="text-[18px] text-[#575552] rotate-90" />
                  </div>
                  <a
                    href={item.url}
                    className={clsx("text-[#575552]", h3font.className)}
                  >
                    {item.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </CSSTransition>
    );
  };

  return (
    <main className="relative">
      <SidePanel />
      <div className="absolute navmenubar hidden sm:flex justify-center items-center p-6 gap-8 text-[#575552] light-bg t-0 z-[1000] w-full text-[16px]">
        {menu.map((item, index) => {
          return (
            <div
              className="flex flex-row items-center sm:gap-[1rem] lg:gap-[4rem]"
              key={index}
            >
              <a
                href={item.url}
                className={clsx(
                  "text-[#575552] hover:underline",
                  h3font.className
                )}
              >
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

      <div className="body light-bg pt-[1rem] sm:pt-[4rem] flex flex-col">
        <div className="flex flex-row justify-between sm:justify-center z-[2000] w-[100%] items-center ">
          <Image
            src={rcblLogo}
            width={100}
            height={100}
            alt="logo"
            className="m-[1rem] sm:m-[0rem]"
          />
          <HiMenuAlt3
            className="menu-indicator flex sm:hidden text-[#575552] text-[24px] opacity-[0.8] mr-[2rem]"
            onClick={() => setShowPanel(true)}
          />
        </div>
        {/* HOME */}
        <div
          id="home"
          className="relative flex flex-col w-[98%] justify-center border-show  mt-[-2.5rem] p-[1rem] sm:p-[3rem] sm:py-[9rem] "
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
            id="swiper"
            className="mySwiper "
            effect={"fade"}
            modules={[EffectFade, Navigation, Pagination]}
          >
            <SwiperSlide className="relative light-bg swiperContainer ">
              <img className="swiper-img" src="/rcbl-bag.png" alt="" />
              <Intro />
              <Banner
                title={itemDemo[0].title}
                description={itemDemo[0].description}
              />
              <div
                className="absolute bottom-[2rem] flex sm:hidden w-full h-full px-auto justify-center"
                onClick={() => setChangeTop((prev) => !prev)}
              >
                <IntroBase />
                <BannerBase
                  title={itemDemo[0].title}
                  description={itemDemo[0].description}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative light-bg flex">
              <img className="swiper-img" src="/rcbl-pouf.png" alt="" />
              <Intro />
              <Banner
                title={itemDemo[1].title}
                description={itemDemo[1].description}
              />
              <div
                className="absolute bottom-[2rem] flex sm:hidden w-full h-full px-auto justify-center"
                onClick={() => setChangeTop((prev) => !prev)}
              >
                <IntroBase />
                <BannerBase
                  title={itemDemo[1].title}
                  description={itemDemo[1].description}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative light-bg">
              <img className="swiper-img" src="/rcbl-planter.png" alt="" />
              <Intro />
              <Banner
                title={itemDemo[2].title}
                description={itemDemo[2].description}
              />
              <div
                className="absolute bottom-[2rem] flex sm:hidden w-full h-full px-auto justify-center"
                onClick={() => setChangeTop((prev) => !prev)}
              >
                <IntroBase />
                <BannerBase
                  title={itemDemo[2].title}
                  description={itemDemo[2].description}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative light-bg">
              <img className="swiper-img" src="/rcbl-basket.png" alt="" />
              <Intro />
              <Banner
                title={itemDemo[3].title}
                description={itemDemo[3].description}
              />
              <div
                className="absolute bottom-[2rem] flex sm:hidden w-full h-full px-auto justify-center"
                onClick={() => setChangeTop((prev) => !prev)}
              >
                <IntroBase />
                <BannerBase
                  title={itemDemo[3].title}
                  description={itemDemo[3].description}
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <RevealWrapper
            origin="right"
            duration={1800}
            reset
            className="absolute bottom-[42%] sm:bottom-[30%]  right-[-1.5rem] border-[#746D64] p-[1rem] z-[2000] shadow-md rounded-tl-[1rem] rounded-bl-[1rem] bg-[#dfd6cc]"
          >
            <p className={clsx("text-[#746D64] text-[12px]", pfont.className)}>
              Swipe to left to see more! &nbsp;
            </p>
          </RevealWrapper>
          <RevealWrapper
            origin="left"
            duration={600}
            reset
            className="flex sm:hidden absolute bottom-[-1.5rem] z-[2000] left-[2rem]"
          >
            <Button
              className="bg-[#77736d] text-[#eae0d5ff] hover:text-[#544f4a] hover:bg-[#eae0d5ff] border-[#6d6a66] border-[0.005rem] w-max shadow-xl shadow-stone-400 h-[45px]"
              asChild
            >
              <Link
                href={"#contact"}
                className={clsx(
                  "text-[18px] text-[#575552] text-center sm:text-left",
                  h1fontAlt.className
                )}
              >
                <b>CONTACT US</b>
              </Link>
            </Button>
          </RevealWrapper>
        </div>
        {/* IN THE SPOTLIGHT */}
        <div
          id="popular"
          className="flex w-full h-[650px] sm:h-[680px] bg-[#746D64] mt-[5rem] sm:mt-[-2rem] items-center justify-center pt-[1rem]"
          onWheel={(event) => onWheel(event)}
          onScroll={(event) => onWheel(event)}
        >
          <div className="flex flex-col w-[85%] h-full p-[1rem] sm:p-[4rem] gap-[3rem] pb-[6rem]">
            <p
              className={clsx(
                "text-[32px] text-[#eae0d5ff] pt-[3rem] sm:pt-[2rem]",
                h1font.className
              )}
            >
              IN THE SPOTLIGHT
            </p>
            <div
              className="h-[100%] w-[100%] overflow-scroll rounded-[5px] mb-[0.5rem] sm:mb-[2rem]"
              id="container"
            >
              <div className="flex w-[1600px] h-full justify-between gap-[3rem] rounded-[5px] overflow-hidden">
                {images.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-shrink-0 w-[350px] aspect-square rounded-[5px] overflow-hidden"
                      style={{ background: item.bg }}
                    >
                      <CldImage
                        width="600"
                        height="600"
                        src={item.href}
                        alt={item.title}
                        className="object-cover opacity-[0.85]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US */} {/* BEST WE ARE */}
        <div
          id="about"
          className="flex  w-full h-full  items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="relative flex lg:w-[40%] flex-col h-full justify-center gap-[1rem] items-center p-[3.5rem] lg:p-[5rem] pt-[6rem] z-[100]">
              <div className="sm:hidden block absolute top-5 left-[-40px] z-[50]">
                <RevealWrapper origin="left" duration={1200} reset>
                  <BiSolidPlaneTakeOff className="text-[160px] text-[#00000018]" />
                </RevealWrapper>
              </div>
              <div className="mb-[1rem]">
                <img src="/bagshadow.png" width={100} height={100} alt=""></img>
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
                  "text-[14px] text-[#575552]  text-center leading-7",
                  pfont.className
                )}
              >
                Royal Craft BD utilizes eco-friendly local materials and skills
                to create sustainable artistic products, with the aim of
                introducing non-traditional handicrafts to the global market.
                Our dedicated and professional team works around the clock to
                meet buyer requirements and stay up-to-date with industry
                trends, ensuring our products align with this trendy sector. We
                strongly believe that in today's global economy, environmental
                protection is vital for any sustainable business to thrive and
                endure, given the pressing issues of global warming, climate
                change, ozone layer damage, and biodiversity loss.
                <br />
                <a href="#contact">
                  <b>So contact us now</b>
                </a>
                <br />
                <br />
                <Button
                  className="hover:bg-[#575552] hover:text-[#eae0d5ff] text-[#544f4a] bg-[#eae0d5ff] border-[#6d6a66] border-[0.005rem]"
                  asChild
                >
                  <Link
                    href={"/info/members"}
                    className={clsx(
                      "text-[18px] text-[#575552] text-center sm:text-left",
                      pfont.className
                    )}
                  >
                    learn more about us
                  </Link>
                </Button>
              </RevealWrapper>
            </div>
            <div className="relative flex lg:h-[auto] lg:w-[60%] bg-[#F6F7E4] flex-col h-full justify-center items-center z-[50] py-[2rem]">
              <div className="absolute top-[-5rem] right-[-10px] sm:top-15 sm:right-[-40px] ">
                <RevealWrapper origin="right">
                  <BsGlobeAmericas className="text-[92px] sm:text-[160px] text-[#00000018]" />
                </RevealWrapper>
              </div>
              <div className="hidden sm:block absolute top-5 left-[-40px] z-[50]">
                <RevealWrapper origin="left" duration={1200} reset>
                  <BiSolidPlaneTakeOff className="text-[160px] text-[#00000018]" />
                </RevealWrapper>
              </div>
              <img
                src="/wmap.png"
                width={700}
                height={150}
                alt=""
                className="py-[2rem] px-[2rem] sm:px-[0rem]"
              ></img>
            </div>
          </div>
        </div>
        <div
          id="services"
          className="flex relative flex-col w-full py-[7rem] bg-[#746D64] justify-center items-center"
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
          <div className="flex flex-row sm:flex-col gap-[1rem] sm:gap-[4rem] justify-center items-start sm:items-center">
            <RevealWrapper
              reset={true}
              className="flex flex-col sm:flex-row gap-[2rem] sm:gap-[1rem]  justify-center items-center"
            >
              {whyUsPrimary.map((item, index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center w-[150px] sm:w-[200px] gap-[0.5rem]"
                    key={index}
                  >
                    {item.icon}
                    <p
                      className={clsx(
                        "text-center font-[700] text-[#F6F7E4] text-[16px] sm:text-[18px]",
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
              className="flex flex-col sm:flex-row gap-[2rem] sm:gap-[1rem] justify-center items-center"
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
                        "text-center font-[700] text-[#F6F7E4] text-[16px] sm:text-[18px]",
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
            <IoIosBasket className="absolute text-[250px] text-[#F6F7E4] opacity-[0.05] top-[7%] right-[5%]" />
          </RevealWrapper>
          <RevealWrapper distance="0px" duration={1200} reset>
            <IoIosFlower className="absolute text-[200px] text-[#F6F7E4] opacity-[0.2] sm:opacity-[0.1] bottom-[6%] left-[4%]" />
          </RevealWrapper>
        </div>
        {/* CONNECTED*/}
        <div className="flex flex-col lg:flex-row w-full lg:h-[600px] items-center justify-center">
          <div
            id="connected"
            className=" relative h-full flex w-full lg:w-[60%] bg-[#F6F7E4] flex-col justify-center items-center lg:items-start z-[50] p-[3rem] py-[6rem] lg:px-[8rem] "
          >
            <div className="relative mb-[2rem] flex flex-col items-center lg:items-start">
              <p
                className={clsx(
                  "text-[24px] lg:text-[32px] text-[#575552] text-center lg:text-left pb-[1rem]",
                  h1font.className
                )}
              >
                STAY CONNECTED
              </p>
              <div className="absolute w-[150px] h-[5px] bottom-0 bg-[#575552] rounded-[5px]" />
            </div>
            <p
              className={clsx(
                "text-[22px] text-[#575552]  lg:pb-[1rem]",
                italicfont.className
              )}
            >
              Stay connected and embrace our handcrafted home decor.
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
                O
              </p>
              <p
                className={clsx(
                  "text-[20px] text-[#575552]  text-left",
                  italicfont.className
                )}
              >
                u
              </p>
              <p
                className={clsx(
                  "text-[14px] text-[#575552] ml-[-1.7rem] text-left",
                  pfont.className
                )}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; r brand is dedicated
                to creating top-quality handmade decor products that have
                already graced homes in the USA, Denmark, Poland, France, and
                the Netherlands. By staying connected, you gain exclusive access
                to our latest designs and special offers, ensuring your home is
                always adorned with unique and culturally inspired decor. Join
                us on our global journey, where quality craftsmanship meets your
                passion for home decoration. Stay connected for a world of
                elegant decor at your fingertips!
              </p>
            </RevealWrapper>
            <Button
              className="hover:bg-[#575552] hover:text-[#eae0d5ff] text-[#544f4a] bg-[#F6F7E4] border-[#6d6a66] border-[0.005rem] w-max mt-[2rem]"
              asChild
            >
              <Link
                href={"/info/products"}
                className={clsx(
                  "text-[18px] text-[#575552] text-center sm:text-left",
                  pfont.className
                )}
              >
                learn more about our products
              </Link>
            </Button>
          </div>
          <div className="cycle relative flex w-full lg:w-[40%] flex-col h-full justify-center gap-[1rem] items-center ml-[2rem] p-[2rem] lg:p-[6rem]">
            <div className="mb-[2rem] lg:mb-[1rem]">
              <img src={"/cycle.png"} width={600} height={150} alt=""></img>
            </div>
          </div>
        </div>
        {/* FORM*/}
        <div
          id="form"
          className="flex flex-col lg:flex-row w-full bg-[#746D64] lg:px-[8rem] lg:py-[6rem] p-[3rem] py-[5rem] items-center justify-between gap-[4rem] lg:gap-[0rem]"
        >
          <div className="relative flex w-full lg:w-[40%] flex-col h-full justify-center gap-[1rem] items-center">
            <div className="flex flex-col justify-start items-left h-full">
              <p
                className={clsx(
                  "text-[28px] text-[#eae0d5ff] text-center lg:text-left py-[2rem] pb-[2rem] lg:pb-[1rem] ",
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
                  "text-[14px] text-[#F6F7E4] text-center lg:text-justify lg:mr-[2rem]",
                  pfont.className
                )}
              >
                You have any question or queries you can ask us here. This is
                the direct line to our brand. We value every queries and aim to
                provide swift responses. Your input helps us enhance your
                experience and improve our services. Thank you!
              </RevealWrapper>
              <div className="hidden lg:block absolute w-[3px] h-[150px] right-0 top-3 bg-[#eae0d5ff] rounded-[5px]" />
            </div>
          </div>
          <div className="relative flex w-full lg:w-[60%] flex-col h-full justify-center gap-[1rem] items-left lg:ml-[3rem]">
            <div className="form-border-show rounded-[5px] p-[1.5rem] space-y-4">
              <div>
                <h3
                  className={clsx(
                    "text-[22px] lg:text-[28px] text-[#F6F7E4] text-justify mr-[2rem]",
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
          <div className="flex relative items-center justify-center flex-nowrap">
            <p
              className={clsx(
                "flex whitespace-nowrap text-[26px] text-[#746D64] text-center mb-[1rem]",
                h1font.className
              )}
            >
              CONTACT US?
            </p>
            <div className="absolute w-[80px] h-[5px] bottom-0 bg-[#746D64] rounded-[5px]" />
          </div>
          <div className="w-full h-full flex flex-col">
            <ContactsComponent contacts={contacts} />
          </div>
        </div>
        {/* FOOTER */}
        <footer>
          <div className="footer flex flex-col w-full h-full py-[2rem] px-[7%] justify-center">
            <div className="flex w-full justify-center text-[15px] text-[#eae0d5ff]">
              <img
                src={"/rcbl_icon.png"}
                width={30}
                height={30}
                alt="logo"
                className="m-[1rem] sm:m-[0rem]"
              />
            </div>
            <Link
              href="/info/members"
              className={clsx(
                "text-[14px] text-[#eae0d5ff] text-center tracking-[.1rem] p-[0.5rem] pt-[1rem] hover:underline",
                h2font.className
              )}
            >
              Introducing our team members
            </Link>
            <div className="flex flex-row justify-center w-full py-[1rem] gap-[1rem] sm:gap-[2rem]">
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
              - We craft your imagination.
            </i>
            <Separator className="bg-[#a9a6a2]" />
            <div className="dev flex justify-between p-[0.5rem]">
              <p className={h2font.className}>@2021 all right reserved.</p>
              <div className=" flex flex-row gap-2 items-center">
                <p className={h2font.className}>devloped by,</p>
                <a
                  href="mailto:sakir.ashker@gmail.com"
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

export default Home;
