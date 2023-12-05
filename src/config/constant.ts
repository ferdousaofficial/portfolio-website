import classNames from "classnames";
import {
  ItemTypes,
  navItemsTypes,
  portfolioItemsTypes,
  skillsTypes,
  socialIconsTypes,
} from "./types";

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
export const ServiceItems: ItemTypes[] = [
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

// our apporch data
export const OurApprochItems: ItemTypes[] = [
  {
    id: 1,
    icon: "/icons/our-approch-icons/step-1.svg",
    title: "Planning & Preparation",
    text: "We'll lay the foundation of your website by defining your goals, target audience, and content strategy.",
  },
  {
    id: 2,
    icon: "/icons/our-approch-icons/step-2.svg",
    title: "Design the UI",
    text: "We'll craft a modern & user-friendly UI for your website that provides an effortless user experience.",
  },
  {
    id: 3,
    icon: "/icons/our-approch-icons/step-3.svg",
    title: "Design Implementation",
    text: "We'll develop your website using the latest and best technology based on the design.",
  },
  {
    id: 4,
    icon: "/icons/our-approch-icons/step-4.svg",
    title: "Launch the Website",
    text: "Once your website is complete and you're satisfied, we'll seamlessly launch it to the world.",
  },
];

// works data
export const portfolioItems: portfolioItemsTypes[] = [
  {
    id: 1,
    thumbnail: "/images/works/project-1.png",
    title: "ShopScript",
    text: "I developed the front-end of this e-commerce website. It is built with Next Js 14 , Tailwind Css , and Framer Motion.",
    link: "https:shopscript-web.vercel.app",
    align: "left",
  },
  {
    id: 1,
    thumbnail: "/images/works/project-2.png",
    title: "ShopScript",
    text: "I developed the front-end of this e-commerce website. It is built with Next Js 14 , Tailwind Css , and Framer Motion.",
    link: "https:shopscript-web.vercel.app",
    align: "right",
  },
  {
    id: 1,
    thumbnail: "/images/works/project-3.png",
    title: "ShopScript",
    text: "I developed the front-end of this e-commerce website. It is built with Next Js 14 , Tailwind Css , and Framer Motion.",
    link: "https:shopscript-web.vercel.app",
    align: "left",
  },
];

// social icons
export const socialIcons: socialIconsTypes[] = [
  {
    id: 1,
    imgSrc: "/icons/social-icons/linkedin.png",
    link: "https://www.linkedin.com/in/ferdousaofficial",
  },
  {
    id: 2,
    imgSrc: "/icons/social-icons/email.png",
    link: "mailto:ferdousaofficial@gmail.com",
  },
  {
    id: 3,
    imgSrc: "/icons/social-icons/github.png",
    link: "https://github.com/ferdousaofficial",
  },
];
