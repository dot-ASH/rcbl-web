import { BsGlobeAmericas } from "react-icons/bs";
import { BiSolidPlaneTakeOff, BiSolidHomeSmile } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { GiSandsOfTime, GiLifeInTheBalance } from "react-icons/gi";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import { RiUser5Fill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";

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
    name: "Phone",
    icon: <AiFillPhone className="text-[28px] text-[#F6F7E4]" />,
    value: "10293976397",
    color: "#525e75",
  },
  // { name: "Popular", url: "#popular" },
  // { name: "About", url: "#about" },
  // { name: "Contact", url: "#contact" },
];
