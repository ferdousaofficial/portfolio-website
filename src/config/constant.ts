import classNames from "classnames";
import { navItemsTypes, skillsTypes } from "./types";

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

// skills data
export const skillItems: skillsTypes[] = [
  {
    id: 1,
    image: "/images/skills/html.png",
  },
  {
    id: 2,
    image: "/images/skills/css.png",
  },
  {
    id: 3,
    image: "/images/skills/javascript.png",
  },
  {
    id: 4,
    image: "/images/skills/reactjs.png",
  },
  {
    id: 5,
    image: "/images/skills/nextjs.png",
  },
  {
    id: 6,
    image: "/images/skills/nodejs.png",
  },
  {
    id: 7,
    image: "/images/skills/express-js.png",
  },
  {
    id: 8,
    image: "/images/skills/mongodb.png",
  },
  {
    id: 9,
    image: "/images/skills/tailwindcss.png",
  },
  {
    id: 10,
    image: "/images/skills/sass.png",
  },
];
