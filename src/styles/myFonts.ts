import { Averia_Libre } from "next/font/google";
import { Rubik } from "next/font/google";
import { Audiowide } from "next/font/google";
import { Orienta } from "next/font/google";
import { Quantico } from "next/font/google";
import { Della_Respira } from "next/font/google";
import { Taprom } from "next/font/google";

export const title = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const h1font = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

export const h1fontAlt = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const h2font = Della_Respira({
  subsets: ["latin"],
  weight: ["400",],
});

export const h3font = Averia_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const pfont = Orienta({
  subsets: ["latin"],
  weight: ["400"],
});

export const italicfont = Taprom({
  subsets: ["latin"],
  weight: ["400"],
});
