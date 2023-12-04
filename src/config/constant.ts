import classNames from "classnames";
import { navItemsTypes } from "./types";

// whenever we need to change default className value we will use this
export const cx = classNames;

// navbar's items data
export const navItems: navItemsTypes[] = [
  {
    id: 1,
    name: "home",
    route: "#",
  },
  {
    id: 2,
    name: "service",
    route: "#service",
  },
  {
    id: 3,
    name: "works",
    route: "#works",
  },
  {
    id: 4,
    name: "reviews",
    route: "#reviews",
  },
  {
    id: 4,
    name: "contact",
    route: "#contact",
  },
];
