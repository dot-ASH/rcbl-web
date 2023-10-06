import { BsGlobeAmericas } from "react-icons/bs";
import { BiSolidPlaneTakeOff, BiSolidHomeSmile } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { GiSandsOfTime, GiLifeInTheBalance } from "react-icons/gi";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import { RiUser5Fill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { title } from "process";

export const menu = [
  { name: "Home", url: "#home" },
  { name: "Popular", url: "#popular" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

export const popular = [
  { name: "Home", url: "#home" },
  { name: "Popular", url: "#popular" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

export const whyUsPrimary = [
  {
    title: "Home Solution",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: <BiSolidHomeSmile className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Right Quality",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: <MdHighQuality className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Efficiency",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: <GiLifeInTheBalance className="text-[36px] text-[#F6F7E4]" />,
  },
];

export const whyUsSecondary = [
  {
    title: "Solution Based Approach",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: (
      <TbAlignBoxCenterMiddleFilled className="text-[36px] text-[#F6F7E4]" />
    ),
  },
  {
    title: "Quick Response",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: <GiSandsOfTime className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Consumer Driver",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: <RiUser5Fill className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Commitment",
    description: "uluhahu uihasl nvluhs auhalfn ygalh bfaywgb lab",
    icon: <FaHandshake className="text-[36px] text-[#F6F7E4]" />,
  },
];

export const contacts = [
  {
    title: "Phone",
    icon: <AiFillPhone className="text-[28px] text-[#F6F7E4]" />,
    value: [
      { name: "+880 1300307004", href: "tel:+8801300307004" },
      { name: "+880 1764916879", href: "tel:+8801764916879" },
    ],
    color: "#525e75",
  },
  {
    title: "Email",
    icon: <HiMail className="text-[28px] text-[#F6F7E4]" />,
    value: [
      { name: "info@royalcraftbd.com", href: "mailto:info@royalcraftbd.com" },
    ],
    color: "#c96b5b",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin className="text-[28px] text-[#F6F7E4]" />,
    value: [
      {
        name: "Royal Craft Bd LTD.",
        href: "https://www.linkedin.com/in/royal-craft-bd-ltd-756b1b210/?originalSubdomain=bd",
      },
    ],
    color: "#1c7693",
  },
];

export const itemDemo = [
  {
    title: "Pouf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore similique quaerat doloribus eaque molestiae maxime consequatur earumaccusantium, sequi officiis!",
  },
  {
    title: "Pouf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore similique quaerat doloribus eaque molestiae maxime consequatur earumaccusantium, sequi officiis!",
  },
  {
    title: "Pouf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore similique quaerat doloribus eaque molestiae maxime consequatur earumaccusantium, sequi officiis!",
  },
  {
    title: "Pouf",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore similique quaerat doloribus eaque molestiae maxime consequatur earumaccusantium, sequi officiis!",
  },
];
