import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/styles/info.css";
import { h1font, h1fontAlt } from "@/styles/myFonts";
import clsx from "clsx";
import React from "react";

const products = () => {
  return (
    <div className="docContainer">
      <Accordion className="accordion mem" type="single" defaultValue="item-1">
        <AccordionItem value="item-1" className="border-b-[0px]">
          <AccordionTrigger
            className={clsx("text-[24px] font-[700] text-[#746D64]", h1fontAlt.className)}
          >
            Our Team
          </AccordionTrigger>
          <AccordionContent>
            <ol>
              <li><b>Sharmin Akter</b> (Chairman)</li>
              <li><b>Mr. M Haque</b> (Managing Director)</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-[0px]">
          <AccordionTrigger
            className={clsx("text-[24px] font-[700] text-[#746D64]", h1fontAlt.className)}
          >
            Our Clients
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>KID (HEMTEX)</li>
              <li>Dymak International Trade and Development (Denmark Buyer)</li>
              <li>EQUIPROD INNOVATION</li>
              <li>Fashion Theory</li>
              <li>Fifth Alliance Global Trading Ltd.</li>
              <li>Grupo Sourcing</li>
              <li>SCO Sourcing</li>
              <li>Loom Sourcing BD.</li>
              <li>Wafa Sourcing BD.</li>
              <li>AFOT: SEWDEEN</li>
              <li>PIRAN</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default products;
