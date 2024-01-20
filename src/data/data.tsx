import { BiSolidHomeSmile } from "react-icons/bi";
import { MdHighQuality } from "react-icons/md";
import { GiSandsOfTime, GiLifeInTheBalance } from "react-icons/gi";
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa";
import { RiUser5Fill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

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
    description: "Simple to complex every handicraft-themed decoration",
    icon: <BiSolidHomeSmile className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Right Quality",
    description: "Quality that matches your budget and taste",
    icon: <MdHighQuality className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Efficiency",
    description: "Efficient in every context of architecture, interior design, or product design",
    icon: <GiLifeInTheBalance className="text-[36px] text-[#F6F7E4]" />,
  },
];

export const whyUsSecondary = [
  {
    title: "Solution Based Approach",
    description: "We prefer solution based approach for creating our products",
    icon: (
      <TbAlignBoxCenterMiddleFilled className="text-[36px] text-[#F6F7E4]" />
    ),
  },
  {
    title: "Quick Response",
    description: "Swift and efficient communication, addressing your inquiries and needs promptly",
    icon: <GiSandsOfTime className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Consumer Driver",
    description: "We prioritize customers satisfaction and open to collaboration",
    icon: <RiUser5Fill className="text-[36px] text-[#F6F7E4]" />,
  },
  {
    title: "Commitment",
    description: "Our products showcase a commitment to excellence and attention to detail",
    icon: <FaHandshake className="text-[36px] text-[#F6F7E4]" />,
  },
];

export const contacts = [
  {
    title: "Phone",
    icon: <AiFillPhone className="text-[28px] text-[#F6F7E4]" />,
    value: [
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
        href: "https://www.linkedin.com/company/royalcraftbdltd/",
      },
    ],
    color: "#1c7693",
  },
];

export const itemDemo = [
  {
    title: "Bag",
    description:
      "Introducing our sustainable bag, a stylish and eco-conscious choice that reflects our brand's commitment to sustainability. Crafted from recycled materials, this versatile and customizable bag makes a lasting impression while reducing waste and promoting a greener future.",
  },
  {
    title: "Pouf",
    description:
      "Presenting our eco-friendly pouf, a stylish embodiment of our brand's dedication to sustainability. Crafted from upcycled materials, this versatile and customizable pouf is a comfortable and lasting statement that reduces waste and supports a more environmentally responsible future.",
  },
  {
    title: "Planter",
    description:
      "a chic and eco-conscious choice that echoes our brand's deep commitment to environmental responsibility. This versatile and personalized planter not only brings a touch of green to any setting, actively reducing waste and promoting a more environmentally conscious future.",
  },
  {
    title: "Basket",
    description:
      "Meet our sustainable basket – a fashionable manifestation of our brand's eco-friendly ethos. Skillfully crafted from upcycled materials, this adaptable and personalized basket seamlessly merges practicality with an enduring statement of environmental responsibility",
  },
];
