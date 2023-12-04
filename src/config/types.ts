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
