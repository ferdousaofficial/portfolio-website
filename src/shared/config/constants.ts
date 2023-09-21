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
    name: "Skill",
    path: "#skill",
  },
  {
    name: "Works",
    path: "#works",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

/* =======================  =======================
   On this file you can put global data 
 =======================  =======================*/
