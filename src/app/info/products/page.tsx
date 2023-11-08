import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/styles/info.css";
import { h1fontAlt } from "@/styles/myFonts";
import clsx from "clsx";
import React from "react";

const products = () => {
  return (
    <div className="docContainer">
      <Accordion className="accordion" type="single" defaultValue="item-1">
        <AccordionItem value="item-1" className="border-b-[0px]">
          <AccordionTrigger
            className={clsx("text-[24px] font-[700]", h1fontAlt.className)}
          >
            Products Capabilities
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                Storage, Rugs (handmade & machine made, printed), Planter, Fruit
                basket, Laundry bag, Beach bag, Beach metres, Mirror, Tea Light
                holder, Pouf/Dumps, Pot & Vases, Jute fabric bag, Tray,
                Terracotta, fruit basket.
              </li>
              <li>
                Duvet cover, Flat sheet, fitted sheet, pillow cover, cushion
                cover, padding,Quilted items & Home wear.
              </li>
              <li>
                Filling items like pillow, cushion, comforter, Quilted blanket,
                Quilted bed spread, Inner cushion, Chair pad, Floor cushion,
                Seat cushion.
              </li>
              <li>
                Placemat, Tea towel, Table cloth, Runner, Napkin, Coaster.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-[0px]">
          <AccordionTrigger
            className={clsx("text-[24px] font-[700]", h1fontAlt.className)}
          >
            Product Category
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Home Textile & HOME Hard goods.</li>
              <li>Eat, Live, Sleep, Kitchen, Bath, Home Deco etc.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-[0px]">
          <AccordionTrigger
            className={clsx("text-[24px] font-[700]", h1fontAlt.className)}
          >
            Material Category
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Home Textile & HOME Hard goods.</li>
              <li>
                Eat, Live, Sleep, Kitchen, Bath, Home Deco etc. Jute, Cotton,
                Linen, Velvet, Recycle Cotton, Recycled Polyester.
              </li>

              <li>
                Seagrass, Rattan/Cane, date leaf, Straw, Rice straw, Beetle nut,
                Corn leaf, Palm fibre,Banana fibre, Pineapple fibre.
              </li>
              <li>
                Wood, Bamboo, Rattan/Cane,Terracotta Date leaf, Kansgrass,
                Recycled Jute etc.
              </li>
              <li>
                Jute -cotton mixed, Cotton & banana fibre mixed; Banana fibre&
                Jute mixed.
              </li>
              <li>
                100% cotton, 100% recycled cotton, 100% recycled polyester
                fabric.
              </li>
              <li>All types of blended fabrics.</li>
              <li>100% linen & blended Linen fabric.</li>
              <li> Blended organic cotton.</li>
              <li>Striped sateen & Dobby sateen.</li>
              <li>
                Jacquard fabric & Yarn Dyed fabric, Velvet fabrics, microfiber
                fab.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default products;
