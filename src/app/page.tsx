import Image from "next/image";
import "./styles/main.css";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

export default function Home() {
  return (
    <div className="body">
      <div className="nav-con m-[3rem] items-center">
        <div className="nav-bar">
          <div className="logo-div">
            <img className="logo" src="/RCBL-LOGO.png" alt="Royal Craft B" />
          </div>
            <p className="font-bold text-2xl"> Royal Craft BD LTD</p>
        </div>
      </div>
      <div className="main">
        <div className="about gap-[3rem]">
          <div className="motto gap-[1rem] ">
            <p className="font-bold text-[50px]">WE CRAFT YOUR</p>
            <p className="font-bold text-[50px] text-[#708b75]">IMAGINATION</p>
          </div>
          <div className="about-text">
            <p className="font-bold text-xl">
              <i>- A handicraft exporter in Bangladesh.</i>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center align-middle items-center">
          <div className="contact">
            <p
              style={{
                color: "#ffddd3",
                textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              <b>Contact Us</b>
            </p>
            <div className="contact-grid">
              <div className="phone grid-item gap-[0.5rem]">
                <AiOutlinePhone className="text-[30px]" />
                <p>
                  <a href="tel:+8801300307004">01300307004</a> <br />
                  <a href="tel:+8801764916879">01764916879</a>
                </p>
              </div>
              <div className="mail grid-item">
                <div className="linkedin grid-item gap-[0.5rem]">
                  <AiOutlineMail className="text-[30px]" />
                  <a href="mailto:info@royalcraftbd.com">
                    info@royalcraftbd.com
                  </a>
                </div>
              </div>
              <div className="linkedin grid-item gap-[0.5rem]">
                <AiOutlineLinkedin className="text-[30px]" />
                <a href="https://bd.linkedin.com/in/royal-craft-bd-ltd-756b1b210">
                  RCBL
                </a>
              </div>
              <div className="gmap grid-item gap-[0.5rem]">
                <BiMap className="text-[30px]" />
                <a>Gazipur, Bangladesh</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
