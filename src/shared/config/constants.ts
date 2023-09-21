import classNames from "classnames";
import { NavDataTypes } from "./types";


// whenever we need to change default className value we will use this
export const cx = classNames;


// nav data
export const navData : NavDataTypes[] = [
 
  {
    name : "Experience",
    path : "#experience"
  },
  {
    name : "Works",
    path : "/works"
  },
  {
    name : "Reviews",
    path : "#reviews"
  }
]

/* =======================  =======================
   On this file you can put global data 
 =======================  =======================*/