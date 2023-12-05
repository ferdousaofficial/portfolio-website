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
