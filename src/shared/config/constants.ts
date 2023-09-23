import classNames from "classnames";
import {
  NavDataTypes,
  ServiceListType,
  SkillsType,
  socialLinksTypes,
} from "./types";

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
export const socialLinks: socialLinksTypes[] = [
  {
    src: "/images/icons/github.svg",
    path: "https://github.com/ferdousaofficial",
  },
  {
    src: "/images/icons/linkedin.svg",
    path: "https://www.linkedin.com/in/ferdousaofficial",
  },
  {
    src: "/images/icons/facebook.svg",
    path: "https://facebook.com/theferdousa",
  },
  {
    src: "/images/icons/instagram.svg",
    path: "https://instagram.com/ferdousaofficial",
  },
];

// skills
export const skills: SkillsType = [
  "React Js",
  "Next Js",
  "JavaScript",
  "TypeScript",
  "Html",
  "Css",
  "Bootstrap",
  "Tailwind Css",
  "Sass",
  "MIUI",
  "Node Js",
  "Express Js",
  "MongoDB",
];

// Service list data
export const ServiceList: ServiceListType = [
  "Fully Responsive",
  "SEO Friendly Code",
  "Performance optimization",
  "Maintenance and support",
  "Use Latest Technologies",
];
