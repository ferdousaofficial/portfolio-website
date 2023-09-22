import classNames from "classnames";
import { NavDataTypes } from "./types";

// whenever we need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData: NavDataTypes[] = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Works",
    path: "#works",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

// social links
export const socialLinks: NavDataTypes[] = [
  {
    name: "linkedin",
    path: "#",
  },
  {
    name: "github",
    path: "#works",
  },
  {
    name: "fiverr",
    path: "#skill",
  },
  {
    name: "instagram",
    path: "#skill",
  },
];

/* =======================  =======================
   On this file you can put global data 
 =======================  =======================*/
