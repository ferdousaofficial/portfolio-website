import classNames from "classnames";
import { ServiceItemTypes, navItemsTypes, skillsTypes } from "./types";

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

// service items
export const ServiceItems: ServiceItemTypes[] = [
  {
    id: 1,
    icon: "/icons/service-icons/website-layout.png",
    title: "new modern UI",
    text: "Based on your requirements, we'll design a new modern user interface for your website.",
  },
  {
    id: 2,
    icon: "/icons/service-icons/technology.png",
    title: "Use Latest technology",
    text: "We'll use the latest technology to create a website that surpasses your expectations.",
  },
  {
    id: 3,
    icon: "/icons/service-icons/seo.png",
    title: "SEO Friendly",
    text: "We make sure that the website we create is optimized for search engines.",
  },
  {
    id: 4,
    icon: "/icons/service-icons/responsive.png",
    title: "Fully responsive",
    text: "Our priority is to create websites that're fully responsive and accessible across all devices.",
  },
  {
    id: 5,
    icon: "/icons/service-icons/performance.png",
    title: "High Performance",
    text: "Our websites are optimized for high performance, ensuring a seamless user experience.",
  },
  {
    id: 6,
    icon: "/icons/service-icons/maintaince.png",
    title: "Easy to Maintain",
    text: "We build user-friendly websites that are easy to maintain for developers.",
  },
];
