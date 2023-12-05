import { IconType } from "react-icons";

// Define interface for icons
export interface IconsTypes {
  [key: string]: IconType;
}

// define interface for nav items
export interface navItemsTypes {
  id: number;
  name: string;
  route: string;
}

// define interface for skill items
export interface skillsTypes {
  id: number;
  image: string;
}

// define interface for skill items
export interface ItemTypes {
  id: number;
  icon: string;
  title: string;
  text: string;
}

// define interface for our apporch items
export interface ItemTypes {
  id: number;
  icon: string;
  title: string;
  text: string;
}

// define interface for portfolio Items
export interface portfolioItemsTypes {
  id: number;
  thumbnail: string;
  title: string;
  text: string;
  link: string;
  align: string;
}

// define interface for social Icons
export interface socialIconsTypes {
  id: number;
  link: string;
  imgSrc: string;
}

// define interface for articles
export interface articlesTypes {
  id: number;
  coverImage: string;
  title: string;
  link: string;
}
